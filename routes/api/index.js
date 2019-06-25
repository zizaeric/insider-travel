const router = require("express").Router();
const feedbackRoutes = require("./feedbacks");

// Feedback routes
router.use("/feedbacks", feedbackRoutes);

module.exports = router;
