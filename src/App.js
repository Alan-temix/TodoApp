import './App.css';
import './styles/custom.css';
import './styles/utilities.css';
import Options from './components/Options';
import AddToDo from './components/AddToDo';
import MainToDoList from './components/MainToDoList';
import { useEffect, useState } from "react";

// Context
import { ToDoListProvider } from './context/ToDoListContext';

function App() {

  return (
    <ToDoListProvider>
      <div className="App">
      <Options />
        <div className="main ms-4 col-md-9">
          <AddToDo />
          <MainToDoList/>
        </div>
      </div>
    </ToDoListProvider>
  );
}

export default App;
