import "./App.css";
import { Component } from "react";
import styled from "styled-components";
import Form from "./Components/Form/Form";
import { Notify } from "notiflix/build/notiflix-notify-aio";
import { ContactsList } from "./Components/ContactsList/ContactsList";
import { SearchField } from "./Components/SearchField/SearchField";

class App extends Component {
  state = {
    contacts: [],
    filter: "",
  };
  handleFilter = (event) => {
    this.setState({ filter: event.currentTarget.value });
  };
  onSubmit = (newContact) => {
    if (this.state.contacts.find((el) => el.name === newContact.name)) {
      Notify.failure(`${newContact.name} is already in contacts`);
      return;
    }
    this.setState((prevState) => {
      return { contacts: [...prevState.contacts, newContact], filter: "" };
    });
  };
  onDelete = (id) => {
    this.setState((prevState) => {
      return { contacts: prevState.contacts.filter((el) => el.id !== id) };
    });
  };
  render() {
    return (
      <Section>
        <h1>Phonebook</h1>
        <Form onSubmit={this.onSubmit} />
        <h2>Contacts</h2>
        <SearchField value={this.state.filter} onChange={this.handleFilter} />
        <ContactsList
          contacts={this.state.contacts}
          filter={this.state.filter}
          onDelete={this.onDelete}
        />
      </Section>
    );
  }
}
export default App;
const Section = styled.div`
  width: 500px;
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
