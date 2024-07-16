export default function SearchBox({ value, onFilter }) {
  return (
    <div>
      <label>Find contacts by name</label>
      <input
        type="text"
        value={value}
        onChange={(e) => onFilter(e.target.value)}
      ></input>
    </div>
  );
}
