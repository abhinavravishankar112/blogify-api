const { validatePostData, validatePostId } = require("../utils/validators");
const { errorResponse } = require("../utils/response");

const validatePostIdParam = (req, res, next) => {
  const validation = validatePostId(req.params.postId);

  if (!validation.isValid) {
    return errorResponse(res, 400, validation.error);
  }

  return next();
};

const validateCreatePostPayload = (req, res, next) => {
  const validation = validatePostData(req.body);

  if (!validation.isValid) {
    return errorResponse(res, 400, "Validation failed", validation.errors);
  }

  return next();
};

const validateUpdatePostPayload = (req, res, next) => {
  const validation = validatePostData(req.body);

  if (!validation.isValid) {
    return errorResponse(res, 400, "Validation failed", validation.errors);
  }

  return next();
};

module.exports = {
  validatePostIdParam,
  validateCreatePostPayload,
  validateUpdatePostPayload,
};