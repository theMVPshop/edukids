import React from 'react';
import { Badge, Card, Col, Container, Form, Row } from 'react-bootstrap';
import { BsMap, BsPhone, BsFillEnvelopeOpenFill } from 'react-icons/bs'

function Classes(props) {
  return(
    <Container className="Contact-mainContainer">
      <Row className="justify-content-md-center">
        <Col md='auto'>
          <h1>Contact Us</h1>
          <p>image goes here!</p>
        </Col>
      </Row>
      <Row >
        <Col>
          <Row>
            <Card className="Contact-contactHeader">
              <span>Contact Us for Further Information</span>
              <span>lorem ipsum blah blah blah</span>
            </Card>
          </Row>
          <Row>
          <Card className="Contact-locationBadge">
                <Card.Body>
                  <Row>
                    <Col xs={2}>
                      <BsMap />
                    </Col>
                    <Col>
                      <Card.Title>Location Address</Card.Title>
                      <Card.Text>145 Kateway, CA 25615, San Francisco</Card.Text>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
          </Row>
          <Row>
          <Card className="Contact-addressBadge">
                <Card.Body>
                  <Row>
                    <Col xs={2}>
                      <BsFillEnvelopeOpenFill />
                    </Col>
                    <Col>
                      <Card.Title>Email Address</Card.Title>
                      <Card.Text>yourcompany@domain.com</Card.Text>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
          </Row>
          <Row>
              <Card className="Contact-phoneBadge">
                <Card.Body>
                  <Row>
                    <Col xs={2}>
                      <BsPhone />
                    </Col>
                    <Col>
                      <Card.Title>Phone Number</Card.Title>
                      <Card.Text>Phone: +22-656-258 // Mob: +259-55-9825</Card.Text>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
          </Row>
        </Col>
        <Col>
          <Card className="Contact-formCard d-grid gap-3">
            <Form className="p-2 bg-light">
            <Form.Group classname="mb-3 p-2 bg-light border" controlId="exampleForm.ControlTextarea1">
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