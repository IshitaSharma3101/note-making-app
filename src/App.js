import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import NotesList from "./components/NotesList";
import Search from "./components/Search";
import Header from "./components/Header";

const App = () => {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "This is my first note",
      date: "11/06/2021",
    },
    {
      id: nanoid(),
      text: "This is my second note",
      date: "16/04/2021",
    },
    {
      id: nanoid(),
      text: "This is my third note",
      date: "19/06/2021",
    },
    {
      id: nanoid(),
      text: "This is my third note",
      date: "01/06/2021",
    },
    {
      id: nanoid(),
      text: "This is my third note",
      date: "11/12/2021",
    },
  ]);

  const [searchText, setSearchText] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  const oldestFirst = () => {
    notes.sort(
      (a, b) =>
        new Date(...a.date.split("/").reverse()) -
        new Date(...b.date.split("/").reverse()),
    );
    setNotes([...notes]);
    console.log(notes);
  }

  const newestFirst = () => {
    notes.sort(
      (a, b) =>
        new Date(...b.date.split("/").reverse()) -
        new Date(...a.date.split("/").reverse()),
    );
    setNotes([...notes]);
  };

  return (
    <div className={`${darkMode && "dark-mode"}`}>
      <div className='container'>
        <Header
          handleToggleDarkMode={setDarkMode}
          handleNewestFirst={newestFirst}
          handleOldestFirst={oldestFirst}
        />
        <Search handleSearchNote={setSearchText} />
        <NotesList
          notes={notes.filter((note) =>
            note.text.toLowerCase().includes(searchText.toLowerCase()),
          )}
          handleAddNote={addNote}
          handleDeleteNote={deleteNote}
        />
      </div>
    </div>
  );
};
export default App;
