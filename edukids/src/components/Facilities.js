import React from 'react'
import {Container, Row, Col, Card, Button, Form, Image } from 'react-bootstrap';
import { FaFortAwesomeAlt } from "react-icons/fa";


export default function Facilities() {
    return (
        <div>

<Container>
  <Row>
{/* *** list column ***       */}
    <Col>
    <Row>
    <Col xs={1}><FaFortAwesomeAlt/></Col>
    <Col>  <h6>Meals Provided</h6>
   <br/>
   <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. </p></Col>
  </Row>
  <Row >
    <Col xs={1}><Image src="../edukids/img/programs.svg" roundedCircle /></Col>
    <Col>  <h6>Transportation</h6>
   <br/>
   <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. </p></Col>
  </Row>
  <Row >
    <Col xs={1}><Image src="../edukids/img/programs.svg" roundedCircle /></Col>
    <Col>  <h6>Full Day Session</h6>
   <br/>
   <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. </p></Col>
  </Row>
  <Row >
    <Col xs={1}><Image src="../edukids/img/programs.svg" roundedCircle /></Col>
    <Col>  <h6>Extra Activies</h6>
   <br/>
   <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. </p></Col>
  </Row>
    </Col>
{/* *** list column ***     */}
    <Col>
<Row>
    <Col xs={1}><Image src="../edukids/img/programs.svg" roundedCircle /></Col>
    <Col >  <h6>Languages Lesson</h6>
   <br/>
   <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. </p></Col>
  </Row>
  <Row>
    <Col xs={1}><Image src="../edukids/img/programs.svg" roundedCircle /></Col>
    <Col >  <h6>Qualified Teachers</h6>
   <br/>
   <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. </p></Col>
  </Row>
  <Row>
    <Col xs={1}><Image src="../edukids/img/programs.svg" roundedCircle /></Col>
    <Col >  <h6>Special Education</h6>
   <br/>
   <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. </p></Col>
  </Row>
  <Row>
    <Col xs={1}><Image src="../edukids/img/programs.svg" roundedCircle /></Col>
    <Col >  <h6>Health Care</h6>
   <br/>
   <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. </p></Col>
  </Row>
    </Col>

{/* *** card column *** */}
    <Col>
    <Card style={{ width: '18rem', color: 'white', backgroundColor: '#ff5d37', borderRadius: '8%', padding: '18px 4px'}}>
  <Card.Body>
    <Card.Title><b>Register Now</b></Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Form>

    <Form.Group className="mb-3">
    <Form.Control type="text" placeholder="Name" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Control type="email" placeholder="Email" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Control as="textarea" rows={3}  placeholder="Message"/>
  </Form.Group>
 
  <Button variant="primary" className="form_btn_custom" type="submit">
    Submit Now
  </Button>
</Form>
  </Card.Body>
</Card>
    
    </Col>
  </Row>
</Container>
            
        </div>
    )
}
