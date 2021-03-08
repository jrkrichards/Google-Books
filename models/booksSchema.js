const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BooksSchema = new Schema({
    title: { 
      type: String, 
      trim: true,
      required: "Title is required" 
    }, 
    
    authors: {
      type: Array,
      required: "Author(s) are required",
    },

    description: {
      type: String,
      trim: true,
      required: "description is required",
    },

    image: {
      type: String,
      required: true,
    },

    zipCode: {
      type: String, 
      required: true 
    },
});

const Books = mongoose.model("book", BlogSchema);

module.exports = Books;