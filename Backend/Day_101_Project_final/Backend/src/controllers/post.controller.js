const postModel=require("../models/post.model")
const ImageKit=require("@imagekit/nodejs")
const {toFile}=require("@imagekit/nodejs")
const jwt=require("jsonwebtoken")
const likeModel = require("../models/like.model")
const { post } = require("../app")

const imagekit=new ImageKit({
    privateKey:process.env.IMAGEKIT_PRIVATE_KEY
})


async function createPostController(req,res){
    // // console.log(req.body,req.file);

    // // to find that which user is requesting
    // const token=req.cookies.token

    // if(!token){
    //     return res.status(401).json({
    //         message:"Token not provided,Unathorized access"
    //     })
    // }
    // // get user id from jwt token
    // let decoded=null
    // try {
    //     decoded=jwt.verify(token,process.env.JWT_SECRET)
    // } catch (error) {
    //     return res.status(401).json({
    //         message:"User not authorized"
    //     })
    // }



    // imagekit
    const file=await imagekit.files.upload({
        file:await toFile(Buffer.from(req.file.buffer),'file'),
        fileName:"Test",
        folder:"cohort-2-insta-clone-posts"
    })
    // res.send(file)


    //storage in db
    const post=await postModel.create({
        caption:req.body.caption,
        imgurl:file.url,
        // user:decoded.id

        //using middleware
        user:req.user.id
    })

    res.status(201).json({
        message:"Post created successfully",
        post
    })


}

async function getPostController(req,res){
    // const token=req.cookies.token
    // let decoded=null;
    // try {
    //     decoded=jwt.verify(token,process.env.JWT_SECRET)
    // } catch (error) {
    //     return res.status(401).json({
    //         message:"Token Invalid"
    //     })
    // }
    // const userId=decoded.id

    //middleware
    const userId=req.user.id
    const posts=await postModel.find({
        user:userId
    })

    res.status(200).json({
        message:"Posts fetched succesfully",
        posts
    })
}

async function getPostDetails(req,res) {
    // const token=req.cookies.token
    // if(!token){
    //     return res.status(401).json({
    //         message:"UnAuthorized Access"
    //     })
    // }

    // let decoded;
    // try {
    //     decoded=jwt.verify(token,process.env.JWT_SECRET)
    // } catch (error) {
    //     return res.status(401).json({
    //         message:"Invalid Token"
    //     })
    // }
    // const userId=decoded.id;

    //middleware
    const userId=req.user.id
    const postId=req.params.postId

    const post=await postModel.findById(postId)

    if(!post){
        return res.status(404).json({
            message:"Post not found"
        })
    }

    // can't understand
    const isValidUser=post.user.toString()===userId
    if(!isValidUser){
        return res.status(403).json({
            message:"Forbidden Content"
        })
    }

    return res.status(200).json({
        message:"Post fetched successfully",
        post
    })
}

async function likePostController(req,res) {
    const username=req.user.username
    const postId=req.params.postId

    const post=await postModel.findById(postId)

    if(!post){
        return res.status(404).json({
            message:"Post not found."
        })
    }

    const like =await likeModel.create({
        post:postId,
        user:username
    })

    res.status(200).json({
        message:"Post liked successfully",
        like
    })
}


async function unLikePostController(req,res){
    const username=req.user.username
    const postId=req.params.postId

    const isLiked=await likeModel.findOne({
        post:postId,
        user:username
    })

    if(!isLiked){
        return res.status(400).json({
            message:"Post didn't like"
        })
    }

    await likeModel.findOneAndDelete({_id:isLiked._id})

    return res.status(200).json({
        message:"post un liked successfully"
    })
}


async function getFeedController(req,res) {
    // const posts=await postModel.find()

    // @important .populate("user") isse user ki id se user ka data bhi res ho jaega
    // const posts=await postModel.find().populate("user")

    // @know we have to return user like the post or not
    // @problem-type of post is mongooseObject and we canot update any thing in this mongooseObject , so we need to change it to Object using ".lean()"
    // we also use "!!" operator to to return true or false instead of return whole data
    const user=req.user
    const posts=await Promise.all((await postModel.find({}).sort({_id:-1}).populate("user").lean())
    .map(async(post)=>{
        const isLiked=await likeModel.findOne({
            user:user.username,
            post:post._id
        })
        post.isLiked=!!isLiked
        return post
    }))

    // .sort({_id:-1}) //use to return the feed in sorted order  

    res.status(200).json({
        message:"posts fetched successfully. ",
        posts
    })
}



module.exports={
    createPostController,
    getPostController,
    getPostDetails,
    likePostController,
    getFeedController,
    unLikePostController
}