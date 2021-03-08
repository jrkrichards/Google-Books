const router = require('express').Router();
const { 
    bookGetAll,
    postBook,
    bookFindOne,
    bookDeleteOne,
    bookUpdateOne, 
} = require("../controllers/googleBooks")

router.route("/book/").get(bookGetAll).post(postBook);

router.route("/book/:id").get(bookFindOne).delete(bookDeleteOne);

module.exports = router;