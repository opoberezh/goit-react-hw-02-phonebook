import { Component } from "react";
import { nanoid } from "nanoid";
import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList";




export class App extends Component {
  state ={
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    contactFilter: '',
  };

  addContact = newContact => {
    const existingContact = this.state.contacts.find(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );

    if (existingContact) {
      alert(`${newContact.name} is already in contacts.`);
      return;
    }
    const newItem = {
      id: nanoid(),
      name: newContact.name,
      number: newContact.number,
    };

    this.setState(prevState => ({
      contacts: [...prevState.contacts, newItem],
    }));
  };

  changeContactFilter = newFilter => {
    this.setState({
      contactFilter: newFilter,
    });
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const { contacts, contactFilter } = this.state;
    const visibleContactItems = contacts.filter(contact =>
      contact.name.toLowerCase().includes(contactFilter.toLowerCase())
    );
    return (
      <div>
        <ContactForm onAdd={this.addContact} />
        <ContactList
          contacts={visibleContactItems}
          contactFilter={contactFilter}
          onChangeFilter={this.changeContactFilter}
          onDeleteContact={this.deleteContact}
        />
      </div>
    );
  }
}


  
  






