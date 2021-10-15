import { useState } from "react";
function List({ contacts }) {
  const [filteredText, setFilteredText] = useState("");

  const filteredData = contacts.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key]
        .toString()
        .toLowerCase()
        .includes(filteredText.toLocaleLowerCase())
    );
  });

  return (
    <div>
      <h2>Contact List</h2>
      <input
        placeholder="search"
        onChange={(e) => setFilteredText(e.target.value)}
      />
      <ul id="list">
        {filteredData &&
          filteredData.map((item, key) => (
            <li key={key}>
              <span>{item.full_name}</span>
              <span>{item.phone_number}</span>
            </li>
          ))}
      </ul>
      <span id="totalCount">Total Count ({filteredData.length})</span>
    </div>
  );
}
export default List;
