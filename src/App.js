import React, { Component } from "react";
import Section from "./components/Section/Section";
import Form from "./components/Form/Form";
import Filter from "./components/Filter/Filter";
import Contacts from "./components/Contacts/Contacts";
import "./App.css";

export class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  getContact = (firstContact) => {
    const { contacts } = this.state;
    const originalContact = contacts.find(
      (contact) => contact.name === firstContact.name
    );
    originalContact
      ? alert(`${originalContact.name} is already in contacts.`)
      : this.setState({ contacts: [firstContact, ...contacts] });
  };

  getFilterContact = (e) => {
    this.setState({ filter: e.target.value });
  };

  filteredContact = () => {
    return this.state.filter
      ? this.state.contacts.filter((el) =>
          el.name.toLowerCase().includes(this.state.filter.toLowerCase())
        )
      : this.state.contacts;
  };

  deleteContact = (contactId) => {
    this.setState((prev) => ({
      contacts: prev.contacts.filter((contact) => contact.id !== contactId),
    }));
  };

  render() {
    const { filter } = this.state;
    return (
      <>
        <Section title="Phonebook">
          <Form getContact={this.getContact} />
        </Section>
        <Section title="Contacts">
          <Filter filter={filter} getFilterContact={this.getFilterContact} />
          <Contacts
            contactList={this.filteredContact()}
            deleteContact={this.deleteContact}
          />
        </Section>
      </>
    );
  }
}
// Компоненты пере рендериваются в двух случаях : если в них приходят новые props или изменяются внутреннее состояние(state). при изменинии state каждый раз вызывается метод render()

// функциональные Компоненты(без хуков) пере рендериваются только тогда когда в них приходят новые props

export default App;
