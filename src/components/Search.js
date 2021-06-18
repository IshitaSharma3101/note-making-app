import { RiSearchLine } from "react-icons/ri";

const Search = ({ handleSearchNote }) => {
  return (
    <div className='search'>
      <RiSearchLine className='search-icon' size='1.3em' />
      <input
        onChange={(e) => handleSearchNote(e.target.value)}
        type='text'
        placeholder='type to search...'
      />
    </div>
  );
};

export default Search;
