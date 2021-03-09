import axios from "axios";

export default {
  // Search for books
  searchBooks: function() {
    return axios.get("")
  },
  // Gets all books
  getBooks: function() {
    return axios.get("/book/");
  },
  // Gets the book with the given id
  getBook: function(id) {
    return axios.get("/book/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/book/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/book/", bookData);
  }
};
