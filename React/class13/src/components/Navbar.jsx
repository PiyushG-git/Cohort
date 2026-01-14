import React, { useState } from "react";

const Navbar = (props) => {
  const [newTheme, setNewTheme] = useState("");
  function SubmitHandler(e){
    e.preventDefault();
    props.curTheme(newTheme);
    setNewTheme('');
  }
  return (
    <div>
      <form onSubmit={(e)=>{SubmitHandler(e)}}>
        <input value={newTheme}
          onChange={(e) => {
            setNewTheme(e.target.value);
          }}
          type="text"
          placeholder="Child change the theme"
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Navbar;
