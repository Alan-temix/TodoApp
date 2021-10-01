import React, {useState, useContext} from "react";
import { Card, Button, ListGroup, ListGroupItem } from "react-bootstrap";

// Context
import ToDoListContext from '../context/ToDoListContext';

const Options = () => {
    const [optionChoose, setOptionChoose] = useState("All");
    const { task } = useContext(ToDoListContext);
    
    const amountInCategory = (arr, param) => {
        const result = arr.filter(task => task.status === param);
        return result.length;
    }

    return(
        <div className="options col-md-3">
            <Card className="options__cover text-light text-start border-0 px-3 mb-4" style={{height: '13rem' }}>
                <Card.Body className="">
                    <Card.Title>To Do App</Card.Title>
                    <Card.Subtitle className="mb-2 fw-bold">List of things to do</Card.Subtitle>
                </Card.Body>
            </Card>
            <Card className="options__buttons d-grid border-0 mb-4">
                SELECTED: {optionChoose}
                <Button className="rounded-3" variant="primary" onClick={() => setOptionChoose("All")}>All</Button>
                <Button className="rounded-3" variant="primary" onClick={() => setOptionChoose("Completed")}>Completed</Button>
                <Button className="rounded-3" variant="primary" onClick={() => setOptionChoose("Not Completed")}>Not Completed</Button>
                <Button className="rounded-3" variant="primary" onClick={() => setOptionChoose("In Process")}>In Process</Button>
                <Button className="rounded-3" variant="danger" onClick={() => setOptionChoose("Trash")}>Trash</Button>
            </Card>
            <Card className="options__roadmap mb-4">
                <Card.Body>
                    <Card.Title>Roadmap</Card.Title>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem className="border-0 ms-3 d-flex justify-content-between"><li className="ut-gold"><span>All</span></li><span>{task.length}</span></ListGroupItem>
                    <ListGroupItem className="border-0 ms-3 d-flex justify-content-between"><li className="ut-green"><span>Completed</span></li><span>{amountInCategory(task, "completed")}</span></ListGroupItem>
                    <ListGroupItem className="border-0 ms-3 d-flex justify-content-between"><li className="ut-purple"><span>Not Completed</span></li><span>{amountInCategory(task, "not-completed")}</span></ListGroupItem>
                    <ListGroupItem className="border-0 ms-3 d-flex justify-content-between"><li className="ut-blue"><span>In Progress</span></li><span>{amountInCategory(task, "in-progress")}</span></ListGroupItem>
                    <ListGroupItem className="border-0 ms-3 d-flex justify-content-between"><li className="ut-red"><span>Trashed</span></li><span>{amountInCategory(task, "trashed")}</span></ListGroupItem>
                </ListGroup>
            </Card>
        </div>
    );
}

export default Options;