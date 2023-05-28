// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import * as yup from 'yup';
// import './LogicForm.css';
// import PropTypes from 'prop-types';

// const numberReg =
//   /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;

// const nameReg = /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;

// const schema = yup.object().shape({
//   name: yup
//     .string()
//     .matches(
//       nameReg,
//       'Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d`Artagnan'
//     )
//     .required(),
//   number: yup
//     .string()
//     .matches(
//       numberReg,
//       'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
//     )
//     .required(),
// });

// const initialValues = {
//   name: '',
//   number: '',
// };

// export const LogicForm = ({ addContact }) => {
//   const handleSubmit = (values, { resetForm }) => {
//     addContact(values);
//     resetForm();
//   };

//   return (
//     <Formik
//       initialValues={initialValues}
//       validationSchema={schema}
//       onSubmit={handleSubmit}
//     >
//       <Form autoComplete="off" className="LogicForm__Form">
//         <label htmlFor="name" className="LogicForm__name">
//           Name
//           <Field type="text" name="name" />
//           <ErrorMessage name="name" component="div" />
//         </label>
//         <label htmlFor="number" className="LogicForm__number">
//           Number
//           <Field type="text" name="number" />
//           <ErrorMessage name="number" component="div" />
//         </label>
//         <button type="submit" className="LogicForm__btn">
//           Add contact
//         </button>
//       </Form>
//     </Formik>
//   );
// };

// LogicForm.propTypes = {
//   addContact: PropTypes.func.isRequired,
// };

//
// import React from 'react';
// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import * as yup from 'yup';
// import { useDispatch } from 'react-redux';
// import { addContact } from '../../redux/contactsSlice';
// import { nanoid } from 'nanoid';
// import { toast } from 'react-toastify';

// import './LogicForm.css';

// const numberReg =
//   /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;

// const nameReg = /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;

// const schema = yup.object().shape({
//   name: yup
//     .string()
//     .matches(
//       nameReg,
//       'Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d`Artagnan'
//     )
//     .required(),
//   number: yup
//     .string()
//     .matches(
//       numberReg,
//       'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
//     )
//     .required(),
// });

// const initialValues = {
//   name: '',
//   number: '',
// };

// export function LogicForm() {
//   const dispatch = useDispatch();

//   const notify = message => {
//     toast.success(message);
//   };

//   const handleSubmit = (values, { resetForm }) => {
//     const newContact = { id: nanoid(), ...values };
//     dispatch(addContact(newContact));
//     notify(`${values.name} has been added to contacts.`);
//     resetForm();
//   };

//   return (
//     <Formik
//       initialValues={initialValues}
//       validationSchema={schema}
//       onSubmit={handleSubmit}
//     >
//       <Form autoComplete="off" className="LogicForm__Form">
//         <label htmlFor="name" className="LogicForm__name">
//           Name
//           <Field type="text" name="name" />
//           <ErrorMessage name="name" component="div" />
//         </label>
//         <label htmlFor="number" className="LogicForm__number">
//           Number
//           <Field type="text" name="number" />
//           <ErrorMessage name="number" component="div" />
//         </label>
//         <button type="submit" className="LogicForm__btn">
//           Add contact
//         </button>
//       </Form>
//     </Formik>
//   );
// }
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsSlice';
import { nanoid } from 'nanoid';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './LogicForm.css';

const numberReg =
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;

const nameReg = /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;

const schema = yup.object().shape({
  name: yup
    .string()
    .matches(
      nameReg,
      'Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d`Artagnan'
    )
    .required(),
  number: yup
    .string()
    .matches(
      numberReg,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    )
    .required(),
});

const initialValues = {
  name: '',
  number: '',
};

export function LogicForm() {
  const dispatch = useDispatch();

  const notify = message => {
    toast.success(message);
  };

  const handleSubmit = (values, { resetForm }) => {
    const newContact = { id: nanoid(), ...values };
    dispatch(addContact(newContact));
    notify(`${values.name} has been added to contacts.`);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <Form autoComplete="off" className="LogicForm__Form">
        <label htmlFor="name" className="LogicForm__name">
          Name
          <Field type="text" name="name" />
          <ErrorMessage name="name" component="div" />
        </label>
        <label htmlFor="number" className="LogicForm__number">
          Number
          <Field type="text" name="number" />
          <ErrorMessage name="number" component="div" />
        </label>
        <button type="submit" className="LogicForm__btn">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
