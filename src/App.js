import React from "react";
import "./App.css";

import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="App">
      <header>
        <h1>Haashim's Todo List</h1>
      </header>
      <Form />
    </div>
  );
}
export default App;
