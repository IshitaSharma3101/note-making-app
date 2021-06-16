const Header = ({ handleToggleDarkMode }) => {
  return (
    <div className='header'>
      <h1>Note Making App</h1>
      <button
        className='save'
        onClick={() =>
          handleToggleDarkMode((previousDarkMode) => !previousDarkMode)
        }>
        Toggle Mode
      </button>
    </div>
  );
};

export default Header;
