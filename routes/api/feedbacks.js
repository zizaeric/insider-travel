const router = require("express").Router();
const feedbacksController = require("../../controllers/feedbacksController");

// Matches with "/api/feedback"
router.route("/")
  .get(feedbacksController.findAll)
  .post(feedbacksController.create);

// Matches with "/api/feedback/:id"
router
  .route("/:id")
  .get(feedbacksController.findById)
  .put(feedbacksController.update)
  .delete(feedbacksController.remove);

module.exports = router;
