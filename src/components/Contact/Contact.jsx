import s from "./Contact.module.css";

export default function Contact({ id, name, number, onDelete }) {
  return (
    <li className={s.contactItem}>
      <div>
        <p>{name}</p>
        <p>{number}</p>
      </div>
      <button
        type="button"
        onClick={() => {
          onDelete(id);
        }}
      >
        Delete
      </button>
    </li>
  );
}
