import { useDispatch, useSelector } from 'react-redux';
import css from './SearchBox.module.css';
import { changeFilter, selectNameFilter } from '../../redux/filtersSlice';
const SearchBox = () => {
  const filter = useSelector(selectNameFilter);
  const dispatch = useDispatch();

  return (
    <label className={css.searchBox}>
      Find contacts by name
      <input
        type="text"
        value={filter}
        onChange={e => dispatch(changeFilter(e.target.value))}
        className={css.inputField}
      />
    </label>
  );
};

export default SearchBox;
