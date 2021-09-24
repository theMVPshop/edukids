import React from 'react';
import { Card, Col, Container, Form, Row } from 'react-bootstrap';

function Classes(props) {
  return(
    <Container>
      <Row>
        <Col>
          <Row>
            <Card></Card>
          </Row>
          <Row>
            <Card></Card>
          </Row>
          <Row>
            <Card></Card>
          </Row>
          <Row>
            <Card></Card>
          </Row>
        </Col>
        <Col>
          <Card>
            <Form>
            <Form.Group classname="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Control as="textarea" placeholder="Name" />
              </Form.Group>
              <Form.Group classname="mb-3" controlId="exampleForm.ControlInput2">
                <Form.Control type="email" placeholder="Email" />
              </Form.Group>
              <Form.Group classname="mb-3" controlId="exampleForm.ControlTextarea2">
                <Form.Control as="textarea" placeholder="Subject" />
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