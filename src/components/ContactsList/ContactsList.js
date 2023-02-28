import PropTypes, { object } from 'prop-types';
import { Contact } from '../Contact';

export const ContactsList = ({ contacts, number, onDeleteContact }) => {
  return (
    <ul>
      {contacts.map(({ id, name }) => {
        return (
          <Contact
            key={id}
            id={id}
            name={name}
            number={number}
            deleteContact={onDeleteContact}
          />
        );
      })}
    </ul>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(object).isRequired,
  number: PropTypes.string,
  onDeleteContact: PropTypes.func.isRequired,
};
