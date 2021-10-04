import { Card, Button, Dropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare, faCircleNotch, faTrash, faDumpster, faTrashRestoreAlt } from '@fortawesome/free-solid-svg-icons';

const ListToDo = ({id, task, status, changeStatusOnTask, deleteTask}) => {

    const setBorderColor = (statusToDo) => {
        switch(statusToDo) {
            case "Completed":
                return "green";
            case "Not Completed":
                return "purple";
            case "In Progress":
                return "blue";
            case "Trash":
                return "red";
            default:
                return "yellow";
        }
    }

    const handleToComplete = () => {
        changeStatusOnTask(id, "Completed");
    }
    const handleInProgress = () => {
        changeStatusOnTask(id, "In Progress");
    }
    const handleMoveToTrash = () => {
        changeStatusOnTask(id, "Trash");
    }
    const handleRestore = () => {
        changeStatusOnTask(id, "Not Completed");
    }
    const handleDeletePermanently = () => {
        deleteTask(id)
    }

    return (
        <Card className="main-list mb-2" style={{border: `2px solid ${setBorderColor(status)}`}}>
            <Card.Body className="d-flex justify-content-between align-items-center">
                <Card.Title>{task}</Card.Title>
                <div className="main-list__buttons--display">
                    {
                        status === "Trash" ? (<><Button variant="success" className="mx-1" onClick={handleRestore}><FontAwesomeIcon icon={faTrashRestoreAlt} size="2x" /></Button><Button variant="warning" className="mx-1" onClick={handleDeletePermanently}><FontAwesomeIcon icon={faDumpster} size="2x" /></Button></>) : (
                        <>
                        <Button variant="success" className="mx-1" onClick={handleToComplete}><FontAwesomeIcon icon={faCheckSquare} size="2x" /></Button>
                        <Button variant="info" className="mx-1" onClick={handleInProgress}><FontAwesomeIcon icon={faCircleNotch} size="2x" /></Button>
                        <Button variant="danger" className="mx-1" onClick={handleMoveToTrash}><FontAwesomeIcon icon={faTrash} size="2x" /></Button>

                        </>
                        )
                    }
                </div>
                <Dropdown className="d-md-none">
                        <Dropdown.Toggle style={{backgroundColor: "#ad1eeb"}} id="dropdown-basic">
                        Options
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item onClick={handleToComplete}>Complete</Dropdown.Item>
                            <Dropdown.Item onClick={handleInProgress}>In Progress</Dropdown.Item>
                            <Dropdown.Item onClick={handleMoveToTrash}>Move to Trash</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
            </Card.Body>
        </Card>
    );
}

export default ListToDo;