import { useEffect } from 'react';
import { Container } from './phonebook.styled';
import { ContactForm } from 'components/contact-form/contact-form';
import { ContactList } from 'components/contacts/contact-list';
import { Filter } from 'components/filter/filter';
import { useDispatch, useSelector } from 'react-redux';
import { addContact, deleteContact } from 'redux/contactsSlice';
import { changeFilterName, changeFilterNumber } from 'redux/filterSlice';

export const Phonebook = () => {
  const contacts = useSelector(state => state.contacts);

  const dispatch = useDispatch();

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleAddContact = values => {
    let check = contacts.find(contact => contact.name === values.name);
    if (check) {
      alert(`${values.name} is already in contacts`);
      return;
    }

    dispatch(addContact(values.name, values.number));
  };

  const handleDeleteContact = id => dispatch(deleteContact(id));

  const handleFilterName = value => {
    dispatch(changeFilterName(value));
  };

  const handleFilterNumber = value => {
    dispatch(changeFilterNumber(value));
  };

  return (
    <Container>
      <h2>Phonebook</h2>
      <ContactForm onAdd={handleAddContact} />

      <h2>Contacts</h2>
      <Filter
        onFilteredName={handleFilterName}
        onFilteredNumber={handleFilterNumber}
      />
      <ContactList onDelete={handleDeleteContact} />
    </Container>
  );
};
