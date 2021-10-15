import React, { Component } from 'react'
import { Button, Card, Container, Col, ListGroup, Row, Form } from 'react-bootstrap';
import { FaBook, FaBuilding, FaRegClock, FaPhone, FaCheckCircle, FaLightbulb, FaRegLightbulb, FaHamburger, FaSchool, FaBus, FaRegSun, FaTrophy, FaCircle } from 'react-icons/fa'
import { BsGear } from 'react-icons/bs'
import GalImages from './GalImages'
import Image1 from "../img/painting-together-P9VHLJH.jpg"
import Image2 from '../img/emotion-emoticons-used-by-a-psychologist-during-a--D2BFM6T.jpg'
import Image3 from '../img/funny-kids.png'

import Image13 from '../img/adorable-kids-playing-with-constructor-on-floor-in-ZP6VC78.jpg';
import Image14 from '../img/boys-and-girls-dancing-PZNK4D9.jpg';
import Image15 from '../img/cheerful-women-in-printing-office-JQ5K4XE.jpg';
import Image4 from '../img/cute-girl-playing-with-paint-in-art-class-85QTUD9.jpg';
import Image5 from '../img/education-teachers-university-and-schools-concept--JA74V7F.jpg';
import Image6 from '../img/emotion-emoticons-used-by-a-psychologist-during-a--D2BFM6T.jpg';
import Image7 from '../img/happy-educator-hugging-adorable-kids-in-kindergart-CSSFQDV.jpg';
import Image8 from '../img/happy-kids-are-painting-at-home-FSC2Q9C.jpg';
import Image9 from '../img/kindergarten-age-girl-learning-about-the-planets-a-EKX3YDA.jpg';
import Image10 from '../img/mother-or-nursery-teacher-teaches-her-children-to--QK27JT7.jpg';
import Image11 from '../img/painting-together-P9VHLJH.jpg';
import Image12 from '../img/sitting-on-a-carpet-P8BAWTX.jpg';
import DotsWithLines from '../img/dots-with-lines.jpg'


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
                    <Card.Body style={{marginBottom: '-20px'}}>
                        <Card.Title className="Home-Title">Discover School Activities</Card.Title>
                    </Card.Body>
                </Card>
            </Row>
            <Row style={{justifyContent: "center"}}>
                <img src={DotsWithLines} style={{width: "300px"}}></img>
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
                    <h4 className="Home-Title" style={{marginTop: "100px", marginBottom: "20px"}}>School Facilities We Offer</h4>
                </Row>
                <Row className="About-Head-Row" style={{marginBottom: "20px"}}><Col xs lg="5"></Col><Col><hr /></Col><Col xs lg="1" className="About-Head-Col"><FaCircle /><FaCircle /><FaCircle /></Col><Col ><hr /></Col><Col Col xs lg="5"></Col></Row>
                <Row>
                    <Col>
                        <Card className="Home-Facilities-Card">
                            <Card.Body>
                                <Row>
                                    <Col xs={3} className="Home-Facilities-Icon-Wrapper" style={{backgroundColor: "var(--green)"}}>
                                        <FaHamburger className="Home-Facilities-Card-Icon"/>
                                    </Col>
                                    <Col>
                                        <Card.Title className="Home-Facilities-Card-Title" style={{color: "var(--green)", fontWeight: "700"}}>Meals Provided</Card.Title>
                                        <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                        <Card className="Home-Facilities-Card">
                            <Card.Body>
                                <Row>
                                    <Col xs={3} className="Home-Facilities-Icon-Wrapper" style={{backgroundColor: "var(--orange)"}}>
                                        <FaBus className="Home-Facilities-Card-Icon"/>
                                    </Col>
                                    <Col>
                                        <Card.Title className="Home-Facilities-Card-Title" style={{color: "var(--orange)", fontWeight: "700"}}>Transportation</Card.Title>
                                        <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                        <Card className="Home-Facilities-Card">
                            <Card.Body>
                                <Row>
                                    <Col xs={3} className="Home-Facilities-Icon-Wrapper" style={{backgroundColor: "var(--gold)"}}>
                                        <FaRegSun className="Home-Facilities-Card-Icon"/>
                                    </Col>
                                    <Col>
                                        <Card.Title className="Home-Facilities-Card-Title" style={{color: "var(--gold)", fontWeight: "700"}}>Full Day Session</Card.Title>
                                        <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col style={{display: "flex", justifyContent: "center"}}>
                        <img src={Image3} style={{height: "400px", margin: "auto", borderRadius: "15%"}}></img>
                    </Col>
                    <Col>
                        <Card className="Home-Facilities-Card">
                            <Card.Body>
                                <Row>
                                    <Col style={{textAlign: "right"}}>
                                        <Card.Title className="Home-Facilities-Card-Title" style={{color: "var(--orange)", fontWeight: "700"}}>Language Lesson</Card.Title>
                                        <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
                                    </Col>
                                    <Col xs={3} className="Home-Facilities-Icon-Wrapper" style={{backgroundColor: "var(--orange)"}}>
                                        <FaBook className="Home-Facilities-Card-Icon"/>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                        <Card className="Home-Facilities-Card">
                            <Card.Body>
                                <Row>
                                    <Col style={{textAlign: "right"}}>
                                        <Card.Title className="Home-Facilities-Card-Title" style={{color: "var(--gold)", fontWeight: "700"}}>Qualified Teachers</Card.Title>
                                        <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
                                    </Col>
                                    <Col xs={3} className="Home-Facilities-Icon-Wrapper" style={{backgroundColor: "var(--gold)"}}>
                                        <FaTrophy className="Home-Facilities-Card-Icon"/>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                        <Card className="Home-Facilities-Card">
                            <Card.Body>
                                <Row>
                                    <Col style={{textAlign: "right"}}>
                                        <Card.Title className="Home-Facilities-Card-Title" style={{color: "var(--green)", fontWeight: "700"}}>Special Education</Card.Title>
                                        <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
                                    </Col>
                                    <Col xs={3} className="Home-Facilities-Icon-Wrapper" style={{backgroundColor: "var(--green)"}}>
                                        <FaLightbulb className="Home-Facilities-Card-Icon"/>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            {/**Don't know how to build this out...will keep working on it */}

            <Container className="Home-Bottom-Container">
                <Row>
                    <h1 className="Head-H1" style={{marginTop: "100px", marginBottom: "40px"}}>Choose Us For Your Child Better Future</h1>
                    <h8 style={{width: "60%", margin: "auto", marginBottom: "40px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h8>
                </Row>
                <Row>
                    <Col>
                        <Button variant="primary" type="button" className="Home-Button-a" style={{marginBottom: "70px"}}>
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
                        <Card className="Home-Card-Classes-Info">
                            <Card.Body>
                            <Card.Title className="Home-Title" style={{marginBottom: "10px"}}>Get Online Class For Free</Card.Title>
                            <Row style={{justifyContent: "center"}}>
                                <img src={DotsWithLines} style={{width: "200px", marginBottom: "10px"}}></img>
                            </Row>
                            <Card.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Card.Text>
                            <Card.Footer style={{backgroundColor: "white", borderTop: "none", marginTop: "30px"}}>
                                <Row>
                                    <Col>
                                        <div className="Home-Classes-Info-Wrapper" style={{backgroundColor: "var(--orange)"}}>
                                        <Card.Text className="Home-Classes-Info-Big-Text">58+</Card.Text>
                                        <Card.Text>Teachers</Card.Text>
                                        </div>
                                    </Col>
                                    <Col>
                                        <div className="Home-Classes-Info-Wrapper" style={{backgroundColor: "var(--green)"}}>
                                        <Card.Text className="Home-Classes-Info-Big-Text">4K+</Card.Text>
                                        <Card.Text>Students</Card.Text>    
                                        </div>
                                    </Col>
                                    <Col>
                                        <div className="Home-Classes-Info-Wrapper" style={{backgroundColor: "var(--gold)"}}>
                                        <Card.Text className="Home-Classes-Info-Big-Text">22+</Card.Text>
                                        <Card.Text>Classes</Card.Text>
                                        </div>
                                    </Col>
                                </Row>
                            </Card.Footer>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Form className="FAQ-form" style={{borderRadius: "5%"}}>
                            <Form.Group>
                            <Form.Label className="FAQ-form-label" style={{marginBottom: "10px"}}>Register Now</Form.Label>
                            <Form.Label style={{width: "80%", color: "white", marginBottom: "20px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod adipiscing elit.</Form.Label>
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
            {/* Gallery */}
            
            <Row>
                    
                    <Col className="lg-4 md-12 mb-4 mb-lg-0">
                        <img
                        src={Image13}
                        className="w-100 shadow-1-strong rounded mb-4"
                        alt="indoor"
                        />
    
                        <img
                        src={Image14}
                        className="w-100 shadow-1-strong rounded mb-4"
                        alt="outdoor"
                        />
    
                        <img
                        src={Image9}
                        className="w-100 shadow-1-strong rounded mb-4"
                        alt="outdoor"
                        />
    
                        <img
                        src={Image15}
                        className="w-100 shadow-1-strong rounded mb-4"
                        alt="painting"
                        />
                    </Col>
    
                    <Col className="lg-4 mb-4 mb-lg-0">
                        
    
                        <img
                        src={Image4}
                        className="w-100 shadow-1-strong rounded mb-4"
                        alt="painting"
                        />
    
                        <img
                        src={Image6}
                        className="w-100 shadow-1-strong rounded mb-4"
                        alt="outdoor"
                        />
    
                        <img
                        src={Image10}
                        className="w-100 shadow-1-strong rounded mb-4"
                        alt="indoor"
                        />
    
                        <img
                        src={Image5}
                        className="w-100 shadow-1-strong rounded mb-4"
                        alt="indoor"
                        />
                    </Col>
    
                    <Col className="lg-4 mb-4 mb-lg-0">
                        <img
                        src={Image7}
                        className="w-100 shadow-1-strong rounded mb-4"
                        alt="outdoor"
                        />
    
                        <img
                        src={Image5}
                        className="w-100 shadow-1-strong rounded mb-4"
                        alt="outdoor"
                        />
    
                        <img
                        src={Image8}
                        className="w-100 shadow-1-strong rounded mb-4"
                        alt="indoor"
                        />
                        <img
                        src={Image9}
                        className="w-100 shadow-1-strong rounded mb-4"
                        alt="outdoor"
                        />
                    </Col>
    
                    <Col className="lg-4 mb-4 mb-lg-0">
                        <img
                        src={Image10}
                        className="w-100 shadow-1-strong rounded mb-4"
                        alt="indoor"
                        />
                        <img
                        src={Image11}
                        className="w-100 shadow-1-strong rounded mb-4"
                        alt="outdoor"
                        />
    
                        <img
                        src={Image12}
                        className="w-100 shadow-1-strong rounded mb-4"
                        alt="indoor"
                        />
    
                        <img
                        src={Image15}
                        className="w-100 shadow-1-strong rounded mb-4"
                        alt="painting"
                        />
                    </Col>
    
        
                </Row>

            {/* Gallery */}
               
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
            <Container>
                <Row>
                    <Col>
                        <Card className="Contact-contactHeader mb-3">
                            <Card.Title className="Contact-headerTitle mt-5">Contact Us for Further Information</Card.Title>
                                
                            <Card.Text className="Contact-headerBody mt-3 mb-4">Quam reprehenderit omnis facere! Pretium dis asperiores veritatis, impedit congue, ante commodi, uliam. </Card.Text>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="Contact-formCard w-75 mt-5 mb-4">
                            <Form className="p-2 bg-light">
                                <Form.Group className="mb-3" contro4lId="exampleForm.ControlTextarea1">
                                    <Row>
                                        <Col>
                                            <Form.Control type="text" placeholder="Name" /> 
                                        </Col>
                                        <Col>
                                            <Form.Control type="email" placeholder="Email" />
                                        </Col>
                                    </Row>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea2">
                                    <Form.Control type="text" placeholder="Subject" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea3">
                                    <Form.Control as="textarea" placeholder="Message" rows={3} />
                                </Form.Group>
                                <Button className="Contact-formBtn" variant="secondary" type="submit" bg="Contact-button">Send Message</Button>
                            </Form>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Container>

        )
    }
}

export default Home;