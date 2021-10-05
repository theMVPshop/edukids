import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import CardHeader from 'react-bootstrap/esm/CardHeader';
import Image1 from '../img/adorable-kids-playing-with-constructor-on-floor-in-ZP6VC78.jpg';
import Image2 from '../img/boys-and-girls-dancing-PZNK4D9.jpg';
import Image3 from '../img/cheerful-women-in-printing-office-JQ5K4XE.jpg';
import Image4 from '../img/cute-girl-playing-with-paint-in-art-class-85QTUD9.jpg';
import Image5 from '../img/education-teachers-university-and-schools-concept--JA74V7F.jpg';
import Image6 from '../img/emotion-emoticons-used-by-a-psychologist-during-a--D2BFM6T.jpg';



const Events = () => {

    return (
        <Container>

            <Row className="justify-content-md-center">
                <Col xs lg="4"></Col>
                <Col md="auto">
                    <Card className="card text-orange border-warning" >
                        <CardHeader>
                            Games & Events
                        </CardHeader>
                    </Card>
                </Col>
                <Col xs lg="4"></Col>
            </Row>


            <Row className="justify-content-md-center">
                <Col xs lg="4"></Col>
                <Col md="auto">
                    <h3>Our Recent Activities</h3>
                </Col>
                <Col xs lg="4"></Col>
            </Row>

            
            <Row className="justify-content-md-center">
                <Col xs lg="4"></Col>
                <Col md="auto">
                    <p>
                    Dave found joy in the daily routine of life. He awoke at the same time, ate the same breakfast and drove the same commute. He worked at a job that never seemed to change and he got home at 6 pm sharp every night. It was who he had been for the last ten years and he had no idea that was all about to change.
                    </p>
                    
                </Col>
                <Col xs lg="4"></Col>
            </Row>
            
            <Row className="justify-content-md-center">
                <Col xs lg="2"></Col>
                <Col md="auto">
                    <p>
                    <a className="btn btn-link nounderline" data-toggle="collapse" href="#" role="button" aria-expanded="false" aria-controls="collapseExample">
                        All
                    </a>
                    <a className="btn btn-link nounderline" data-toggle="collapse" href="#" role="button" aria-expanded="false" aria-controls="collapseExample">
                        Painting
                    </a>
                    <a className="btn btn-link nounderline" data-toggle="collapse" href="#" role="button" aria-expanded="false" aria-controls="collapseExample">
                        Indoor
                    </a>
                    <a className="btn btn-link nounderline" data-toggle="collapse" href="#" role="button" aria-expanded="false" aria-controls="collapseExample">
                        Outdoor
                    </a> 
                    </p>
                    
                </Col>
                <Col xs lg="2"></Col>
            </Row>
            {/* Gallery */}
            <Row>
                    
                <Col className="lg-4 md-12 mb-4 mb-lg-0">
                    <img
                    src={Image1}
                    className="w-100 shadow-1-strong rounded mb-4"
                    alt=""
                    />

                    <img
                    src={Image2}
                    className="w-100 shadow-1-strong rounded mb-4"
                    alt=""
                    />
                </Col>

                <Col className="lg-4 mb-4 mb-lg-0">
                    <img
                    src={Image3}
                    className="w-100 shadow-1-strong rounded mb-4"
                    alt=""
                    />

                    <img
                    src={Image4}
                    className="w-100 shadow-1-strong rounded mb-4"
                    alt=""
                    />
                </Col>

                <Col className="lg-4 mb-4 mb-lg-0">
                    <img
                    src={Image5}
                    className="w-100 shadow-1-strong rounded mb-4"
                    alt=""
                    />

                    <img
                    src={Image6}
                    className="w-100 shadow-1-strong rounded mb-4"
                    alt=""
                    />
                </Col>
            </Row>
            {/* Gallery */}
        </Container>
    
    );

};

export default Events;