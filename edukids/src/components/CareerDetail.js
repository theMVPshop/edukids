import React from 'react';
import { Button, Card, Col, Container, ListGroup, Row, Tabs, Tab } from 'react-bootstrap';
import "../App.css"





function CareerDetail() {
  
  const mystyle = {
    color: "white",
    backgroundColor: "Orange",
    padding: "10px",
    fontFamily: "Arial"
  };

  const greycard = {
    backgroundColor: "Grey"
  }

  const bluetext = {
    color: "darkblue"
  }


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
              {/* <Card style={{color: "white", backgroundColor: "orange", padding: "10px 5px"}}>
                  <h4>How to Apply?</h4></Card> */}

<Card style={mystyle}>How to Apply</Card>
                <ListGroup>
                  <ListGroup.Item > Lorem Ipsum</ListGroup.Item>
                  <ListGroup.Item>Lorem Ipsum</ListGroup.Item>
                  <ListGroup.Item>Lorem Ipsum</ListGroup.Item>
                  <ListGroup.Item>Lorem Ipsum</ListGroup.Item>
                  <ListGroup.Item>Lorem Ipsum</ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Card>
          </Row>
          <Row>
            <Card >
              <Card.Body style={greycard}>
                <Card style={mystyle}>Frequently Asked Questions</Card>
                <ListGroup> 
                  <ListGroup.Item style={bluetext}>Lorem Ipsum (dropdown)</ListGroup.Item>
                  <ListGroup.Item style={bluetext}>Lorem Ipsum (dropdown)</ListGroup.Item>
                  <ListGroup.Item style={bluetext}>Lorem Ipsum (dropdown)</ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Card>
          </Row>
          <Row>
            <Card>
              <Card.Body style={greycard}>
                <Card.Img></Card.Img>
                <Card.Title style={bluetext}>Send us your C.V.</Card.Title>
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
              <Card.Body >
                <Row style={mystyle}>
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