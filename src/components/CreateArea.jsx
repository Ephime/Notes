import React, { useState } from "react";

function CreateArea(props) {
  const [noteInputs, setInputs] = useState({
    title: "",
    content: ""
  });

  function detectsTyping(event) {
    const { name, value } = event.target;

    setInputs((preValue) => {
      return {
        ...preValue,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(noteInputs);
    event.preventDefault();
    setInputs({
      title: "",
      content: ""
    });
  }

  return (
    <div>
      <form onSubmit={submitNote}>
        <input
          onChange={detectsTyping}
          name="title"
          placeholder="Title"
          value={noteInputs.title}
        />
        <textarea
          onChange={detectsTyping}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={noteInputs.content}
        />
        <button>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
