import { useContext } from 'react';
import { Card } from 'react-bootstrap';
import ListToDo from './ListToDo';

// Context
import ToDoListContext from '../context/ToDoListContext';

const MainToDoList = ({type}) => {
    const { task, changeStatusOnTask, deleteTask } = useContext(ToDoListContext);
    const showList = type === "All" ? (task.filter(current => current.status !== "Trash")) : (task.filter((current) => current.status === type));

    return(
        <Card className="main__container">
        <Card.Header className="text-start"><h3>{type}</h3></Card.Header>
        <Card.Body>
            {
                showList.sort((a, b) => {
                    if(a.id === b.id) {
                        return 0;
                    }
                    if(a.id > b.id) {
                        return -1;
                    }
                    return 1;
                }).map((item, index) => (<ListToDo key={index} id={item.id} task={item.task} status={item.status} changeStatusOnTask={changeStatusOnTask} deleteTask={deleteTask} />))
            }
        </Card.Body>
        </Card>
    );
}

export default MainToDoList;