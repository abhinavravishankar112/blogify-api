const express = require("express");
const router = express.Router();
const postController = require("../controllers/posts.controller.js");
const {
	validatePostIdParam,
	validateCreatePostPayload,
	validateUpdatePostPayload,
} = require("../middleware/posts.middleware");

router.get("/", postController.getAllPosts);
router.get("/:postId", validatePostIdParam, postController.getPostById);
router.post("/", validateCreatePostPayload, postController.createPost);
router.put("/:postId", validatePostIdParam, validateUpdatePostPayload, postController.updatePost);
router.delete("/:postId", validatePostIdParam, postController.deletePost);

module.exports = router;
