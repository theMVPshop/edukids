import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import CardHeader from 'react-bootstrap/esm/CardHeader';
import Image1 from '../src/img/adorable-kids-playing-with-constructor-on-floor-in-ZP6VC78.jpg'

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
                    src="edukids/src/img/adorable-kids-playing-with-constructor-on-floor-in-ZP6VC78.jpg"
                    className="w-100 shadow-1-strong rounded mb-4"
                    alt=""
                    />

                    <img
                    src="edukids/src/img/boys-and-girls-dancing-PZNK4D9.jpg"
                    className="w-100 shadow-1-strong rounded mb-4"
                    alt=""
                    />
                </Col>

                <Col className="lg-4 mb-4 mb-lg-0">
                    <img
                    src="edukids/src/img/cheerful-women-in-printing-office-JQ5K4XE.jpg"
                    className="w-100 shadow-1-strong rounded mb-4"
                    alt=""
                    />

                    <img
                    src="edukids/src/img/cute-girl-playing-with-paint-in-art-class-85QTUD9.jpg"
                    className="w-100 shadow-1-strong rounded mb-4"
                    alt=""
                    />
                </Col>

                <Col className="lg-4 mb-4 mb-lg-0">
                    <img
                    src="edukids/src/img/education-teachers-university-and-schools-concept--JA74V7F.jpg"
                    className="w-100 shadow-1-strong rounded mb-4"
                    alt=""
                    />

                    <img
                    src="edukids/src/img/emotion-emoticons-used-by-a-psychologist-during-a--D2BFM6T.jpg"
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