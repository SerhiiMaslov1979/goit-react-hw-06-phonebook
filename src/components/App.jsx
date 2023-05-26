// import { Component } from 'react';
// import { LogicForm } from './LogicForm/LogicForm';
// import { nanoid } from 'nanoid';
// import ContactsList from './ContactsList/ContactsList';
// import { Filter } from './Filter/Filter';
// import './App.css';

import { useState, useEffect } from 'react';
import { LogicForm } from './LogicForm/LogicForm';
import { nanoid } from 'nanoid';
import ContactsList from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';
import './App.css';

// export class App extends Component {
//   state = {
//     contacts: [],

//     filter: '',
//   };

export function App() {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  //   componentDidMount() {
  //     console.log('componentDidMount');
  //     const savedContacts = localStorage.getItem('contacts');
  //     // const initialContacts = localStorage.getItem('contacts');
  //     console.log(savedContacts);
  //     if (savedContacts !== null) {
  //       this.setState({ contacts: JSON.parse(savedContacts) });
  //     } else {
  //       // this.setState({ contacts: initialContacts });
  //     }
  //   }

  useEffect(() => {
    console.log('componentDidMount');
    const savedContacts = localStorage.getItem('contacts');
    console.log(savedContacts);
    if (savedContacts !== null) {
      setContacts(JSON.parse(savedContacts));
    } else {
    }
  }, []);

  //   componentDidUpdate(prevProps, prevState) {
  //     console.log('componentDidUpdate');
  //     if (prevState.contacts !== this.state.contacts) {
  //       localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  //     }
  //     console.log('prevState', prevState);
  //     console.log('this.state', this.stae);
  //   }

  useEffect(() => {
    console.log('componentDidUpdate');
    localStorage.setItem('contacts', JSON.stringify(contacts));
    console.log('this.state', contacts);
  }, [contacts]);

  //   addContact = ({ name, number }) => {
  //     if (
  //       this.state.contacts.some(
  //         contact => name.toLowerCase() === contact.name.toLowerCase()
  //       )
  //     ) {
  //       alert(`${name} is already in contacts`);
  //       return;
  //     }
  //     const contact = { id: nanoid(), name, number };
  //     this.setState(prevState => ({
  //       contacts: [...prevState.contacts, contact],
  //     }));
  //   };

  //   deleteContacts = contactsId => {
  //     this.setState(prevState => ({
  //       contacts: prevState.contacts.filter(
  //         contacts => contacts.id !== contactsId
  //       ),
  //     }));
  //   };

  //   getFilteredContacts = () => {
  //     const { filter, contacts } = this.state;

  //     return contacts.filter(contact =>
  //       contact.name.toLowerCase().includes(filter.toLowerCase())
  //     );
  //   };

  //   changleFilterValue = e => this.setState({ filter: e.target.value });

  const addContact = ({ name, number }) => {
    if (
      contacts.some(
        contact => name.toLowerCase() === contact.name.toLowerCase()
      )
    ) {
      alert(`${name} is already in contacts`);
      return;
    }
    const contact = { id: nanoid(), name, number };
    setContacts(prevContacts => [...prevContacts, contact]);
  };

  const deleteContacts = contactId => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== contactId)
    );
  };

  const getFilteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const changleFilterValue = e => setFilter(e.target.value);

  console.log('render');
  const filteredContacts = getFilteredContacts();

  //   render() {
  //     console.log('render');
  //     const { filter, contacts } = this.state;
  //     const filteredContacts = this.getFilteredContacts();
  //     return (
  //       <div className="App__container">
  //         <h1>Phonebook</h1>
  //         <LogicForm addContact={this.addContact} />
  //         <h2>Contacts</h2>
  //         <h3>Find contacts by name</h3>
  //         {contacts.length > 0 ? (
  //           <>
  //             <Filter onChange={this.changleFilterValue} value={filter} />

  //             <ContactsList
  //               contacts={filteredContacts}
  //               onDeleteContacts={this.deleteContacts}
  //             />
  //           </>
  //         ) : (
  //           <p>No contacts</p>
  //         )}
  //       </div>
  //     );
  //   }
  // }

  return (
    <div className="App__container">
      <h1>Phonebook</h1>
      <LogicForm addContact={addContact} />
      <h2>Contacts</h2>
      <h3>Find contacts by name</h3>
      {contacts.length > 0 ? (
        <>
          <Filter onChange={changleFilterValue} value={filter} />

          <ContactsList
            contacts={filteredContacts}
            onDeleteContacts={deleteContacts}
          />
        </>
      ) : (
        <p>No contacts</p>
      )}
    </div>
  );
}
