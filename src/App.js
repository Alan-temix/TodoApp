import './App.css';
import Options from './components/Options';
import AddToDo from './components/AddToDo';
import MainToDoList from './components/MainToDoList';

function App() {
  return (
    <div className="App">
      <Options />
      <div className="main w-100">
        <AddToDo />
        <MainToDoList />
      </div>
    </div>
  );
}

export default App;
