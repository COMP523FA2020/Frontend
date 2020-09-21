import React from "react";
import { LogicSearchBar } from "./components/logic/LogicSearchBar";
import "./css/App.css";
import "..\\node_modules\\bulma\\css\\bulma.css";

function App() {
  return (
    <div className="App">
      <div>
        <header className="App-header">
          <LogicSearchBar
            queryType="fruit"
            queryOptions={["apple", "banana", "apricot", "plantain"]}
          />
          <LogicSearchBar
            queryType="vegetable"
            queryOptions={["cucumber", "spinach", "onion", "okra"]}
          />
        </header>
      </div>
    </div>
  );
}

export default App;
