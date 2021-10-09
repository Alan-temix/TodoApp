import React, {useContext} from "react";
import { Card, Button, ListGroup, ListGroupItem } from "react-bootstrap";

// Context
import ToDoListContext from '../context/ToDoListContext';

const Options = ({changeType}) => {
    const { task } = useContext(ToDoListContext);
    
    const amountInCategory = (arr, param) => {
        const result = arr.filter(task => task.status === param);
        return result.length;
    }

    return(
        <div className="options col-md-3">
            <Card className="options__cover text-light text-start border-0 px-3 mb-4">
                <Card.Body className="">
                    <Card.Title>To Do App</Card.Title>
                    <Card.Subtitle className="mb-2 fw-bold">List of things to do</Card.Subtitle>
                </Card.Body>
            </Card>
            <Card className="options__buttons d-grid border-0 mb-4" style={{backgroundColor: "inherit"}}>
                <Button className="rounded-3" variant="primary" onClick={() => changeType("All")}>All</Button>
                <Button className="rounded-3" variant="primary" onClick={() => changeType("Completed")}>Completed</Button>
                <Button className="rounded-3" variant="primary" onClick={() => changeType("Not Completed")}>Not Completed</Button>
                <Button className="rounded-3" variant="primary" onClick={() => changeType("In Progress")}>In Progress</Button>
                <Button className="rounded-3" variant="danger" onClick={() => changeType("Trash")}>Trash</Button>
            </Card>
            <Card className="options__roadmap mb-4">
                <Card.Body>
                    <Card.Title>Roadmap</Card.Title>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem className="border-0 d-flex justify-content-between"><h6>All</h6><span>{task.length}</span></ListGroupItem><hr className="my-0" />
                    <ListGroupItem className="border-0 ms-3 d-flex justify-content-between"><li className="ut-green"><span>Completed</span></li><span>{amountInCategory(task, "Completed")}</span></ListGroupItem>
                    <ListGroupItem className="border-0 ms-3 d-flex justify-content-between"><li className="ut-purple"><span>Not Completed</span></li><span>{amountInCategory(task, "Not Completed")}</span></ListGroupItem>
                    <ListGroupItem className="border-0 ms-3 d-flex justify-content-between"><li className="ut-blue"><span>In Progress</span></li><span>{amountInCategory(task, "In Progress")}</span></ListGroupItem>
                    <ListGroupItem className="border-0 ms-3 d-flex justify-content-between"><li className="ut-red"><span>Trashed</span></li><span>{amountInCategory(task, "Trash")}</span></ListGroupItem>
                </ListGroup>
            </Card>
        </div>
    );
}

export default Options;