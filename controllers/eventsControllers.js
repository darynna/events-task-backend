const catchAsync = require("../utilities/catchAsync");
const {getEventsService, addParticipantService} = require("../db/services/eventServices")

const getEvents = async (req, res, next) => {
  const allEvents = await getEventsService();
  console.log(allEvents)
  res.status(201).json({
    allEvents 
  });
};


const addParticipant = async (req, res, next) => {
  try {
    const eventId = req.params.eventId;
    const participantData = req.body;

    // Call the service to add participant to the event
    const event = await addParticipantService(eventId, participantData);

    res.status(201).json({ message: 'Participant added successfully', event });
  } catch (error) {
    if (error.status) {
      // If the error has a status code, it's an expected error
      next(error);
    } else {
      next(httpError(500, error.message));
    }
  }
};


module.exports = {
  getEvents: catchAsync(getEvents),
  addParticipant: catchAsync(addParticipant)
}