import { useDispatch, useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { deleteContact, selectContacts } from "../../redux/contactsSlice";
import { selectNameFilter } from "../../redux/filtersSlice";

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);
  const dispatch = useDispatch();

  const filteredContacts = contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));

  return (
    <div className={css.contactList}>
      {filteredContacts.map(contact => (
        <Contact
          key={contact.id}
          name={contact.name}
          number={contact.number}
          onDelete={() => dispatch(deleteContact(contact.id))}
        />
      ))}
    </div>
  );
};

export default ContactList