import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Contact } from './contact';
import {
  selectIsLoading,
  selectError,
  selectCurrentContacts,
} from 'redux/selectors';
import { fetchContacts } from 'redux/operations';

export const ContactList = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const currentContacts = useSelector(selectCurrentContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      {isLoading && <h4>Loading...</h4>}
      {error && <h4>Error...</h4>}
      {currentContacts && (
        <ul>
          {currentContacts.map(contact => (
            <li key={contact.id}>
              <Contact
                name={contact.name}
                phone={contact.number}
                id={contact.id}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
