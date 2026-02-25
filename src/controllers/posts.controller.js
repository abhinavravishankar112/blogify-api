// src/controllers/posts.controller.js

const getAllPosts = async (req, res) => {
  res.status(200).json({
    message: "Fetching all posts",
  });
};

const getPostById = async (req, res) => {
  const postId = req.params.postId;

  res.status(200).json({
    message: "Fetching data for post with ID: " + postId,
  });
};

module.exports = {
  getAllPosts,
  getPostById,
};
