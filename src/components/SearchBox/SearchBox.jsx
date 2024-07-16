import s from "./SearchBox.module.css";

export default function SearchBox({ value, onFilter }) {
  return (
    <div className={s.searchBox}>
      <label>Find contacts by name</label>
      <input
        type="text"
        value={value}
        onChange={(e) => onFilter(e.target.value)}
      ></input>
    </div>
  );
}
