import React from 'react';
import { Badge, Card, Col, Container, Form, Row } from 'react-bootstrap';
import { BsMap, BsPhone, BsFillEnvelopeOpenFill } from 'react-icons/bs'

function Classes(props) {
  return(
    <Container>
      <Row className="justify-content-md-center">
        <Col md='auto'>
          <h1>Contact Us</h1>
          <p>image goes here!</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <Row>
            <Card className="Contact-contactHeader">
              <span>Contact Us for Further Information</span>
              <span>lorem ipsum blah blah blah</span>
            </Card>
          </Row>
          <Row>
              <Badge className="Contact-locationBadge">
                <BsMap />
                <span>Location Address</span>
              </Badge>
          </Row>
          <Row>
              <Badge className="Contact-addressBadge"> 
                <BsFillEnvelopeOpenFill />
                <span>Email Address</span>
              </Badge>            
          </Row>
          <Row>
              <Badge className="Contact-phoneBadge">
                <BsPhone />
                <span>Phone Number</span>
              </Badge>
          </Row>
        </Col>
        <Col>
          <Card>
            <Form>
            <Form.Group classname="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Control type="text" placeholder="Name" />
              </Form.Group>
              <Form.Group classname="mb-3" controlId="exampleForm.ControlInput2">
                <Form.Control type="email" placeholder="Email" />
              </Form.Group>
              <Form.Group classname="mb-3" controlId="exampleForm.ControlTextarea2">
                <Form.Control type="text" placeholder="Subject" />
              </Form.Group>
              <Form.Group classname="mb-3" controlId="exampleForm.ControlTextarea3">
                <Form.Control as="textarea" placeholder="Message" rows={3} />
              </Form.Group>
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  )
} 

export default Classes;