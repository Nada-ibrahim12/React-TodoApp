import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Notes from "./Notes";

export default function TodoApp() {
  const [notes, setNotes] = useState([
    { checkbox: false, note: "Study", date: "25/12/2003" },
  ]);

  const handleAddNote = () => {
    const newNote = document.getElementById("note").value.trim();
    if (newNote !== "") {
      const date = new Date().toLocaleDateString();
      const noteObject = {
        checkbox: false,
        note: newNote,
        date: date,
      };
      setNotes((prevNotes) => [...prevNotes, noteObject]);
    }
    document.getElementById("note").value = "";
  };

  const handleRemoveNote = (index) => {
    setNotes(notes.filter((_, i) => i !== index));
  };
  return (
    <div>
      <Notes
        notes={notes}
        handleAddNote={handleAddNote}
        handleRemoveNote={handleRemoveNote}
      />
    </div>
  );
}
