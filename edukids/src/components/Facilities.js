import React from 'react'
import {Container, Row, Col, Card, Button, Form, ListGroup } from 'react-bootstrap';

export default function Facilities() {
    return (
        <div>

<Container>
  <Row>
{/* *** list column ***       */}
    <Col>
    <ListGroup>
  <ListGroup.Item>Meals Provided</ListGroup.Item>
  <ListGroup.Item>Tranportation</ListGroup.Item>
  <ListGroup.Item>Full Day Session</ListGroup.Item>
  <ListGroup.Item>Extra Activites</ListGroup.Item>
  
</ListGroup>
    </Col>
{/* *** list column ***     */}
    <Col>
    <ListGroup>
  <ListGroup.Item>Languages Lesson</ListGroup.Item>
  <ListGroup.Item>Qualified Teachers</ListGroup.Item>
  <ListGroup.Item>Special Education</ListGroup.Item>
  <ListGroup.Item>Health Care</ListGroup.Item>
  
</ListGroup>
    </Col>

{/* *** card column *** */}
    <Col>
    <Card style={{ width: '18rem', color: 'white', backgroundColor: 'orangeRed', borderRadius: '8%', padding: '18px 4px'}}>
  <Card.Body>
    <Card.Title><b>Register Now</b></Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Form>

    <Form.Group className="mb-3">
    <Form.Control type="text" placeholder="Name" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Control type="email" placeholder="Email" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Control as="textarea" rows={3}  placeholder="Message"/>
  </Form.Group>
 
  <Button variant="info" type="submit">
    Submit Now
  </Button>
</Form>
  </Card.Body>
</Card>
    
    </Col>
  </Row>
</Container>
            
        </div>
    )
}
