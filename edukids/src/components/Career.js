import React from 'react';
import { Col, Container, Row, Card, Form } from 'react-bootstrap';

function Career(props) {

  return(
    <Container className="">
      <Row className="justify-content-md-center">
        <Col md="auto">
        <h1>Career</h1>
        <p>Image goes here!</p>
        </Col>
      </Row>
      <Row>
        <Card>
          <Card.Body>
            <Card.Title>Let's join with us!</Card.Title>
            <Card.Text>lorem ipsum</Card.Text>
          </Card.Body>
        </Card>
      </Row>
      <Row>
        <Col>
          <Row>
            <Card>
              <Card.Title>Teacher</Card.Title>
              <Card.Text>teacher job description</Card.Text>
            </Card>
          </Row>
          <Row>
            <Card>
              <Card.Title>Assistant</Card.Title>
              <Card.Text>assistant job description</Card.Text>
            </Card>
          </Row>
        </Col>
        <Col>
          <Row>
            <Card>
              <Card.Title>Manager</Card.Title>
              <Card.Text>manager job description</Card.Text>
            </Card>
          </Row>
          <Row>
            <Card>
              <Card.Title>Accountant</Card.Title>
              <Card.Text>accountant job description</Card.Text>
            </Card>
          </Row>
        </Col>
        <Col xs={5}>
          <Form>
            <Form.Group>
              <Form.Label>Join Our Team</Form.Label>
              <Form.Control type="text" placeholder="Your Name" />
              <Form.Control type="email" placeholder="Your Email" />
              <Form.Control type="text" placeholder="Your Position" />
              <Form.Control rows={3} type="textarea" placeholder="Enter Your Message" />
            </Form.Group>
          </Form>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Our Benefits</Card.Title>
              <Card.Text>Our school has been present for over 15 years to provide best quality education for kids.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card body>Lorem ipsum</Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card>
            <Card.Body>
              <Card.Img></Card.Img>
              <Card.Title>Award Winning</Card.Title>
              <Card.Text>Lorem ipsum</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Img></Card.Img>
              <Card.Title>Affordable Fees</Card.Title>
              <Card.Text>Lorem ipsum</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Img></Card.Img>
              <Card.Title>Best Environment</Card.Title>
              <Card.Text>Lorem ipsum</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )

} 

export default Career;