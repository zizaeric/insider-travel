import axios from "../../node_modules/axios";

export default {
  // Gets all feedback
  getFeedbacks: function() {
    return axios.get("/api/feedbacks");
  },
  // Gets the feedback with the given id
  getFeedback: function(id) {
    return axios.get("/api/feedbacks/" + id);
  },
  // Deletes the feedback with the given id
  deleteFeedback: function(id) {
    return axios.delete("/api/feedbacks/" + id);
  },
  // Saves a feedback to the database
  saveFeedback: function(feedbackData) {
    return axios.post("/api/feedbacks", feedbackData);
  }
};
