import React from 'react';
import { Badge, Card, Col, Container, Form, Row } from 'react-bootstrap';
import { BsMap, BsPhone, BsFillEnvelopeOpenFill } from 'react-icons/bs'

function Classes(props) {
  return(
    <Container>
      <Row>
        <Col>
          <Row>
            <Card>
              <h1>Contact Us for Further Information</h1>
              <h5>lorem ipsum blah blah blah</h5>
            </Card>
          </Row>
          <Row>
            <Card>
              <BsMap />
              <Badge bg="secondary">Location Address</Badge>
            </Card>
          </Row>
          <Row>
            <Card>
              <BsFillEnvelopeOpenFill />
              <Badge bg="secondary">Email Address</Badge>
            </Card>
          </Row>
          <Row>
            <Card>
              <BsPhone />
              <Badge bg="secondary">Phone Number</Badge>
            </Card>
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