import PropTypes from "prop-types";
import styled from "styled-components";
import { ContactListItem } from "../ContactListItem/ContactListItem";
export const ContactsList = ({ contacts, filter, onDelete }) => {
  if (filter === "") {
    return createContacts(contacts, onDelete);
  } else {
    const filtredContacts = contacts.filter((el) =>
      el.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
    );
    return createContacts(filtredContacts, onDelete);
  }
};
function createContacts(contacts, onDelete) {
  return (
    <ListOfContacts>
      {contacts.map((contact) => {
        return (
          <ContactListItem
            contact={contact}
            key={contact.id}
            onDelete={onDelete}
          />
        );
      })}
    </ListOfContacts>
  );
}
ContactsList.propTypes = {
  contacts: PropTypes.array,
  filter: PropTypes.string,
  onDelete: PropTypes.func,
};
const ListOfContacts = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
