import './App.css';
import './styles/custom.css';
import './styles/utilities.css';
import Options from './components/Options';
import AddToDo from './components/AddToDo';
import MainToDoList from './components/MainToDoList';

// Context
import { ToDoListProvider } from './context/ToDoListContext';
import { useState } from 'react';

function App() {
  const [typeSelectedTask, setTypeSelectedTask] = useState("All");

  const changeType = (param) => {
    setTypeSelectedTask(param);
  }

  return (
    <ToDoListProvider>
        <div className="App">
        <Options changeType={changeType} />
          <div className="main col-md-9">
            <AddToDo />
            <MainToDoList type={typeSelectedTask} />
          </div>
        </div>
    </ToDoListProvider>
  );
}

export default App;
