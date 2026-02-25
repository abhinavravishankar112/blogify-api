// src/controllers/posts.controller.js

const postsService = require("../services/posts.service.js");

const getAllPosts = async (req, res) => {
  try {
    const posts = await postsService.getAllPosts();

    return res.status(200).json({
      success: true,
      data: {
        posts,
      },
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to fetch posts",
    });
  }
};

const getPostById = async (req, res) => {
  try {
    const postId = req.params.postId;
    const post = await postsService.getPostById(postId);

    return res.status(200).json({
      success: true,
      data: {
        post,
      },
    });
  } catch (error) {
    if (error.message === "Post not found") {
      return res.status(404).json({
        success: false,
        message: "Post not found",
      });
    }

    return res.status(500).json({
      success: false,
      message: "Failed to fetch post",
    });
  }
};

module.exports = {
  getAllPosts,
  getPostById,
};
