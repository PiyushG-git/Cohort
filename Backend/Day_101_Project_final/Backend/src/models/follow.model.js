const mongoose=require("mongoose")

// const followSchema = new mongoose.Schema({
//   follower: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "User",
//     required: [true,"Follower is required"]
//   },
//   following: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "User",
//     required: [true,"Followee is required"]
//   }
// }, { timestamps: true });

const followSchema = new mongoose.Schema({
  follower: {
    type: String
  },
  followee: {
    type: String
  },
  //need to do itself
  status:{
    type:String,
    default:"Pending",
    enum:{
        values:["pending","accepted","rejected"],
        message:"status can only be pending,accepted or rejected"
    }
  }
}, { timestamps: true });

// fourth layer for validation
followSchema.index({follower:1,followee:1},{unique:true})


const followModel=mongoose.model("follows",followSchema)



module.exports=followModel