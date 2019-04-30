//import axios or else axios won't work
import axios from "axios";


//helper functions to call back-end API calls
export default {
  getBooks: function(q) {
    return axios.get("/api/google", { params: { q: "title:" + q } });
  },
  getSavedBooks: function() {
    return axios.get("/api/books");
  },
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  }
};
