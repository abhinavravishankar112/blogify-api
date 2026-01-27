// src/services/posts.service.js

// Mock database - replace with actual DB later
const posts = [
  { id: 1, title: "First Post", content: "This is the first blog post", author: "John Doe", createdAt: new Date() },
  { id: 2, title: "Second Post", content: "This is the second blog post", author: "Jane Smith", createdAt: new Date() },
];

const getAllPosts = async () => {
  try {
    return posts;
  } catch (error) {
    throw new Error("Error fetching posts: " + error.message);
  }
};

const getPostById = async (postId) => {
  try {
    const post = posts.find((p) => p.id === parseInt(postId));
    if (!post) {
      throw new Error("Post not found");
    }
    return post;
  } catch (error) {
    throw error;
  }
};

const createPost = async (postData) => {
  try {
    const newPost = {
      id: posts.length + 1,
      ...postData,
      createdAt: new Date(),
    };
    posts.push(newPost);
    return newPost;
  } catch (error) {
    throw new Error("Error creating post: " + error.message);
  }
};

const updatePost = async (postId, postData) => {
  try {
    const post = posts.find((p) => p.id === parseInt(postId));
    if (!post) {
      throw new Error("Post not found");
    }
    const updatedPost = { ...post, ...postData, updatedAt: new Date() };
    const index = posts.findIndex((p) => p.id === parseInt(postId));
    posts[index] = updatedPost;
    return updatedPost;
  } catch (error) {
    throw error;
  }
};

const deletePost = async (postId) => {
  try {
    const index = posts.findIndex((p) => p.id === parseInt(postId));
    if (index === -1) {
      throw new Error("Post not found");
    }
    const deletedPost = posts.splice(index, 1);
    return deletedPost[0];
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAllPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost,
};
