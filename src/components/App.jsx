import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addContact = (name, number) => {
    const { contacts } = this.state;

    if (contacts.some(contact => contact.name.toLowerCase() === name.toLowerCase())) {
      alert('Contact with this name already exists!');
      return;
    }

    const newContact = { id: nanoid(), name, number };
    this.setState({ contacts: [...contacts, newContact] });
  };

  deleteContact = (id) => {
    const { contacts } = this.state;
    const updatedContacts = contacts.filter(contact => contact.id !== id);
    this.setState({ contacts: updatedContacts });
  };

  handleFilterChange = (value) => {
    this.setState({ filter: value });
  };

  render() {
    const { contacts, filter } = this.state;
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
      <div className="container">
        <h1>Phonebook</h1>
        <ContactForm addContact={this.addContact} />

        <h2>Contacts</h2>
        <Filter filter={filter} onFilterChange={this.handleFilterChange} />
        <ContactList contacts={filteredContacts} onDeleteContact={this.deleteContact} />
      </div>
    );
  }
}

export default App;