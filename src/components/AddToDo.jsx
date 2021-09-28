
import { Accordion, Card, useAccordionButton, Button, Row, Col, Form } from "react-bootstrap";

const CustomToggle = ({ children, eventKey }) => {
    const decoratedOnClick = useAccordionButton(eventKey);
  
    return (
    <Button style={{backgroundColor: "#ad1eeb", border: "none"}} onClick={decoratedOnClick}>{children}</Button>
    );
  }
  
const AddToDo = () => {
    return (
    <div className="main__add mb-4">
        <Accordion defaultActiveKey="0">
            <Card>
                <Card.Header className="d-flex">
                <Card.Body className="text-start text-light fw-bold">Add a new To Do</Card.Body>
                    <CustomToggle eventKey="1">Add +</CustomToggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                    <Form className="px-3" style={{backgroundColor: "white"}}>
                    <Row className="align-items-center">
                        <Col className="my-3">
                            <Form.Label htmlFor="inlineFormInputName" visuallyHidden>
                                New to do
                            </Form.Label>
                            <Form.Control id="inlineFormInputName" placeholder="Example: Buy Milk" />
                            </Col>
                            <Col xs="auto" className="my-3 pe-2">
                            <Button type="submit">+</Button>
                        </Col>
                    </Row>
                    </Form>
                </Accordion.Collapse>
            </Card>
        </Accordion>
    </div>
    );
}

export default AddToDo;