// src/utils/validators.js

const validatePostData = (postData) => {
  const errors = [];

  if (!postData.title || postData.title.trim() === "") {
    errors.push("Title is required");
  }

  if (!postData.content || postData.content.trim() === "") {
    errors.push("Content is required");
  }

  if (!postData.author || postData.author.trim() === "") {
    errors.push("Author is required");
  }

  if (postData.title && postData.title.length < 5) {
    errors.push("Title must be at least 5 characters long");
  }

  if (postData.content && postData.content.length < 10) {
    errors.push("Content must be at least 10 characters long");
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
};

const validatePostId = (postId) => {
  if (!postId || isNaN(postId)) {
    return {
      isValid: false,
      error: "Invalid post ID",
    };
  }

  return {
    isValid: true,
  };
};

module.exports = {
  validatePostData,
  validatePostId,
};
