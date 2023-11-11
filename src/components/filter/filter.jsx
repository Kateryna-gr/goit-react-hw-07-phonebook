export const Filter = ({ onFilteredName, onFilteredNumber }) => {
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
