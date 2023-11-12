import { useSelector } from 'react-redux';
import { Contact } from './contact';
import { selectFilteredList } from 'redux/selectors';

export const ContactList = () => {
  const filteredList = useSelector(selectFilteredList);

  return (
    <ul>
      {filteredList.map(contact => (
        <li key={contact.id}>
          <Contact name={contact.name} phone={contact.number} id={contact.id} />
        </li>
      ))}
    </ul>
  );
};
