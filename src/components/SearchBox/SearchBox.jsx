import css from './SearchBox.module.css';
const SearchBox = ({ filter, onFilterChange }) => {
  return (
    <label className={css.searchBox}>
      Find contacts by name
      <input
        type="text"
        value={filter}
        onChange={e => onFilterChange(e.target.value)}
        className={css.inputField}
      />
    </label>
  );
};

export default SearchBox;