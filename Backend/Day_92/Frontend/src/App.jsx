import React, { useEffect } from "react";
import { useState } from "react";

import axios from "axios";

const App = () => {
  // const [notes,setNotes]=useState([
  //   {
  //     title:"test title",
  //     description:"test description"
  //   },
  //   {
  //     title:"test title1",
  //     description:"test description2"
  //   },
  //   {
  //     title:"test title3",
  //     description:"test description3"
  //   },
  //   {
  //     title:"test title4",
  //     description:"test description4"
  //   }
  // ])

  const [notes, setNotes] = useState([]);

  // console.log("Hello React");  //this is continously repeating on the window that's why we have to use useeffect so that i run only once

  function fetchNotes() {
    axios.get("http://localhost:3000/api/notes").then((res) => {
      // console.log(res);
      setNotes(res.data.notes);
    });
  }

  useEffect(() => {
    fetchNotes();
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    const { title, description } = e.target.elements;
    // console.log(title.value,description.value);
    axios
      .post("http://localhost:3000/api/notes", {
        title: title.value,
        description: description.value,
      })
      .then((res) => {
        fetchNotes();
      });
  }

  function handleDeleteNote(noteId) {
    axios.delete(`http://localhost:3000/api/notes/${noteId}`).then((res) => {
      console.log(res.data);
      fetchNotes(); // refresh notes after delete
    });
  }

  return (
    <>
      <form className="note-create-form" onSubmit={handleSubmit}>
        <input name="title" type="text" placeholder="Enter title" />
        <input name="description" type="text" placeholder="Enter description" />
        <button>Create note</button>
      </form>

      <div className="notes">
        {notes.map((note, index) => {
          return (
            <div className="note" key={index}>
              <h1>{note.title}</h1>
              <p>{note.description}</p>
              <button
                onClick={() => {
                  handleDeleteNote(note._id);
                }}
              >
                delete
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default App;
