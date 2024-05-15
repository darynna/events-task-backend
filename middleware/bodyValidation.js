const { httpError } = require("../utilities/httpError");

const validateBody = (schema) => {
  const fun = (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
      next(httpError(400, error.message));
    }
    next();
  };
  return fun;
};

module.exports = validateBody;