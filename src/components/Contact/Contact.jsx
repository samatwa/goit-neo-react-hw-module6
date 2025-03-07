import { IoCall, IoPerson } from 'react-icons/io5';
import css from './Contact.module.css';

const Contact = ({ name, number, onDelete }) => {
  return (
    <div className={css.contact}>
      <div className={css.contactInfo}>
        <div className={css.contactName}>
          <IoPerson className={css.icon} /> {name}
        </div>
        <div className={css.contactNumber}>
          <IoCall className={css.icon} /> {number}
        </div>
      </div>
      <button className={css.deleteBtn} onClick={onDelete}>
        Delete
      </button>
    </div>
  );
};

export default Contact;