const Joi = require('joi');

const eventSchema = Joi.object({
  title: Joi.string().required().messages({ 'any.required': 'Title is required' }),
  description: Joi.string().required().messages({ 'any.required': 'Description is required' }),
  date: Joi.date().required().messages({ 'any.required': 'Event date is required' }),
  organizer: Joi.string().required().messages({ 'any.required': 'Organizer is required' }),
  participants: Joi.array().items(
    Joi.object({
      name: Joi.string().required().messages({ 'any.required': 'Participant name is required' }),
      emailAddress: Joi.string().required().messages({ 'any.required': 'Participant email is required' }),
      dateOfBirth: Joi.string().required().messages({ 'any.required': 'Date of birth is required' }),
      heardAboutEvent: Joi.string().valid('social_media', 'friends', 'myself').required().messages({ 'any.required': 'Method of hearing about the event is required' }),
    })
  )
});

module.exports = { eventSchema }
