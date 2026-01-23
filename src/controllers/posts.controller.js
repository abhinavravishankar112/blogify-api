// src/controllers/posts.controller.js

const getAllPosts = (req, res) => {
  res.status(200).json({
    success: true,
    message: "GET all posts route works!",
  });
};

module.exports = {
  getAllPosts,
};
