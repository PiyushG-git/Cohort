import React, { useState } from "react";

const User = (props) => {

  const [color] = useState(() => {
    const clr1 = Math.floor(Math.random() * 256);
    const clr2 = Math.floor(Math.random() * 256);
    const clr3 = Math.floor(Math.random() * 256);
    return `rgb(${clr1}, ${clr2}, ${clr3})`;
  });

  return (
    <div style={{ backgroundColor: color }} className="user-card">
      <h2>{props.elem.name}</h2>
      <p>{props.elem.website}</p>
    </div>
  );
};

export default User;
