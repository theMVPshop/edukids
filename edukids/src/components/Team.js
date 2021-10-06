import React, {Component} from 'react'
// import { Button } from "@material-ui/core";
import { Col, Container, Row, Card, CardGroup } from 'react-bootstrap';
import Image1 from '../img/portrait-of-smiling-male-school-teacher-standing-i-7BJLS3R.jpg';
import Image2 from '../img/young-teacher-at-university-XG8ZTHV.jpg';
import Image3 from '../img/education-teachers-university-and-schools-concept--JA74V7F.jpg'
import Image4 from '../img/smiling-science-teacher-YXXHLVC.jpg'
import Image5 from '../img/cheerful-women-in-printing-office-JQ5K4XE.jpg'


class Team extends Component {


    render() {
        return  (
            <Container >
                                <Container className="Head-Container">
      <h1 className="Head-H1">Team</h1>
    </Container>
<Row className="justify-content-md-center" >
<CardGroup >
    
  <Card align="center" >
    <Card.Img className="Team-Card-Image" src={Image1}/>
    <Card.Body className="Team-Card-Body1">
      <Card.Title>John Doe</Card.Title>
      <Card.Text>
      Teacher
      </Card.Text>
      <Card.Text>Facebook Twitter Instagram Pinterest</Card.Text>
    </Card.Body >
    <Card.Footer>
    </Card.Footer>
  </Card>
  <Card align="center">
    <Card.Img className="Team-Card-Image" src={Image2}/>
    <Card.Body className="Team-Card-Body2">
      <Card.Title>Sally Watson</Card.Title>
      <Card.Text>
      Teacher
      </Card.Text>
      <Card.Text>Facebook Twitter Instagram Pinterest</Card.Text>
    </Card.Body>
    <Card.Footer>
    </Card.Footer>
  </Card>
  <Card align="center">
    <Card.Img className="Team-Card-Image" src={Image3}/>
    <Card.Body className="Team-Card-Body3">
      <Card.Title>Mary James</Card.Title>
      <Card.Text>
      Teacher
      </Card.Text>
      <Card.Text>Facebook Twitter Instagram Pinterest</Card.Text>
    </Card.Body>
    <Card.Footer>
    </Card.Footer>
  </Card>
</CardGroup>
</Row>
<Row className="justify-content-md-center">
<CardGroup>
<Card align="center">
    <Card.Img className="Team-Card-Image" src={Image4}/>
    <Card.Body className="Team-Card-Body3">
      <Card.Title>Jimmer Housten</Card.Title>
      <Card.Text>
      Teacher
      </Card.Text>
      <Card.Text>Facebook Twitter Instagram Pinterest</Card.Text>
    </Card.Body>
    <Card.Footer>
    </Card.Footer>
  </Card>
  <Card align="center">
    <Card.Img className="Team-Card-Image" src={Image5}/>
    <Card.Body className="Team-Card-Body1">
      <Card.Title>Alison WHite</Card.Title>
      <Card.Text>
      Teacher
      </Card.Text>
      <Card.Text>Facebook Twitter Instagram Pinterest</Card.Text>
    </Card.Body>
    <Card.Footer>
    </Card.Footer>
  </Card>
  <Card align="center">
    <Card.Img className="Team-Card-Image" src={Image5}/>
    <Card.Body className="Team-Card-Body2">
      <Card.Title>Ana Scott</Card.Title>
      <Card.Text>
      Teacher
      </Card.Text>
      <Card.Text>Facebook Twitter Instagram Pinterest</Card.Text>
    </Card.Body>
    <Card.Footer>
    </Card.Footer>
  </Card>
</CardGroup>
</Row>
            </Container>

        )
    }
}

export default Team