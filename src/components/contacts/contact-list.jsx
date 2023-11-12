import { useSelector } from 'react-redux';
import { Contact } from './contact';

export const ContactList = () => {
  const contacts = useSelector(state => state.contacts);
  const filterName = useSelector(state => state.filter.name);
  const filterNumber = useSelector(state => state.filter.number);

  let filteredList = contacts;
  if (filterName) {
    filteredList = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterName.toLowerCase())
    );
  } else if (filterNumber) {
    filteredList = contacts.filter(contact =>
      contact.number.includes(filterNumber)
    );
  }

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
