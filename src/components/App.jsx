import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [newNote, setNewNote] = useState([]);

  function addNote(noteInputs) {
    setNewNote((preValue) => {
      return [...preValue, noteInputs];
    });
  }

  function deleteNote(id) {
    setNewNote((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {newNote.map((newItems, index) => (
        <Note
          key={index}
          id={index}
          title={newItems.title}
          content={newItems.content}
          onDelete={deleteNote}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
