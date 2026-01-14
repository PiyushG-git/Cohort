import React from "react";

const Card = (props) => {
  return (
    <div
      key={props.idx}
      className="lg:w-[23vw] md:w-[30vw] sm:-[45vw] rounded-xl py-8 px-8 flex items-center flex-col text-center bg-white text-black"
    >
      <img
        className="h-24 w-24 rounded-full object-cover object-center"
        src="{prop.imageURL}"
        alt=""
      />
      <h1 className="text-2xl mt-2 font-semibold">{props.name}</h1>
      <h5 className="text-lg text-blue-500 font-semibold my-2">{props.role}</h5>
      <p className="text-sm font-medium leading-tight">{props.desc}</p>
      <button
        onClick={() => {
          props.deleteHandler(props.idx);
        }}
        className="px-4 py-2 rounded bg-red-600 text-white font-semibold mt-3 text-xs cursor-pointer active:scale-95"
      >
        Remove
      </button>
    </div>
  );
};

export default Card;
