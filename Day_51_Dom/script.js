const reelsData = [
  {
    username: "Piyush Gupta",
    likeCount: 1240,
    isLiked: false,
    commentCount: 86,
    caption: "E-commerce is changing faster than ever 🚀",
    video: "./v1.mp4",
    userProfile: "https://images.unsplash.com/photo-1527980965255-d3b416303d12",
    shareCount: 42,
    isFollowed: true
  },
  {
    username: "Aarav Mehta",
    likeCount: 980,
    isLiked: true,
    commentCount: 64,
    caption: "Late night coding sessions 💻✨",
    video: "./v2.mp4",
    userProfile: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
    shareCount: 31,
    isFollowed: true
  },
  {
    username: "Neha Sharma",
    likeCount: 2100,
    isLiked: false,
    commentCount: 154,
    caption: "Consistency beats motivation every time 🔥",
    video: "./v3.mp4",
    userProfile: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91",
    shareCount: 77,
    isFollowed: false
  },
  {
    username: "Rohan Verma",
    likeCount: 765,
    isLiked: true,
    commentCount: 39,
    caption: "Capturing moments, not things 📸",
    video: "./v2.mp4",
    userProfile: "https://images.unsplash.com/photo-1527980965255-d3b416303d12",
    shareCount: 18,
    isFollowed: true
  },
  {
    username: "Ananya Patel",
    likeCount: 1890,
    isLiked: false,
    commentCount: 112,
    caption: "Good design is invisible 🎨",
    video: "./v3.mp4",
    userProfile: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
    shareCount: 54,
    isFollowed: false
  },
  {
    username: "Kunal Singh",
    likeCount: 430,
    isLiked: false,
    commentCount: 21,
    caption: "Learning one step at a time 📘",
    video: "./v1.mp4",
    userProfile: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    shareCount: 9,
    isFollowed: false
  },
  {
    username: "Sneha Iyer",
    likeCount: 2560,
    isLiked: true,
    commentCount: 198,
    caption: "Dream big. Work bigger ✨",
    video: "./v2.mp4",
    userProfile: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    shareCount: 96,
    isFollowed: true
  },
  {
    username: "Aditya Rao",
    likeCount: 890,
    isLiked: false,
    commentCount: 47,
    caption: "Tech + creativity = magic ⚡",
    video: "./v3.mp4",
    userProfile: "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7",
    shareCount: 22,
    isFollowed: false
  },
  {
    username: "Ritika Malhotra",
    likeCount: 1730,
    isLiked: true,
    commentCount: 129,
    caption: "Small habits make big changes 🌱",
    video: "./v1.mp4",
    userProfile: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
    shareCount: 61,
    isFollowed: true
  },
  {
    username: "Mohit Jain",
    likeCount: 540,
    isLiked: false,
    commentCount: 33,
    caption: "Focused. Calm. Grinding. 💪",
    video: "./v1.mp4",
    userProfile: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    shareCount: 14,
    isFollowed: false
  }
];

var allReels=document.querySelector('.all-reels');


function addData(){
    var sum=''

reelsData.forEach(function(elem,idx){
    // console.log(elem.username);
    sum=sum+`<div class="reel">
                    <video autoplay loop muted src="${elem.video}"></video>
                    <div class="bottom">
                        <div class="user">
                            <img src="${elem.userProfile}" alt="">
                            <h4>${elem.username}</h4>
                            <button id=${idx} class='follow>${elem.isFollowed?'Follow':'Unfollow'}</button>
                        </div>
                        <h3>${elem.caption}</h3>
                    </div>
                    <div class="right">
                        <div id=${idx} class="like">
                            <h4 class="like-icon icon">
                            ${elem.isLiked?'<i class="ri-heart-fill love"></i>':'<i class="ri-heart-3-line"></i>'}
                                
                            </h4>
                            <h6>${elem.likeCount}</h6>
                        </div>
                        <div class="comment">
                            <h4 class="comment-icon icon">
                                <i class="ri-chat-3-line"></i>
                            </h4>
                            <h6>${elem.commentCount}</h6>
                        </div>
                        <div class="share">
                            <h4 class="share-icon icon">
                                <i class="ri-send-plane-line"></i>
                            </h4>
                            <h6>${elem.shareCount}</h6>
                        </div>
                        
                        <div class="menu">
                            <h4 class="menu-icon icon">
                                <i class="ri-more-2-fill"></i>
                            </h4>
                        </div>
                    </div>
                    
                </div>`
    
})
// console.log(sum);
allReels.innerHTML=sum;
}

addData()

// allReels.addEventListener('click',function(dets){
//     // console.log(reelsData[dets.target.id]);
//     // console.log(reelsData[dets.target.id].likeCount)
//     if(!reelsData[dets.target.id].isLiked){
//         reelsData[dets.target.id].likeCount++;
//         reelsData[dets.target.id].isLiked=true;
//     }
//     else{
//         reelsData[dets.target.id].likeCount--;
//         reelsData[dets.target.id].isLiked=false;
//     }
//     addData();
// })

allReels.addEventListener('click',function(dets){
    // console.log(reelsData[dets.target.id]);
    // console.log(reelsData[dets.target.id].likeCount)
    if(dets.target.className=='like'){
            if(!reelsData[dets.target.id].isLiked){
        reelsData[dets.target.id].likeCount++;
        reelsData[dets.target.id].isLiked=true;
    }
    else{
        reelsData[dets.target.id].likeCount--;
        reelsData[dets.target.id].isLiked=false;
    }
    }
    console.log(reelsData[dets.target.id].isFollowed);
    
    if(dets.target.className=='follow'){
        if(!reelsData[dets.target.id].isFollowed){
            reelsData[dets.target.id].isFollowed=true
        }
        else{
            reelsData[dets.target.id].isFollowed=false
        }
    }
    addData();
})