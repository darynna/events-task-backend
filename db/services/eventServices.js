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

module.exports = {
    getEventsService
}