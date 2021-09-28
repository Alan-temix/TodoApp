import { Card } from 'react-bootstrap';

const MainToDoList = () => {
    return(
        <Card>
        <Card.Header className="text-start">All</Card.Header>
        <Card.Body>
            <Card.Title>Special title treatment</Card.Title>
            <Card.Text>
            With supporting text below as a natural lead-in to additional content.
            </Card.Text>
        </Card.Body>
        </Card>
    );
}

export default MainToDoList;