import React from 'react';
import { Button, Card, Col, Container, ListGroup, Row, Tabs, Tab, Accordion } from 'react-bootstrap';

function CareerDetail() {
  
  return(
    <Container>
      <Row className="justify-content-md-center">
        <Col md='auto'>
          <h1>Career Detail</h1>
          <p>image goes here!</p>
        </Col>
      </Row>
      <Row>
        <Col xs={5}>
          <Row>
            <Card>
              <Card.Body>
                <Card.Header className="CareerDetail-card-header">How to Apply?</Card.Header>
                <ListGroup>
                  <ListGroup.Item><span className="CareerDetail-span">—</span>Lorem Ipsum</ListGroup.Item>
                  <ListGroup.Item><span className="CareerDetail-span">—</span>Lorem Ipsum</ListGroup.Item>
                  <ListGroup.Item><span className="CareerDetail-span">—</span>Lorem Ipsum</ListGroup.Item>
                  <ListGroup.Item><span className="CareerDetail-span">—</span>Lorem Ipsum</ListGroup.Item>
                  <ListGroup.Item><span className="CareerDetail-span">—</span>Lorem Ipsum</ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Card>
          </Row>
          <Row>
            <Card className="CareerDetail-beige-background-card">
              <Card.Body>
                <Card.Header className="CareerDetail-card-header">Frequently Asked Questions</Card.Header>
                <Accordion>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>When the announcements?</Accordion.Header>
                    <Accordion.Body>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                      est laborum.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>Can I apply after rejection?</Accordion.Header>
                    <Accordion.Body>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                      est laborum.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2">
                    <Accordion.Header>Where to interview?</Accordion.Header>
                    <Accordion.Body>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                      est laborum.
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Card.Body>
            </Card>
          </Row>
          <Row>
            <Card>
              <Card.Body>
                <Card.Img></Card.Img>
                <Card.Title>Send us your C.V.</Card.Title>
                <Card.Text>Do you want to work with us? Please, send your CV to domain123@gmail.com</Card.Text>
                <Card.Text>-- OR --</Card.Text>
                <Button>Contact Us</Button>
              </Card.Body>
            </Card>
          </Row>
        </Col>
        <Col>
          <Row>
            <Card>
              <Card.Body>
                <Row>
                  <Col>
                    <Card.Text>
                      <Row>Post:</Row>
                      <Row>Teacher</Row>
                    </Card.Text>
                  </Col>
                  <Col>
                    <Card.Text>
                      <Row>Time:</Row>
                      <Row>Full Time</Row>
                    </Card.Text>
                  </Col>
                  <Col>
                    <Card.Text>
                      <Row>Salary:</Row>
                      <Row>Negotiable</Row>
                    </Card.Text>
                  </Col>
                  <Col>
                    <Card.Text>
                      <Row>No. of Vacancy:</Row>
                      <Row>8</Row>
                    </Card.Text>
                  </Col>
                </Row>
                <Card.Img src="https://images.unsplash.com/photo-1587323655395-b1c77a12c89a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx"></Card.Img>
              </Card.Body>
            </Card>
          </Row>
          <Row>
            <Tabs>
              <Tab eventKey="description" title="Job Description">
                Description goes here
              </Tab>
              <Tab eventKey="experience" title="Experience & Overview">
                Experience goes here
              </Tab>
              <Tab eventKey="requirement" title="Requirement">
                Requirements go here
              </Tab>
            </Tabs>
          </Row>
        </Col>
      </Row>
    </Container>
  )

}

export default CareerDetail;