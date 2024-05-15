const Joi = require('joi');

const participantSchema = Joi.object({
  name: Joi.string().required().messages({ 'any.required': 'Participant name is required' }),
  email: Joi.string().email().required().messages({ 'any.required': 'Participant email is required' }),
  dateOfBirth: Joi.string().required().messages({ 'any.required': 'Date of birth is required' }),
  heardAboutEvent: Joi.string().valid('social_media', 'friends', 'myself').required().messages({ 'any.required': 'Method of hearing about the event is required' }),
});

module.exports = { participantSchema };
