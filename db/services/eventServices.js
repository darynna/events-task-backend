const { Event } = require("../models/event")
const { httpError } = require('../../utilities/httpError');

const getEventsService = async (req, res) => {
  try {
    const events = await Event.find();
    return events
  } catch (error) {
    const errorMessage = 'Internal server error';
    throw httpError(500, errorMessage);
  }
};

const addParticipantService = async (eventId, participantData) => {
  try {
    const event = await Event.findById(eventId);
    console.log(event)

    if (!event) {
      throw httpError(404, 'Event not found');
    }

    const existingParticipant = event.participants.find(participant => participant.email === participantData.email);
    if (existingParticipant) {
      throw httpError(400, 'Participant with the provided email already exists for this event');
    }

    const newParticipant = {
      name: participantData.name,
      email: participantData.email,
      dateOfBirth: participantData.dateOfBirth,
      heardAboutEvent: participantData.heardAboutEvent
    };

    event.participants.push(newParticipant);

    await event.save();
    return event;
  } catch (error) {
    throw error;
  }
};


module.exports = {
    getEventsService,
    addParticipantService,
}