import React, {Component} from 'react'
// import { Button } from "@material-ui/core";
import { Col, Container, Row, Card, CardGroup } from 'react-bootstrap';

class Team extends Component {


    render() {
        return  (
            <Container >
<Row className="justify-content-md-center" >
<CardGroup >
    
  <Card align="center" >
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>John Doe</Card.Title>
      <Card.Text>
      Teacher
      </Card.Text>
      <Card.Text>Facebook Twitter Instagram Pinterest</Card.Text>
    </Card.Body>
    <Card.Footer>
    </Card.Footer>
  </Card>
  <Card align="center">
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
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
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
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
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
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
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
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
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
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