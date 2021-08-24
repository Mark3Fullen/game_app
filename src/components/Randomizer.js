import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import {Container,Row, Col, Card,Button} from 'react-bootstrap'

const Randomizer = ({game, deleteItem}) => {
    
    const handleClick = () => {
    console.log('clicked!')
    }

    function handleDeleteClick() {
        fetch(`http://localhost:9292/games/${game.id}`, {
          method: "DELETE",
        });
        deleteItem(game.id);
      }

    return (
        <Container>
            <Row>
                <Col>
                    <h3>Today we're going to play...</h3>
                    <Button onClick={handleClick}>Tell me already!!!</Button>
                </Col>
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://media.istockphoto.com/vectors/vector-girl-gamer-live-streaming-web-camera-vector-id1156503950?k=6&m=1156503950&s=612x612&w=0&h=FcEYLfqjCMes2fwJhETXIwI4Rt1OeHLHrTL-VNAPT3I=" />
                        <Card.Body>
                        <Card.Title>{game.name}</Card.Title>
                        <Card.Text>
                        This game is about blah blah blah blah blah blah blah blah blah blah 
                        </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Randomizer
