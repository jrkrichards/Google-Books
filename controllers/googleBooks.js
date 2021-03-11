const Books = require("../models/booksSchema")

module.exports = {
    bookGetAll: async (req, res) => {
        try {
          const allBlogs = await Books.find();
          res.json(allBlogs);
        } catch (err) {
          res.send(err);
        }
    },
    
    bookFindOne: async (req, res) => {
        try {
            const foundBlogPost = await Books.findById(req.params.id);
            res.send(foundBlogPost);
        } catch (err) {
            res.send(err);
        }
    },

    postBook: async (req, res) => {
        try {
            const newBook = new Books({
            title: req.body.title,
            authors: req.body.authors,
            description: req.body.description,
            image: req.body.image,
            link: req.body.link
            });
            res.json(await newBook.save());
        } catch (err) {
            res.send(err);
        }
    },

    bookDeleteOne: async (req, res) => {
        try {
            res.json(await Books.findByIdAndDelete(req.params.id));
        } catch (err) {
            res.send(err);
        }
    },

    // bookUpdateOne: async (req, res) => {
    //     try {
    //         const foundBlogPost = await Blog.findById(req.params.id);
    //         const { title, text, category } = req.body;

    //         console.log(req.body)

    //         if (title) foundBlogPost.title = title;
    //         if (text) foundBlogPost.text = text;
    //         if (category) foundBlogPost.category = category;

    //         res.json(await foundBlogPost.save());
    //     } catch (err) {
    //         res.json(err);
    //     }
    // },
}