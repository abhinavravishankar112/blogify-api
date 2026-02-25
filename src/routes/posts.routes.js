const express = require("express");
const router = express.Router();
const postController = require("../controllers/posts.controller.js");

router.get("/", postController.getAllPosts);

// Dynamic Route (URL Param)
router.get("/:postId", postController.getPostById);

module.exports = router;
