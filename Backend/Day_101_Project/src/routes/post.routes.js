const express=require('express')
const { createPostController, getPostController, getPostDetails } = require('../controllers/post.controller')
const multer=require("multer")
const upload=multer({storage:multer.memoryStorage()})

const postRouter=express.Router()

// api1
// post -/api/posts[protected]
// req.body={caption,image-file}

postRouter.post("/",upload.single("image"),createPostController)


// GET /api/posts/ [protected]

postRouter.get("/",getPostController)


// GET /api/posts/details/:postid
// -return an details about specific post with the id. also check whether the post belongs to the user that the request come form
postRouter.get("/details/:postId",getPostDetails)


module.exports=postRouter 