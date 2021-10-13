import React, { Component } from 'react'
import { Button, Card, Container, Col, ListGroup, Row, Form } from 'react-bootstrap';
import { FaBook, FaBuilding, FaRegClock, FaPhone, FaCheckCircle, FaLightbulb, FaRegLightbulb, FaHamburger, FaSchool } from 'react-icons/fa'
import { BsGear } from 'react-icons/bs'
import Image1 from "../img/painting-together-P9VHLJH.jpg"
import Image2 from '../img/emotion-emoticons-used-by-a-psychologist-during-a--D2BFM6T.jpg'

class Home extends Component {

render() {
    return (
        <Container>
            <Container className="Home-Head-Container">
                <Row>
                    <h1 className="Home-Head-H1"> Let the Children Change the World Today!</h1>
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
            <Row style={{justifyContent: "center", marginBottom: "100px"}}>
                
                    <Card className="Home-Cards Home-Cards-a">
                        <Card.Body>
                            <FaLightbulb className="Home-Card-Icon"/>
                            <Card.Title style={{marginBottom: "20px"}}>Creative Games</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                
                
                    <Card className="Home-Cards Home-Cards-b">
                        <Card.Body>
                            <FaRegLightbulb className="Home-Card-Icon"/>
                            <Card.Title style={{marginBottom: "20px"}}>Creative Learning</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                
                
                    <Card className="Home-Cards Home-Cards-c">
                        <Card.Body>
                            <BsGear className="Home-Card-Icon"/>
                            <Card.Title style={{marginBottom: "20px"}}>Creative Activities</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                

            </Row>
            <Row>
                <Col>
                    <Card className="Home-Image-Card">
                        <Card.Body>
                            <Card.Img src={Image1} className="Home-Image Home-Image-a"></Card.Img>
                            <Card.Img src={Image2} className="Home-Image Home-Image-b"></Card.Img>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="Home-Card">
                        <Card.Body>
                            <Card.Title className="Home-Title" style={{width: "60%"}}>
                            Friendly School having proud of their Students
                            </Card.Title>
                            <Card.Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet porttitor eget dolor morbi non. At imperdiet dui accumsan sit amet nulla facilisi.
                            </Card.Text>
                        </Card.Body>
                    <ListGroup>
                        <ListGroup.Item className="Home-List-Group-Item">
                            <span style={{ margin: "10px", color: "#fe5d37" }}><FaCheckCircle /></span>Supporting child's Personality
                        </ListGroup.Item >
                        <ListGroup.Item className="Home-List-Group-Item">
                            <span style={{ margin: "10px", color: "#fe5d37" }}><FaCheckCircle /></span>Indoor/Outdoor Games for Little Kids
                        </ListGroup.Item>
                        <ListGroup.Item className="Home-List-Group-Item">
                            <span style={{ margin: "10px", color: "#fe5d37" }}><FaCheckCircle /></span>Professional & Qualified Teachers
                        </ListGroup.Item>
                        <ListGroup.Item className="Home-List-Group-Item">
                            <span style={{ margin: "10px", color: "#fe5d37" }}><FaCheckCircle /></span>Best Learning School for Kids
                        </ListGroup.Item>
                    </ListGroup>
                    <Button className="Home-Button-a" variant="primary" type="button">
                        More About Us
                    </Button>
                    </Card>

                </Col>
            </Row>

            <Container>
                <Row>
                    <h4 style={{textAlign: "center"}}>School Facilities We Offer</h4>
                </Row>
                <Row>
                    <Col>
                        <Card className="Home-Facilities-Card">
                            <Card.Body>
                                <Row>
                                    <Col xs={3}>
                                        <div className="Home-Facilities-Icon-Wrapper">
                                            <FaHamburger className="Home-Facilities-Card-Icon"/>
                                        </div>
                                    </Col>
                                    <Col>
                                        <Card.Title>Meals Provided</Card.Title>
                                        <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                        <Card className="Career-card-c">
                            <Card.Body>
                            <Row>
                                <Col xs={3} className="Career-icon-background">
                                    <FaSchool className="Career-icons"/>
                                </Col>
                                <Col>
                                <Card.Title className="Career-card-title-c">Best Environment</Card.Title>
                                <Card.Text className="Career-card-text">orem ipsum dolor sit amet, consectetur adipiscing elit.</Card.Text>
                                </Col>
                            </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col></Col>
                    <Col></Col>
                </Row>
            </Container>
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

            <Container>
                <Row>
                    <h1>Creative Classes</h1>
                </Row>
                <Row className="Classes-Row-1">
                    <Col className="Classes-Col">
                        <Card className="Classes-Card" style={{ backgroundColor: "rgb(254,93,55)" }} >
                        <Card.Img className="Classes-Card-Img"
                            variant="top" src="https://images.unsplash.com/photo-1505672678657-cc7037095e60?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8" />
                        <Card.Body className="Classes-Card-Body">
                            <Card.Title>Physical Class</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of the card's content.
                            </Card.Text>
                            <Row >
                            <Col className="Classes-Card-Col">
                                <Card.Text>
                                Age 2-5 Years
                            </Card.Text>
                            </Col>
                            <Col className="Classes-Card-Col">
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

                    <Col className="Classes-Col">
                        <Card className="Classes-Card" style={{ backgroundColor: "rgb(234,170,20)" }}>
                        <Card.Img className="Classes-Card-Img" variant="top" src="https://images.unsplash.com/photo-1505672678657-cc7037095e60?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8" />
                        <Card.Body className="Classes-Card-Body">
                            <Card.Title>Creative Class</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of the card's content.
                            </Card.Text>
                            <Row>
                            <Col className="Classes-Card-Col">
                                <Card.Text>
                                Age
                                2-5 Years
                            </Card.Text>
                            </Col>
                            <Col className="Classes-Card-Col">
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

                    <Col className="Classes-Col">
                        <Card className="Classes-Card" style={{ backgroundColor: "rgb(4,185,146)" }}>
                        <Card.Img className="Classes-Card-Img" variant="top" src="https://images.unsplash.com/photo-1505672678657-cc7037095e60?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8" />
                        <Card.Body className="Classes-Card-Body">
                            <Card.Title>Learning Class</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of the card's content.
                            </Card.Text>
                            <Row>
                            <Col className="Classes-Card-Col">
                                <Card.Text>
                                Age
                                2-5 Years
                            </Card.Text>
                            </Col>
                            <Col className="Classes-Card-Col">
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
                <Button>Discover More</Button>
            </Container>
            <Container>
                <Row>
                    <Col>
                        <Card>
                            <Card.Body>
                            <Card.Title>Get Online Class For Free</Card.Title>
                            <Card.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Card.Text>
                            <Card.Footer>
                                <Card.Img></Card.Img>
                                <Card.Img></Card.Img>
                                <Card.Img></Card.Img>
                            </Card.Footer>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Form className="FAQ-form">
                            <Form.Group>
                            <Form.Label className="FAQ-form-label">Register Now</Form.Label>
                            <Form.Label>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</Form.Label>
                            <Form.Control type="text" placeholder="Your Name" className="FAQ-form-control"/>
                            <Form.Control type="email" placeholder="Your Email" className="FAQ-form-control"/>
                            <Form.Control rows={3} type="textarea" style={{height: "170px"}} placeholder="Enter Your Message" className="FAQ-form-control"/>
                            <Button type="submit" className="FAQ-form-button">Submit Now</Button>
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
            </Container>
            <Container>
                <h1>Event Gallery</h1>
                <p>Insert event images here</p>
            </Container>
            <Container>
                <Row className="About-Green-Row">
                    <Col>
                        <FaBook className="About-icons"/>
                        <Row className="About-Green-Icon-Row">         
                        <Row className="justify-content-md-center">Class Sessions</Row>
                        <Row className="justify-content-md-center">Sunday - Monday</Row>
                        <Row className="justify-content-md-center">8:00 am - 12:30 pm</Row>
                        </Row>
                    </Col>
                    <Col>
                    
                        <FaBuilding className="About-icons"/>
                        <Row className="About-Green-Icon-Row">    
                        <Row className="justify-content-md-center">Location Address</Row>
                        <Row className="justify-content-md-center">145 While Kateway</Row>
                        <Row className="justify-content-md-center">CA 25615, San Francisco</Row>
                        </Row>
                    </Col>
                    <Col>
                        <FaRegClock className="About-icons"/>
                        <Row className="About-Green-Icon-Row"> 
                        <Row className="justify-content-md-center">Our Office Hour</Row>
                        <Row className="justify-content-md-center">Sunady - Monday</Row>
                        <Row className="justify-content-md-center">7:00 am - 5:30pm</Row>
                        </Row>
                    </Col>
                    <Col>
                        <FaPhone className="About-icons"/>
                        <Row className="About-Green-Icon-Row"> 
                        <Row className="justify-content-md-center">Phone & Email</Row>
                        <Row className="justify-content-md-center">(+22)-658-258 / +259-55-9825</Row> 
                        </Row>
                    </Col>
                </Row>
            </Container>
        </Container>

        )
    }
}

export default Home;