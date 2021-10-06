import React, {Component} from 'react'
// import { Button } from "@material-ui/core";
import { Button, Card, Col, Container, ListGroup, Row, Tabs, Tab, Accordion } from 'react-bootstrap';
import { FaBook, FaBuilding, FaRegClock, FaPhone, FaCheckCircle} from 'react-icons/fa'


class About extends Component {


    render() {
        return (
            
            <Container>
                <Row className="justify-content-md-center">
    <Col md="auto"><h1>We Are Kindergarten And Childhood Is Our Passion</h1></Col>
  </Row>
  <Row className="justify-content-md-center">
  <Col md="auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    Tellus rutrum tellus pellentesque eu tincidunt tortor. Cras fermentum odio eu feugiat. Pellentesque massa placerat duis ultricies. 
    Ipsum dolor sit amet consectetur adipiscing elit. Nulla porttitor massa id neque aliquam. Adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus. </Col>
      </Row>
      <Container>
          
      </Container>
      <Row className="About-Row">
          <Col xs={6} >
              <Card className="About-Card-With-Image">
              <Card.Img classname="About-Card-Image" src="https://images.unsplash.com/photo-1587323655395-b1c77a12c89a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx"></Card.Img>
              </Card>
          
          </Col>
          <Col  xs={6} >
            <Card  className="About-Card"> 
                
                <Card.Text><h1>Our Great Vision</h1></Card.Text>
                <Card.Text><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Tellus rutrum tellus pellentesque eu tincidunt tortor. Cras fermentum odio eu feugiat. Nunc lobortis mattis aliquam faucibus purus in massa tempor nec. 
                            Dignissim convallis aenean et tortor at risus viverra adipiscing. Leo vel fringilla est ullamcorper eget nulla facilisi. Aliquet porttitor lacus luctus accumsan tortor. 
                            </p> </Card.Text>
          <ListGroup>
                  <ListGroup.Item className="About-list-group-item">
                    <span style={{margin: "10px"}}><FaCheckCircle /></span>Supporting child's Personality
                  </ListGroup.Item >
                  <ListGroup.Item className="About-list-group-item">
                    <span style={{margin: "10px"}}><FaCheckCircle /></span>Indoor/Outdoor Games for Little Kids
                  </ListGroup.Item>
                  <ListGroup.Item className="About-list-group-item">
                    <span style={{margin: "10px"}}><FaCheckCircle /></span>Professional & Qualified Teachers
                  </ListGroup.Item>
                  <ListGroup.Item className="About-list-group-item">
                    <span style={{margin: "10px"}}><FaCheckCircle /></span>Best Learning School for kids
                  </ListGroup.Item>
                </ListGroup> 
                </Card>
              </Col>
    </Row>
    <Row className="About-Row">
    <Col  xs={6} >
            <Card  className="About-Card"> 
                
                <Card.Text><h1>Our Great Vision</h1></Card.Text>
                <Card.Text><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Tellus rutrum tellus pellentesque eu tincidunt tortor. Cras fermentum odio eu feugiat. Nunc lobortis mattis aliquam faucibus purus in massa tempor nec. 
                            Dignissim convallis aenean et tortor at risus viverra adipiscing. Leo vel fringilla est ullamcorper eget nulla facilisi. Aliquet porttitor lacus luctus accumsan tortor. 
                            </p> </Card.Text>
          <ListGroup>
                  <ListGroup.Item className="About-list-group-item">
                    <span style={{margin: "10px"}}><FaCheckCircle /></span>Supporting child's Personality 
                  </ListGroup.Item >
                  <ListGroup.Item className="About-list-group-item">
                    <span style={{margin: "10px"}}><FaCheckCircle /></span>Indoor/Outdoor Games for Little Kids
                  </ListGroup.Item>
                  <ListGroup.Item className="About-list-group-item">
                    <span style={{margin: "10px"}}><FaCheckCircle /></span>Professional & Qualified Teachers
                  </ListGroup.Item>
                  <ListGroup.Item className="About-list-group-item">
                    <span style={{margin: "10px"}}><FaCheckCircle /></span>Best Learning School for kids
                    </ListGroup.Item>
                </ListGroup> 
                </Card>
              </Col>
              <Col xs={6} >
              <Card className="About-Card-With-Image">
              <Card.Img classname="About-Card-Image" src="https://images.unsplash.com/photo-1587323655395-b1c77a12c89a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx"></Card.Img>
              </Card>
          
          </Col>
    </Row>

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

            

        )
    }
}

export default About