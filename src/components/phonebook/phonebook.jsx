import { Container } from './phonebook.styled';
import { ContactForm } from 'components/contact-form/contact-form';
import { ContactList } from 'components/contacts/contact-list';
import { Filter } from 'components/filter/filter';

export const Phonebook = () => {
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
