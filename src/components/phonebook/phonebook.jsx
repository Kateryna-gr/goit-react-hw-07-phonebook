import { useEffect } from 'react';
import { Container } from './phonebook.styled';
import { ContactForm } from 'components/contact-form/contact-form';
import { ContactList } from 'components/contacts/contact-list';
import { Filter } from 'components/filter/filter';
import { useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';

export const Phonebook = () => {
  const contacts = useSelector(selectContacts);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <Container>
      <h2>Phonebook</h2>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </Container>
  );
};
