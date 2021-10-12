import React, { Component } from 'react'
import { Button, Card, Container, Col, ListGroup, Row } from 'react-bootstrap';
import { FaFacebook, FaCheckCircle } from 'react-icons/fa'
class Home extends Component {

    render() {
        return (
            <div>
                <Container>
                    <Container className="Home-Head-Container">
                        <Row>
                            <h1 className="Head-H1"> Let the Children Change the World Today!</h1>
                        </Row>
                        <Row>
                            <Col>
                                <Button className="Home-Button-a" variant="primary" type="button">
                                    Learn More
                       </Button>

                                <Button className="Home-Button-b" variant="primary" type="button">
                                    Contact Us
                       </Button>
                            </Col>
                        </Row>
                    </Container>
                    <Row>
                        <Card className="Home-Title-Body-a">
                            <Card.Body>
                                <Card.Title className="Home-Title">Discover School Activities</Card.Title>
                            </Card.Body>
                        </Card>
                    </Row>
                    <Row>
                        <Col className="Home-Card-Col">
                            <Card className="Home-Cards-a">
                                <Card.Body>
                                    <Card.Title>Creative Games</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of the card's content.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className="Home-Card-Col">
                            <Card className="Home-Cards-b">
                                <Card.Body>
                                    <Card.Title>Creative Learning</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of the card's content.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className="Home-Card-Col">
                            <Card className="Home-Cards-c">
                                <Card.Body>
                                    <Card.Title>
                                        Creative Activities
                                        </Card.Title>
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
                            <Card className="Home-Card">
                                <Card.Body>
                                    <Card.Title className="Home-Title">
                                    Friendly School having proud of their Students
                                    </Card.Title>
                                    <Card.Text>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet porttitor eget dolor morbi non. At imperdiet dui accumsan sit amet nulla facilisi.
                                    </Card.Text>
                                </Card.Body>
                            <ListGroup>
                                <ListGroup.Item className="Home-List-Group-Item">
                                    <span style={{ margin: "10px", color: "#fe5d37" }}><FaCheckCircle /></span>Lorem Ipsum
                                </ListGroup.Item >
                                <ListGroup.Item className="Home-List-Group-Item">
                                    <span style={{ margin: "10px", color: "#fe5d37" }}><FaCheckCircle /></span>Lorem Ipsum
                                </ListGroup.Item>
                                <ListGroup.Item className="Home-List-Group-Item">
                                    <span style={{ margin: "10px", color: "#fe5d37" }}><FaCheckCircle /></span>Lorem Ipsum
                                </ListGroup.Item>
                                <ListGroup.Item className="Home-List-Group-Item">
                                    <span style={{ margin: "10px", color: "#fe5d37" }}><FaCheckCircle /></span>Lorem Ipsum
                             </ListGroup.Item>
                            </ListGroup>
                            <Button className="Home-Button-a" variant="primary" type="button">
                                More About Us
                            </Button>
                            </Card>

                        </Col>
                    </Row>

                    <Row>
                        <h4>School Facilities We Offer</h4>
                    </Row>
                    {/**Don't know how to build this out...will keep working on it */}

                    <Container className="Home-Bottom-Container">
                        <Row>
                            <h1 className="Head-H1">Choose Us For Your Child Better Future</h1>
                            <h8>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h8>
                        </Row>
                        <Row>
                            <Col>
                                <Button variant="primary" type="button">
                                    Join Us Now
                       </Button>
                            </Col>
                        </Row>
                    </Container>


                </Container>
            </div>

        )
    }
}

export default Home;