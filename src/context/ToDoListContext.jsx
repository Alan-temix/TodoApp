import React, {useState, useEffect, createContext } from 'react';
// import listaTodo from '../listaTodo';

const ToDoListContext = createContext();

const ToDoListProvider = ({children}) => {
    // const [task, setTask] = useState(listaTodo);
    const [task, setTask] = useState([]);
    let index = task.length > 0 ? Object.values(task).length + 1 : 0
    // console.log(task);

    useEffect(() => {
        if(JSON.parse(localStorage.getItem("todoList"))) {
            setTask(JSON.parse(localStorage.getItem("todoList")));
        } else {
            setTask(localStorage.setItem("todoList", JSON.stringify([])))
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("todoList", JSON.stringify(task));
      }, [task]);    

    const createNewTask = (t) => {
        // Codigo para crear nuevas tareas
        setTask([...task,
            {
                id: index++,
                task: t,
                status: "Not Completed"
            }])
    }
    
    const changeStatusOnTask = (identify, s) => {
        const i = task.map(element => element.id).indexOf(identify);
        //task[i].status = s;
        //setTask([...task, task[i].status = s]); <- Este por alguna razon cambia el estado pero agrega un nuevo elemento al arreglo y lo pone al estado de s
        setTask([...task], task[i].status = s);
    }

    const deleteTask = (identify) => {
        //const i = task.map(element => element.id).indexOf(identify);
        const newArray = task.filter(element => element.id !== identify)
        setTask(newArray);
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