const users = [
  {
    username: "Zara Khan",
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
    profession: "Fashion Model",
    description: "Passionate about fashion, runway shows, and brand collaborations.",
    tags: ["fashion", "model", "style", "runway"]
  },
  {
    username: "Aarav Mehta",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
    profession: "Software Developer",
    description: "Full-stack developer who loves building web apps and learning new tech.",
    tags: ["developer", "javascript", "web", "coding"]
  },
  {
    username: "Neha Sharma",
    image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91",
    profession: "Digital Marketer",
    description: "Helping brands grow online through SEO, content, and social media.",
    tags: ["marketing", "seo", "branding", "content"]
  },
  {
    username: "Rohan Verma",
    image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12",
    profession: "Photographer",
    description: "Capturing moments, portraits, and landscapes with a creative eye.",
    tags: ["photography", "camera", "creative", "art"]
  },
  {
    username: "Ananya Patel",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
    profession: "UI/UX Designer",
    description: "Designing clean, user-friendly interfaces with a focus on experience.",
    tags: ["design", "uiux", "figma", "creative"]
  }
];

var sum=''
users.forEach(function(elem){
    sum=sum+`<div class="card">
        <img src="${elem.image}" alt="" />
        <h3>${elem.username}</h3>
        <h4>${elem.profession}</h4>
        <p>${elem.description}</p>
      </div>`;
})
console.log(sum);

var main=document.querySelector('main')
main.innerHTML=sum