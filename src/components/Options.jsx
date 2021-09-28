import { Card, Button, ListGroup, ListGroupItem } from "react-bootstrap";

const Options = () => {
    return(
        <div className="options">
            <Card className="options__cover text-light text-start border-0 px-3 mb-4 me-4" style={{ width: '18rem', height: '13rem' }}>
                <Card.Body className="">
                    <Card.Title>To Do App</Card.Title>
                    <Card.Subtitle className="mb-2 fw-bold">List of things to do</Card.Subtitle>
                </Card.Body>
            </Card>
            <Card className="options__buttons d-grid border-0 mb-4 me-4" style={{width: '18rem'}}>
                <Button className="rounded-3" variant="primary">All</Button>
                <Button className="rounded-3" variant="primary">Completed</Button>
                <Button className="rounded-3" variant="primary">Not Completed</Button>
                <Button className="rounded-3" variant="primary">In Process</Button>
                <Button className="rounded-3" variant="danger">Trash</Button>
            </Card>
            <Card className="options__roadmap mb-4 me-4" style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>Roadmap</Card.Title>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem className="border-0 ms-3 d-flex justify-content-between"><li className="ut-blue"><span>All</span></li><span>#2</span></ListGroupItem>
                    <ListGroupItem className="border-0 ms-3 d-flex justify-content-between"><li className="ut-yellow"><span>Completed</span></li><span>#2</span></ListGroupItem>
                    <ListGroupItem className="border-0 ms-3 d-flex justify-content-between"><li className="ut-purple"><span>Incompleted</span></li><span>#2</span></ListGroupItem>
                    <ListGroupItem className="border-0 ms-3 d-flex justify-content-between"><li className="ut-green"><span>In Progress</span></li><span>#2</span></ListGroupItem>
                    <ListGroupItem className="border-0 ms-3 d-flex justify-content-between"><li className="ut-red"><span>Trashed</span></li><span>#2</span></ListGroupItem>
                </ListGroup>
            </Card>
        </div>
    );
}

export default Options;