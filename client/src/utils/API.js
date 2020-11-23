import axios from "axios";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  // gets all visited trails
  getVisitedTrails: function() {
    return axios.get("/api/trails");
  },
  // gets all saved trails
  getSavedTrails: function() {
    return axios.get("/api/trails");
  },
  // deletes visited trail
  deleteVisitedTrails: function(id) {
    return axios.delete("/api/trails/" + id);
  },
  // deletes saved trail
  deleteSavedTrails: function(id) {
    return axios.delete("/api/trails/" + id);
  },
  // saves visited trail
  saveVisitedTrails: function(trailData) {
    return axios.post("/api/trails", trailData);
  },
  // saves saved trails
  saveSavedTrails: function(trailData) {
    return axios.post("/api/trails", trailData);
  },
  getUser: function() {
    return axios.get("/api/user");
  },
  saveUser: function(userData) {
    return axios.post("/api/user" + userData)
  }
};
