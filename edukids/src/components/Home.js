import React, { Component } from 'react'
import { Button, Card, Container, Col, ListGroup, Row } from 'react-bootstrap';
import { FaFacebook } from 'react-icons/fa';

class Home extends Component {

    render() {
        return (
            <div>
                <Container>
                    <Container className="Classes-Head-Container">
                        <Row>
                            <h1 className="Head-H1"> Let the Children Change the World Today!</h1>
                        </Row>
                        <Row>
                            <Col>
                                <Button variant="primary" type="button">
                                    Learn More
                                </Button>
                                <Button variant="primary" type="button">
                                    Contact Us
                                </Button>
                            </Col>
                        </Row>
                    </Container>
                    <Row>
                        <h3>Discover School Activities</h3>
                    </Row>
                    <Row>
                        <Col className="Home-Card-Col">
                            <Card style={{ backgroundColor: "rgb(4,185,146)" }}>
                                <Card.Body>
                                    <Card.Title>Creative Games</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of the card's content.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className="Home-Card-Col">
                            <Card style={{ backgroundColor: "rgb(254,93,55)" }}>
                                <Card.Body>
                                    <Card.Title>Creative Learning</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of the card's content.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className="Home-Card-Col">
                            <Card style={{ backgroundColor: "rgb(234,170,20)" }}>
                                <Card.Body>
                                    <Card.Title>Creative Activities</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of the card's content.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                    </Row>
                    <Row>
                        <Col>
                            **Two Overlapping Image Goes Here...Below**
                        </Col>
                        <Col>
                            <h4>Friendly School having proud of their Students</h4>

                            <h8>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet porttitor eget dolor morbi non. At imperdiet dui accumsan sit amet nulla facilisi.</h8>

                            <ListGroup>
                                <ListGroup.Item className="Classes-List-Group-Item">
                                    <span>—</span>Lorem Ipsum
                                </ListGroup.Item >
                                <ListGroup.Item className="Classes-List-Group-Item">
                                    <span>—</span>Lorem Ipsum
                                </ListGroup.Item>
                                <ListGroup.Item className="Classes-List-Group-Item">
                                    <span>—</span>Lorem Ipsum
                                </ListGroup.Item>
                                <ListGroup.Item className="Classes-List-Group-Item">
                                    <span>—</span>Lorem Ipsum
                                </ListGroup.Item>
                            </ListGroup>
                            <Button variant="primary" type="button">
                                More About Us
                            </Button>
                        </Col>
                    </Row>

                    <Row>
                        <h4>School Facilities We Offer</h4>
                    </Row>
{/**Don't know how to build this out...will keep working on it */}
                    <Col>
                        <Row>
                            <Col>
                                <FaFacebook />
                            </Col>
                            <Col>
                                <h7>Meals Provided</h7>
                                <div />
                                <h9>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </h9>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <FaFacebook />
                            </Col>
                            <Col>
                                <h7>Meals Provided</h7>
                                <div />
                                <h9>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </h9>
                            </Col>
                        </Row>


                    </Col>
                    
                    
                </Container>
            </div>

        )
    }
}

export default Home;