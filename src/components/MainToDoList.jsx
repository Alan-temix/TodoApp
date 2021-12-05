import { useContext } from 'react';
import { Card } from 'react-bootstrap';
import ListToDo from './ListToDo';

// Context
import ToDoListContext from '../context/ToDoListContext';

const MainToDoList = ({type}) => {
    const { task, changeStatusOnTask, deleteTask } = useContext(ToDoListContext);
    console.log(type, task)
    const showList = type === "All" ? (task?.filter(current => current.status !== "Trash")) : (task?.filter((current) => current.status === type));

    const showMessage = (type) => {
        switch (type) {
            case "All":
                return 'It seems that you have not added any task, you can add tasks with the "Add" button at the top.';

            case "Completed":
                return "You have not marked any task as completed";

            case "Not Completed":
                return "Congratulations you have no uncompleted tasks";

            case "Trash":
                return "You don't have any tasks in the trash";
        
            default:
                return null;
        }
    }
    return(
        <Card className="main__container">
        <Card.Header className="text-start"><h3>{type}</h3></Card.Header>
        <Card.Body>
            {   
                showList?.length > 0 ? (
                showList.sort((a, b) => {
                    if(a.id === b.id) {
                        return 0;
                    }
                    if(a.id > b.id) {
                        return -1;
                    }
                    return 1;
                }).map((item, index) => (<ListToDo key={index} id={item.id} task={item.task} status={item.status} changeStatusOnTask={changeStatusOnTask} deleteTask={deleteTask} />)) 
                ) : (
                    showMessage(type)
                )
            }
        </Card.Body>
        </Card>
    );
}

export default MainToDoList;