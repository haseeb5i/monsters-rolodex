import { useState, useEffect } from "react";
import CardList from "./components/card-list/card-list";
import "./App.css";

function App() {
  const [monsters, setMonsters] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const resp = await fetch("https://jsonplaceholder.typicode.com/users");
      setMonsters(await resp.json());
    }
    fetchData();
  }, []);
  return (
    <div className="App">
      <CardList monsters={monsters} />
    </div>
  );
}

export default App;
