
import { useState, useContext } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { Accordion, Card, useAccordionButton, Button, Row, Col, Form } from "react-bootstrap";
import ToDoListContext from '../context/ToDoListContext';

const CustomToggle = ({ children, eventKey }) => {
    const [textInBotton, setTextInBotton] = useState("Add");

    const handleTextInBotton = () => {
        if(textInBotton === "Add") {
            setTextInBotton("Cancel");
        } else {
            setTextInBotton("Add");
        }
    }

    const decoratedOnClick = useAccordionButton(eventKey, handleTextInBotton);
  
    return (
        <Button className="border-0" style={{backgroundColor: "#ad1eeb"}} onClick={decoratedOnClick}>{textInBotton} {textInBotton === "Add" ? <FontAwesomeIcon icon={faPlus} /> : ""} {children}</Button>
    );
  }
  
const AddToDo = () => {
    const { createNewTask } = useContext(ToDoListContext);
    const [textInput, setTextInput] = useState("");
    const [message, setMessage] = useState("");

    const handleOnSubmit = (e) => {
        e.preventDefault();
        const alertComponent = () => {
            return(
                <div className="pb-1">
                <p className="text-danger">*You must write a valid to do*.{' '}
                <strong>No empty tasks</strong>. Try Again.
                </p>
                </div>
            )
        }
        if(textInput[0] === " ") {
            setMessage(alertComponent);
        } else {
            setMessage("");
            createNewTask(textInput)
        }
    }

    const handleChangeInput = (e) => {
        setTextInput(e.target.value);
    }

    return (
    <div className="main__add mb-4">
        <Accordion defaultActiveKey="0">
            <Card>
                <Card.Header className="d-flex">
                    <Card.Body className="text-start text-light fw-bold">Add a new To Do</Card.Body>
                    <CustomToggle eventKey="1"></CustomToggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                    <Form className="px-3" style={{backgroundColor: "white"}} onSubmit={handleOnSubmit} >
                    <Row className="align-items-center">
                        <Col className="my-3">
                            <Form.Label htmlFor="inlineFormInputName" visuallyHidden>
                                New to do
                            </Form.Label>
                            <Form.Control id="inlineFormInputName" placeholder="Example: Buy Milk" onChange={handleChangeInput} required />
                            </Col>
                            <Col xs="auto" className="my-3 pe-2">
                            <Button type="submit"><FontAwesomeIcon icon={faPlus} /></Button>
                        </Col>
                    </Row>
                    {message}
                    </Form>
                </Accordion.Collapse>
            </Card>
        </Accordion>
    </div>
    );
}

export default AddToDo;