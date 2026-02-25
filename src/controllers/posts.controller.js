// src/controllers/posts.controller.js

const postsService = require("../services/posts.service.js");
const { successResponse, errorResponse } = require("../utils/response");

const handleControllerError = (res, error, fallbackMessage) => {
  if (error.message === "Post not found") {
    return errorResponse(res, 404, "Post not found");
  }

  return errorResponse(res, 500, fallbackMessage);
};

const getAllPosts = async (req, res) => {
  try {
    const posts = await postsService.getAllPosts();

    return successResponse(res, 200, "Posts fetched successfully", { posts });
  } catch (error) {
    return handleControllerError(res, error, "Failed to fetch posts");
  }
};

const getPostById = async (req, res) => {
  try {
    const postId = req.params.postId;
    const post = await postsService.getPostById(postId);

    return successResponse(res, 200, "Post fetched successfully", { post });
  } catch (error) {
    return handleControllerError(res, error, "Failed to fetch post");
  }
};

const createPost = async (req, res) => {
  try {
    const post = await postsService.createPost(req.body);

    return successResponse(res, 201, "Post created successfully", { post });
  } catch (error) {
    return handleControllerError(res, error, "Failed to create post");
  }
};

const updatePost = async (req, res) => {
  try {
    const postId = req.params.postId;
    const post = await postsService.updatePost(postId, req.body);

    return successResponse(res, 200, "Post updated successfully", { post });
  } catch (error) {
    return handleControllerError(res, error, "Failed to update post");
  }
};

const deletePost = async (req, res) => {
  try {
    const postId = req.params.postId;
    const deletedPost = await postsService.deletePost(postId);

    return successResponse(res, 200, "Post deleted successfully", {
      post: deletedPost,
    });
  } catch (error) {
    return handleControllerError(res, error, "Failed to delete post");
  }
};

module.exports = {
  getAllPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost,
};
