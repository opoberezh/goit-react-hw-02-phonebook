import { ContactsFilter } from '../Filter/Filter';
import {ListStyled,  ItemStyled,   DeleteButton, Wrapper} from './ContactList.styled';

export const ContactList = ({
  contacts,
  contactFilter,
  onChangeFilter,
  onDeleteContact,
}) => {
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(contactFilter.toLowerCase())
  );

  return (
    <Wrapper>
      
      <ContactsFilter value={contactFilter} onChange={onChangeFilter} />
      
      <ListStyled>
        {filteredContacts.map(contact => (
          <ItemStyled key={contact.id}>
            {contact.name}: {contact.number}
            <DeleteButton onClick={() => onDeleteContact(contact.id)}>Delete</DeleteButton>
          </ItemStyled>
        ))}
      </ListStyled>
    </Wrapper>
  );
};
