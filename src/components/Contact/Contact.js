import { ContactItem, Text, DelBnt } from './Contact.styled';


export const Contact = ({ name, number, id, deleteContact }) => {
  return (
    <ContactItem>
      <Text>{name}</Text>
      <Text>{number}</Text>
      <DelBnt type="button" onClick={() => deleteContact(id)}>
        Delete
      </DelBnt>
    </ContactItem>
  );
};