const AddNote = () => {
  return (
    <div className='note new-note'>
      <textarea
        placeholder='Type to add a note...'
        cols='10'
        rows='8'></textarea>
        <div className="note-footer">
            <small>200 Remaining</small>
            <button className='save'>Save</button>
        </div>
    </div>
  );
};

export default AddNote;
