const { Schema, model } = require("mongoose");
const handleMongooseError = require("../../utilities/handleMongooseError.js");
const { array } = require("joi");

const EventSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
    },
    description: {
      type: String,
      required: [true, "Description is required"],
    },
    date: {
      type: Date,
      required: [true, "Event date is required"],
    },
    organizer: {
      type: String,
      required: [true, "Organizer is required"],
    },
    participants: [
      {
        type: {
          name: {
            type: String,
            required: [true, "Participant name is required"],
          },
          email: {
            type: String,
            required: [true, "Email is required"]
          },
          dateOfRegistration: {
             type: Date,
           required: [true, "Registration date is required"],
          },
          dateOfBirth: {
            type: String,
            required: [true, "Date of birth is required"],
          },
          heardAboutEvent: {
            type: String,
            enum: ["social_media", "friends", "myself"],
            required: [true, "Method of hearing about the event is required"],
          },
        },
        required: true, // Each participant object is required
      }
    ]
  },
  {
    versionKey: false,
  }
);


EventSchema.post("save", handleMongooseError);


const Event = model("events", EventSchema);

module.exports = {
  Event,
};