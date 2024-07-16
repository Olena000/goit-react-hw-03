import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";

export default function ContactList({ contacts, onDelete }) {
  return (
    <ul className={s.contactList}>
      {contacts.map(({ id, name, number }) => (
        <Contact
          key={id}
          id={id}
          name={name}
          number={number}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}
