const express = require("express");

const { getEvents, addParticipant } = require("../../controllers/eventsControllers");
const validateBody = require("../../middleware/bodyValidation");
const { participantSchema } = require("../../utilities/validationScheme");

const router = express.Router();

router.get("/", getEvents);
router.post('/:eventId/participants', validateBody(participantSchema), addParticipant);

module.exports = router;