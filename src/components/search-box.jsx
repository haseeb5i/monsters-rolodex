import "./search-box.css";

const SearchBox = ({ placeholder, onChangeHandler }) => {
  return (
    <input className='search' type="search" placeholder={placeholder} onChange={onChangeHandler} />
  );
};

export default SearchBox;
