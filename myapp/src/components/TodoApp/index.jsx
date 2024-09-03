import React, { useState } from "react";
import Notes from "./Notes";

export default function TodoApp() {
  const [notes, setNotes] = useState([
    { checkbox: false, note: "Study", date: "25/12/2003" },
  ]);
  const [currentNote, setCurrentNote] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);

  const handleAddNote = () => {
    if (currentNote.trim() !== "") {
      const date = new Date().toLocaleDateString();
      const noteObject = {
        checkbox: false,
        note: currentNote,
        date: date,
      };

      if (editingIndex !== null) {
        const updatedNotes = notes.map((note, index) =>
          index === editingIndex ? { ...note, ...noteObject } : note
        );
        setNotes(updatedNotes);
        setEditingIndex(null);
      } else {
        setNotes((prevNotes) => [...prevNotes, noteObject]);
      }

      setCurrentNote("");
    }
  };

  const handleRemoveNote = (index) => {
    setNotes(notes.filter((_, i) => i !== index));
    if (index === editingIndex) {
      setCurrentNote("");
      setEditingIndex(null);
    }
  };

  const handleEditNote = (index) => {
    setCurrentNote(notes[index].note);
    setEditingIndex(index);
  };

  const handleCheckboxChange = (index) => {
    const updatedNotes = notes.map((note, i) => {
      if (i === index) {
        return {
          ...note,
          checkbox: !note.checkbox,
        };
      }
      return note;
    });

    setNotes(updatedNotes);
  };

  return (
    <div>
      <Notes
        notes={notes}
        handleAddNote={handleAddNote}
        handleRemoveNote={handleRemoveNote}
        handleEditNote={handleEditNote}
        currentNote={currentNote}
        setCurrentNote={setCurrentNote}
        editingIndex={editingIndex}
        setEditingIndex={setEditingIndex}
        handleCheckboxChange={handleCheckboxChange}
      />
    </div>
  );
}
