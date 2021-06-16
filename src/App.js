import { useState } from "react";
import { nanoid } from "nanoid";
import NotesList from "./components/NotesList";

const App = () => {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "This is my first note",
      date: "16/06/2021",
    },
    {
      id: nanoid(),
      text: "This is my second note",
      date: "16/06/2021",
    },
    {
      id: nanoid(),
      text: "This is my third note",
      date: "16/06/2021",
    },
  ]);

  return (
    <div className='container'>
      <NotesList notes={notes} />
    </div>
  );
};
export default App;
