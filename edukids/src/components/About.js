import React, {Component} from 'react'
// import { Button } from "@material-ui/core";
import {Col, Container, Row} from 'react-bootstrap';

class About extends Component {


    render() {
        return (
            
            <Container>
                <Row className="justify-content-md-center">
    <Col md="auto">We Are Kindergarten And Childhood Is Our Passion</Col>
  </Row>
  <Row className="justify-content-md-center">
  <Col md="auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    Tellus rutrum tellus pellentesque eu tincidunt tortor. Cras fermentum odio eu feugiat. Pellentesque massa placerat duis ultricies. 
    Ipsum dolor sit amet consectetur adipiscing elit. Nulla porttitor massa id neque aliquam. Adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus. </Col>
      </Row>
      <Container>
          
      </Container>
      <Row>
          <Col>Put Image here. </Col>
          <Col md="auto">Put a title and then put some lorem ipsum and some bullets here</Col>
    </Row>
    <Row>
          <Col md="auto">Put a title and then put some lorem ipsum and some bullets here</Col>
          <Col>Put Image here. </Col>
    </Row>

    <Row>
        <Col>
        <Row className="justify-content-md-center">Class Sessions</Row>
        <Row className="justify-content-md-center">Sunday - Monday</Row>
        <Row className="justify-content-md-center">8:00 am - 12:30 pm</Row>
        </Col>
        <Col>
        <Row className="justify-content-md-center">Location Address</Row>
        <Row className="justify-content-md-center">145 While Kateway</Row>
        <Row className="justify-content-md-center">CA 25615, San Francisco</Row>
        </Col>
        <Col>
        <Row className="justify-content-md-center">Our Office Hour</Row>
        <Row className="justify-content-md-center">Sunady - Monday</Row>
        <Row className="justify-content-md-center">7:00 am - 5:30pm</Row></Col>
        <Col>
        <Row className="justify-content-md-center">Phone & Email</Row>
        <Row className="justify-content-md-center">(+22)-658-258 / +259-55-9825</Row>
        </Col>
    </Row>
            </Container>

            

        )
    }
}

export default About