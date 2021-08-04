import { useState, useEffect } from "react";
import CardList from "./components/card-list";
import SearchBox from "./components/search-box";
import "./App.css";

function App() {
  const [monsters, setMonsters] = useState([]);
  const [searchField, setSearchField] = useState("");
  useEffect(() => {
    async function fetchData() {
      const resp = await fetch("https://jsonplaceholder.typicode.com/users");
      setMonsters(await resp.json());
    }
    fetchData();
  }, []);

  const filteredMonsters = monsters.filter((monster) =>
    monster.name.toLowerCase().includes(searchField)
  );

  return (
    <div className="App">
      <h1> Monsters Rolodex </h1>
      <SearchBox
        placeholder="search monsters"
        onChangeHandler={(e) => setSearchField(e.target.value)}
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
}

export default App;
