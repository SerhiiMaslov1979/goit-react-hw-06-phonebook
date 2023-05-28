// import { useState, useEffect } from 'react';
// import { LogicForm } from './LogicForm/LogicForm';
// import { nanoid } from 'nanoid';
// import ContactsList from './ContactsList/ContactsList';
// import { Filter } from './Filter/Filter';
// import './App.css';

// export function App() {
//   const [contacts, setContacts] = useState([]);
//   const [filter, setFilter] = useState('');

//   useEffect(() => {
//     console.log('componentDidMount');
//     const savedContacts = localStorage.getItem('contacts');
//     console.log(savedContacts);
//     if (savedContacts !== null) {
//       setContacts(JSON.parse(savedContacts));
//     } else {
//     }
//   }, []);

//   useEffect(() => {
//     console.log('componentDidUpdate');
//     localStorage.setItem('contacts', JSON.stringify(contacts));
//     console.log('this.state', contacts);
//   }, [contacts]);

//   const addContact = ({ name, number }) => {
//     if (
//       contacts.some(
//         contact => name.toLowerCase() === contact.name.toLowerCase()
//       )
//     ) {
//       alert(`${name} is already in contacts`);
//       return;
//     }
//     const contact = { id: nanoid(), name, number };
//     setContacts(prevContacts => [...prevContacts, contact]);
//   };

//   const deleteContacts = contactId => {
//     setContacts(prevContacts =>
//       prevContacts.filter(contact => contact.id !== contactId)
//     );
//   };

//   const getFilteredContacts = () => {
//     return contacts.filter(contact =>
//       contact.name.toLowerCase().includes(filter.toLowerCase())
//     );
//   };

//   const changleFilterValue = e => setFilter(e.target.value);

//   console.log('render');
//   const filteredContacts = getFilteredContacts();

//   return (
// <div className="App__container">
//   <h1>Phonebook</h1>
//   <LogicForm addContact={addContact} />
//   <h2>Contacts</h2>
//   <h3>Find contacts by name</h3>
//   {contacts.length > 0 ? (
//     <>
//       <Filter onChange={changleFilterValue} value={filter} />

//       <ContactsList
//         contacts={filteredContacts}
//         onDeleteContacts={deleteContacts}
//       />
//     </>
//   ) : (
//     <p>No contacts</p>
//   )}
// </div>
//   );
// }

// import React from 'react';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { useDispatch } from 'react-redux';

// import { ContactForm } from './ContactForm/ContactForm';
// import { ContactList } from './ContactList/ContactList';
// import { Filter } from './Filter/Filter';
// import { MainHeader, SecondaryHeader, Section } from './App.styled';

// export const App = () => {
//   const dispatch = useDispatch();

//   const notify = message => {
//     toast.success(message);
//   };

//   return (
//     <Section>
//       <MainHeader>Phonebook</MainHeader>

//       <ContactForm notify={notify} />
//       <SecondaryHeader>Contacts</SecondaryHeader>

//       <Filter />

//       <ContactList notify={notify} />

//       <ToastContainer position="top-center" />
//     </Section>
//   );
// };
import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { LogicForm } from './LogicForm/LogicForm';
import ContactsList from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';
import './App.css';

export const App = () => {
  const contacts = []; // Замініть цей рядок на ваші дані контактів

  return (
    <div className="App__container">
      <h1>Phonebook</h1>

      <LogicForm />
      <h2>Contacts</h2>

      <Filter />
      <ContactsList contacts={contacts} />

      <ToastContainer position="top-center" />
    </div>
  );
};
