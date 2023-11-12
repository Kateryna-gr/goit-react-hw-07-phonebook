import { useDispatch } from 'react-redux';
import { ButtonDelete } from './contact.styled';
import { deleteContact } from 'redux/contactsSlice';

export const Contact = ({ name, phone, id }) => {
  const dispatch = useDispatch();

  const handleDeleteContact = id => dispatch(deleteContact(id));

  return (
    <div>
      {name} - {phone}{' '}
      <ButtonDelete onClick={() => handleDeleteContact(id)}>
        Delete
      </ButtonDelete>
    </div>
  );
};
