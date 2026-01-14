import React, { useState } from "react";
import Card from "./components/Card";

const App = () => {
  const [userName, setUserName] = useState("");
  const [userRole, setUserRole] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [userDesc, setUserDesc] = useState("");
  const [allUsers, setAllUsers] = useState([
    {
      userName: "Piyush Gupta",
      imageURL: "https://images.unsplash.com/photo-1527980965255-d3b416303d12",
      userRole: "Frontend Developer",
      userDesc:
        "Passionate about building responsive and interactive web applications using modern JavaScript and React.",
    },
    {
      userName: "Aarav Mehta",
      imageURL: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
      userRole: "Backend Developer",
      userDesc:
        "Enjoys working with APIs, databases, and server-side technologies to build scalable applications.",
    },
  ]);

  const submitHandler = (e) => {
    e.preventDefault();
    // console.log("submit");
    // console.log(userName,imageURL,userRole,userDesc);
    setAllUsers([...allUsers, { userName, imageURL, userRole, userDesc }]);
    // const oldUsers=[...allUsers]
    // oldUsers.push({userName,imageURL,userRole,userDesc})
    // setAllUsers(oldUsers)
    console.log(allUsers);

    setUserName("");
    setImageURL("");
    setUserRole("");
    setUserDesc("");
  };

  const deleteHandler=(idx)=>{
    const copyUser=[...allUsers];
    copyUser.splice(idx,1);
    setAllUsers(copyUser)
  }
  return (
    <div className="h-screen bg-black text-white">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="px-2 py-10 flex flex-wrap justify-center"
      >
        <input
          value={userName}
          onChange={(e) => {
            setUserName(e.target.value);
          }}
          className="border-2 texl-wl font-semibold px-5 py-2 rounded m-2 w-[45%]"
          type="text"
          placeholder="Enter the Name"
        />
        <input
          value={imageURL}
          onChange={(e) => {
            setImageURL(e.target.value);
          }}
          className="border-2 texl-wl font-semibold px-5 py-2 rounded m-2 w-[45%]"
          type="text"
          placeholder="Image URL"
        />
        <input
          value={userRole}
          onChange={(e) => {
            setUserRole(e.target.value);
          }}
          className="border-2 texl-wl font-semibold px-5 py-2 rounded m-2 w-[45%]"
          type="text"
          placeholder="Enter Role"
        />
        <input
          value={userDesc}
          onChange={(e) => {
            setUserDesc(e.target.value);
          }}
          className="border-2 texl-wl font-semibold px-5 py-2 rounded m-2 w-[45%]"
          type="text"
          placeholder="Enter Description"
        />
        <button className="px-5 py-2 text-xl active:scale-95 cursor-pointer font-semibold bg-emerald-700 w-[90%]">
          Submit
        </button>
      </form>
      <div className="px-4 py-10 gap-4 flex flex-wrap">
        {allUsers.map(function (e,idx) {
          return (<Card idx={idx} name={e.userName} imageURL={e.imageURL} role={e.userRole} desc={e.userDesc} deleteHandler={deleteHandler} />)

          // testing part
          // return <div key={idx} className="lg:w-[23vw] md:w-[30vw] sm:-[45vw] rounded-xl py-8 px-8 flex items-center flex-col text-center bg-white text-black">
          //   <img
          //     className="h-24 w-24 rounded-full object-cover object-center"
          //     src={e.imageURL}
          //     alt=""
          //   />
          //   <h1 className="text-2xl mt-2 font-semibold">{e.userName}</h1>
          //   <h5 className="text-lg text-blue-500 font-semibold my-2">
          //     {e.userRole}
          //   </h5>
          //   <p className="text-sm font-medium leading-tight">{e.userDesc}</p>
          //   <button onClick={(idx)=>{
          //     deleteHandler(idx)
          //   }} className="px-4 py-2 rounded bg-red-600 text-white font-semibold mt-3 text-xs cursor-pointer active:scale-95">
          //     Remove
          //   </button>
          // </div>;
        })}
      </div>
    </div>
  );
};

export default App;
