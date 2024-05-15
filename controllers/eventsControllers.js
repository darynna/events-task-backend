const catchAsync = require("../utilities/catchAsync");
const {getEventsService} = require("../db/services/eventServices")

const getEvents = async (req, res, next) => {
  const allEvents = await getEventsService();
  console.log(allEvents)
  res.status(201).json({
    allEvents 
  });
};

module.exports = {
    getEvents: catchAsync(getEvents)
}