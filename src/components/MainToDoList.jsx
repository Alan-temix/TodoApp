import { useContext } from 'react';
import { Card } from 'react-bootstrap';
import ListToDo from './ListToDo';

// Context
import ToDoListContext from '../context/ToDoListContext';

const MainToDoList = () => {
    const { task } = useContext(ToDoListContext);
    console.log(task);
    return(
        <Card className="main__container">
        <Card.Header className="text-start"><h3>All</h3></Card.Header>
        <Card.Body>
            {
                task && task.map((item, index) => (<ListToDo key={index} id={item.id} task={item.task} status={item.status} />))
            }
        </Card.Body>
        </Card>
    );
}

export default MainToDoList;