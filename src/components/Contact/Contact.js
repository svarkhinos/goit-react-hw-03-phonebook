import PropTypes from 'prop-types';
import s from './Contact.module.css';

const Contact = ({ id, name, number, onDeleteContact }) => (
  <li className={s.listItem} key={id}>
    <p className={s.listItemName}>
      {name} : {number}
    </p>
    <button className={s.btn} onClick={() => onDeleteContact(id)}>
      Delete
    </button>
  </li>
);

export default Contact;

Contact.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
  onDeleteContact: PropTypes.func,
};
