import { Card, Button, Dropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare, faCircleNotch, faTrash, faDumpster, faTrashRestoreAlt } from '@fortawesome/free-solid-svg-icons';

const ListToDo = ({id, task, status, changeStatusOnTask, deleteTask}) => {

    const setBorderColor = (statusToDo) => {
        switch(statusToDo) {
            case "Completed":
                return "ut-status-Completed";
            case "Not Completed":
                return "ut-status-NotCompleted";
            case "In Progress":
                return "ut-status-InProgress";
            case "Trash":
                return "ut-status-Trash";
            default:
                return "";
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
        <Card className={`main-list mb-2 ${setBorderColor(status)}`}>
            <Card.Body className="d-flex justify-content-between align-items-center">
                <Card.Title><i style={{textAlign: "left", display: "block", fontSize: ".7em"}}>{status}</i>{task}</Card.Title>
                <div className="main-list__buttons--display">
                    {
                        status === "Trash" ? (
                        <>
                        <Button variant="success" className="mx-1" onClick={handleRestore}><FontAwesomeIcon icon={faTrashRestoreAlt} size="2x" /></Button>
                        <Button variant="warning" className="mx-1" onClick={handleDeletePermanently}><FontAwesomeIcon icon={faDumpster} size="2x" /></Button>
                        </>
                        ) : (
                        <>
                        <Button variant="success" className="mx-1" onClick={handleToComplete}><FontAwesomeIcon icon={faCheckSquare} size="2x" /></Button>
                        <Button variant="info" className="mx-1" onClick={handleInProgress}><FontAwesomeIcon icon={faCircleNotch} size="2x" /></Button>
                        <Button variant="danger" className="mx-1" onClick={handleMoveToTrash}><FontAwesomeIcon icon={faTrash} size="2x" /></Button>
                        </>
                        )
                    }
                </div>
                <Dropdown className="d-md-none">
                        <Dropdown.Toggle style={{backgroundColor: "black", color: "white", border: "none"}} id="dropdown-basic">
                        Options
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            {
                                status === "Trash" ? (
                                    <>
                                    <Dropdown.Item onClick={handleRestore}>Restore</Dropdown.Item>
                                    <Dropdown.Item onClick={handleDeletePermanently}>Delete</Dropdown.Item>
                                    </>
                                ) : (
                                    <>
                                    <Dropdown.Item onClick={handleToComplete}>Complete</Dropdown.Item>
                                    <Dropdown.Item onClick={handleInProgress}>In Progress</Dropdown.Item>
                                    <Dropdown.Item onClick={handleMoveToTrash}>Move to Trash</Dropdown.Item>
                                    </>
                                )
                            }
                        </Dropdown.Menu>
                    </Dropdown>
            </Card.Body>
        </Card>
    );
}

export default ListToDo;