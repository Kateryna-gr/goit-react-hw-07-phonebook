import { useDispatch } from 'react-redux';
import { changeFilterName, changeFilterNumber } from 'redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();

  const onFilteredName = value => {
    dispatch(changeFilterName(value));
  };

  const onFilteredNumber = value => {
    dispatch(changeFilterNumber(value));
  };

  return (
    <div>
      <p>Find contacts by name</p>
      <input
        type="text"
        name="filterName"
        onChange={evt => onFilteredName(evt.target.value)}
      />
      <p>Find contacts by number</p>
      <input
        type="number"
        name="filterNumber"
        onChange={evt => onFilteredNumber(evt.target.value)}
      />
    </div>
  );
};
