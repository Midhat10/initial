import "./App.css";
import { useState } from "react";

const Search = ({ value, onChange, children }) => {
  return (
    <div>
      <label htmlFor="search">{children}</label>
      <input
        placeholder="search text..."
        type="text"
        id="search"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

function App() {
  const [search, setSearch] = useState("");

  const handleChange = ({ target }) => {
    return setSearch(target.value);
  };
  return (
    <div>
      <img src="" alt="search image" />
      <Search value={search} onChange={handleChange}>
        SEARCH:
      </Search>
      <p>Searches for {search ? search : "..."}</p>
    </div>
  );
}

export default App;
