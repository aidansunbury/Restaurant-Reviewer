import express from "express";

import { getPosts, createPost } from "../controllers/posts.js";

const router = express.Router();

//adds prefix posts to routes in here
//localhost:3000/posts

router.get("/", getPosts);
router.get("/", createPost);

export default router;
