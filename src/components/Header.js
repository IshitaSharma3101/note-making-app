const Header = ({
  handleToggleDarkMode,
  handleNewestFirst,
  handleOldestFirst,
}) => {
  return (
    <div className='header'>
      <h1>Note Making App</h1>
      <div className='nav'>
        <button className='save' onClick={() => handleNewestFirst()}>
          Newest First
        </button>
        <button className='save' onClick={() => handleOldestFirst()}>
          Oldest First
        </button>
        <button
          className='save'
          onClick={() =>
            handleToggleDarkMode((previousDarkMode) => !previousDarkMode)
          }>
          Toggle Mode
        </button>
      </div>
    </div>
  );
};

export default Header;
