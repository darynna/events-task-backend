const express = require("express");

const { getEvents } = require("../../controllers/eventsControllers");
const validateBody = require("../../middleware/bodyValidation");
const { eventSchema } = require("../../utilities/validationScheme");

const router = express.Router();

router.get("/", getEvents);

module.exports = router;