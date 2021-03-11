const router = require('express').Router();
const { 
    bookGetAll,
    postBook,
    bookFindOne,
    bookDeleteOne,
    bookUpdateOne, 
} = require("../controllers/googleBooks")

router.route("/api/books/").get(bookGetAll).post(postBook);

router.route("/api/books/:id").get(bookFindOne).delete(bookDeleteOne);

module.exports = router;