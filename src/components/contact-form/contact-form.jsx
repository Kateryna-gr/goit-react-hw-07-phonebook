import { ErrorMessage, Field, Formik } from 'formik';
import * as Yup from 'yup';
import { Button, StyledForm } from 'components/contact-form/form.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/operations';
import { selectContacts } from 'redux/selectors';

const ContactSchema = Yup.object().shape({
  name: Yup.string('Invalid name').required('Enter name'),
  number: Yup.number('Invalid phone').required('Enter phone'),
});

export const ContactForm = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleAddContact = values => {
    let check = contacts.find(contact => contact.name === values.name);
    if (check) {
      alert(`${values.name} is already in contacts`);
      return;
    }

    dispatch(addContact([values.name, values.number]));
  };

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={ContactSchema}
      onSubmit={(values, actions) => {
        handleAddContact(values);
        actions.resetForm();
      }}
    >
      <StyledForm>
        <label>
          <p>Name</p>
          <Field type="text" name="name" required />
          <ErrorMessage name="name" component="div" />
        </label>
        <label>
          <p>Number</p>
          <Field type="tel" name="number" required />
          <ErrorMessage name="number" component="div" />
        </label>
        <Button type="submit">Add contact</Button>
      </StyledForm>
    </Formik>
  );
};
