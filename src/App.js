import { useState } from "react";
import { nanoid } from "nanoid";
import NotesList from "./components/NotesList";
import Search from "./components/Search";
import Header from "./components/Header";
import Filters from "./components/Filters";

const App = () => {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "My first note",
      date: "11/01/2020",
    },
    {
      id: nanoid(),
      text: "Groceries",
      date: "16/04/2014",
    },
    {
      id: nanoid(),
      text: "This is my third note",
      date: "19/09/2021",
    },
    {
      id: nanoid(),
      text: "syllabus",
      date: "01/06/2019",
    },
    {
      id: nanoid(),
      text: "My last note",
      date: "11/12/2021",
    },
  ]);

  const [searchText, setSearchText] = useState("");
  const [searchMonth, setSearchMonth] = useState("");
  const [searchYear, setSearchYear] = useState("");
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
  };

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
        <Filters
          handleSearchMonth={setSearchMonth}
          handleSearchYear={setSearchYear}
        />
        <NotesList
          notes={
            searchYear > 2000
              ? searchMonth > 0
                ? notes
                    .filter((note) =>
                      note.text
                        .toLowerCase()
                        .includes(searchText.toLowerCase()),
                    )
                    .filter((note) => {
                      var date = note.date.split("/");
                      return date[2] === searchYear && date[1] === searchMonth;
                    })
                : notes
                    .filter((note) =>
                      note.text
                        .toLowerCase()
                        .includes(searchText.toLowerCase()),
                    )
                    .filter((note) => {
                      var date = note.date.split("/");
                      return date[2] === searchYear;
                    })
              : searchMonth > 0
              ? notes
                  .filter((note) =>
                    note.text.toLowerCase().includes(searchText.toLowerCase()),
                  )
                  .filter((note) => {
                    var date = note.date.split("/");
                    return date[1] === searchMonth;
                  })
              : notes.filter((note) =>
                  note.text.toLowerCase().includes(searchText.toLowerCase()),
                )
          }
          handleAddNote={addNote}
          handleDeleteNote={deleteNote}
        />
      </div>
    </div>
  );
};
export default App;
