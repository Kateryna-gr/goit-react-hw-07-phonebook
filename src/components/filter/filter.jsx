import { useDispatch } from 'react-redux';
import { changeFilterName } from 'redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();

  const onFilteredName = value => {
    dispatch(changeFilterName(value));
  };

  return (
    <div>
      <p>Find contacts by name</p>
      <input
        type="text"
        name="filterName"
        onChange={evt => onFilteredName(evt.target.value)}
      />
    </div>
  );
};
