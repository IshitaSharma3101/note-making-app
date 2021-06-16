import { useState } from "react";

const AddNote = ({ handleAddNote }) => {
  const [noteText, setNoteText] = useState("");

  const handleChange = (e) => {
    setNoteText(e.target.value);
  };

  const handleSaveClick = () => {
      if(noteText.trim().length > 0){
        handleAddNote(noteText);
        setNoteText('');
      }else{
        setNoteText("");
      }
  };

  return (
    <div className='note new-note'>
      <textarea
        placeholder='Type to add a note...'
        value={noteText}
        cols='10'
        rows='8'
        onChange={handleChange}></textarea>
      <div className='note-footer'>
        <small>200 Remaining</small>
        <button className='save' onClick={handleSaveClick}>
          Save
        </button>
      </div>
    </div>
  );
};

export default AddNote;
