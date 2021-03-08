const router= require('express').Router();
const Books = require("../models/booksSchema")
const { 
    bookGetAll,
    postBook,
    bookFindOne,
    bookDeleteOne,
    bookUpdateOne, 
} = require("../controllers/googleBooks")

router.route("/book/").get(bookGetAll).post(postBook);

router.route("/book/:id").get(bookFindOne).patch(bookUpdateOne).delete(bookDeleteOne);

module.exports = router;