import React from 'react';
import { Card, Row, Col, Container, Form, Button } from 'react-bootstrap';





function Classes(props) {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="https://images.unsplash.com/photo-1505672678657-cc7037095e60?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8" />
              <Card.Body className="card-body">
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </Card.Text>
                <Row>
                  <Col>
                    <Card.Text>
                      Age 2-5 Years
                </Card.Text>
                  </Col>
                  <Col>
                    <Card.Text>
                      Size 18 Seats
                </Card.Text>
                  </Col>
                  <Col>
                    <Card.Text>
                      Price $22/m
                </Card.Text>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="https://images.unsplash.com/photo-1505672678657-cc7037095e60?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </Card.Text>
                <Row>
                  <Col>
                    <Card.Text>
                      Age
                      2-5 Years
                </Card.Text>
                  </Col>
                  <Col>
                    <Card.Text>
                      Size
                      18 Seats
                </Card.Text>
                  </Col>
                  <Col>
                    <Card.Text>
                      Price
                      $22/m
                </Card.Text>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="https://images.unsplash.com/photo-1505672678657-cc7037095e60?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </Card.Text>
                <Row>
                  <Col>
                    <Card.Text>
                      Age
                      2-5 Years
                </Card.Text>
                  </Col>
                  <Col>
                    <Card.Text>
                      Size
                      18 Seats
                </Card.Text>
                  </Col>
                  <Col>
                    <Card.Text>
                      Price
                      $22/m
                </Card.Text>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col>
            <Card.Body>
              <Card.Title>Get Online Class For Free</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet porttitor eget dolor morbi non. At imperdiet dui accumsan sit amet nulla facilisi.
                </Card.Text>
            </Card.Body>
          </Col>
          <Col>
            <Form>
              <h4> Register Now</h4>
              <h8>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h8>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Control type="name" placeholder="Name" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicMsg" >
                <Form.Control type="msg" placeholder="Message"/>
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit Now
              </Button>
            </Form>
          </Col>
        </Row>


      </Container>



    </div>


  )
}

export default Classes;