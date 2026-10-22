import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import "./index.css";

function App() {
  const [notes, setnotes] = useState([]);

  function fetchnotes() {
    axios
      .get("https://cohort-2-backendddd-1.onrender.com//api/notes")
      .then((res) => {
        setnotes(res.data.notes);
      });
  }
  useEffect(() => {
    fetchnotes();
  }, []);

  function handleSubmit(e) {
    e.preventDefault();

    const { title, description } = e.target.elements;
    console.log(title.value, description.value);

    axios
      .post("https://cohort-2-backendddd-1.onrender.com//api/notes", {
        title: title.value,
        description: description.value,
      })
      .then((res) => {
        console.log(res.data);
        fetchnotes();
      });
  }

  function handleDelete(noteId) {
    axios
      .delete("https://cohort-2-backendddd-1.onrender.com//api/notes/" + noteId)
      .then((res) => {
        console.log(res.data);
        fetchnotes();
      });
  }
  return (
    <>
      <form className="create-form" onSubmit={handleSubmit}>
        <input name="title" type="text" placeholder="enter title" />
        <input name="description" type="text" placeholder="enter description" />
        <button>create note </button>
      </form>

      <div className="notes">
        {notes.map((note) => {
          return (
            <div className="note">
              <h1>{note.title}</h1>
              <p>{note.description}</p>
              <button
                onClick={() => {
                  handleDelete(note._id);
                }}
              >
                delete hin
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
