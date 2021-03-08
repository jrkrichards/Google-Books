const Books = require("../models/booksSchema")
const mongojs = require("mongojs");
const { mongo } = require("mongoose");

module.exports = {
    bookGetAll: async (req, res) => {
        try {
          const allBlogs = await Blog.find();
          res.json(allBlogs);
        } catch (err) {
          res.send(err);
        }
    },
    
    bookFindOne: async (req, res) => {
        try {
            const foundBlogPost = await Blog.findById(req.params.id);
            res.send(foundBlogPost);
        } catch (err) {
            res.send(err);
        }
    },

    postBook: async (req, res) => {
        try {
            const newBlogPost = new Blog({
            displayName: req.body.displayName,
            title: req.body.title,
            text: req.body.text,
            category: req.body.category,
            zipCode: req.body.zipCode
            });
            res.json(await newBlogPost.save());
        } catch (err) {
            res.send(err);
        }
    },

    bookDeleteOne: async (req, res) => {
        try {
            res.json(await Blog.findByIdAndDelete(req.params.id));
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