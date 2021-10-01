import { Card, Button, Dropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare, faCircleNotch, faTrash } from '@fortawesome/free-solid-svg-icons';

const ListToDo = ({id, task, status}) => {

    const setBorderColor = (statusToDo) => {
        switch(statusToDo) {
            case "completed":
                return "green";
            case "not-completed":
                return "purple";
            case "in-progress":
                return "blue";
            case "trashed":
                return "red";
            default:
                return "yellow";
        }
    }

    return (
        <Card className="main-list mb-2" style={{border: `2px solid ${setBorderColor(status)}`}}>
            <Card.Body className="d-flex justify-content-between align-items-center">
                <Card.Title>{task}</Card.Title>
                <div className="main-list__buttons--display">
                    <Button variant="success" className="h-50 mx-1"><FontAwesomeIcon icon={faCheckSquare} size="2x" /></Button>
                    <Button variant="info" className="h-50 mx-1"><FontAwesomeIcon icon={faCircleNotch} size="2x" /></Button>
                    <Button variant="danger" className="h-50 mx-1"><FontAwesomeIcon icon={faTrash} size="2x" /></Button>
                </div>
                <Dropdown className="d-md-none">
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Options
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item onClick={() => console.log("click on item 1")}>Complete</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">In Progress</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Move to Trash</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
            </Card.Body>
        </Card>
    );
}

export default ListToDo;