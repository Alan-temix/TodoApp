import React, {useState, createContext } from 'react';
import listaTodo from '../listaTodo';

const ToDoListContext = createContext();

const ToDoListProvider = ({children}) => {
    const [task, setTask] = useState(listaTodo);
    let index = Object.values(task).length + 1;
    console.log(task);

    const createNewTask = (t) => {
        // Codigo para crear uevas tareas
        setTask([...task,
            {
                id: index++,
                task: t,
                status: "Not Completed"
            }])
    }
    
    const changeStatusOnTask = (identify, s) => {
        const i = task.map(element => element.id).indexOf(identify);
        task[i].status = s;
    }

    const deleteTask = (identify) => {
        const i = task.map(element => element.id).indexOf(identify);
        task.splice(i, 1);
    }

    const data = { 
        task,
        createNewTask,
        changeStatusOnTask,
        deleteTask
    };

    return(
        <ToDoListContext.Provider value={data}>
            {children}
        </ToDoListContext.Provider>
    )
}

export { ToDoListProvider };
export default ToDoListContext;