import React, { useState, createContext } from 'react';
import listaTodo from '../listaTodo';

const ToDoListContext = createContext();

const ToDoListProvider = ({children}) => {
    const [task, setTask] = useState(listaTodo);

    const data = { task: task }

    return(
    <ToDoListContext.Provider value={data} >
        {children}
    </ToDoListContext.Provider>
    );
}

export { ToDoListProvider }
export default ToDoListContext;