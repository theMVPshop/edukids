import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';




function ClassDetail() {
  return(
    <div>
   <Container>

    *** Class Detail header IMG ***

  <Row>
    <Col>
    <h2>Class Description</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium fugiat cumque nemo eaque deleniti perferendis vel vero in ut assumenda!</p>
    <Col xs={6} md={4}>
      <Image src="../../../img/tutor-and-multicultural-kids-playing-with-construc-M27G27Q.jpg/360x300" thumbnail />
    </Col>

    </Col>
    <Col>
    {/* ***information card*** */}

    <Card border="warning" style={{ width: '18rem' }}>
    <Card.Img variant="top" src="holder.js/60px100" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>

  </Card>
    </Col>
  </Row>

  <Row>
    <Col>
    <h3>Class Curriculum</h3>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit quo ratione recusandae!</p>
    <ul>
        <li>Lorem ipsum dolor sit amet consectetur.</li>
        <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
        <li>Lorem ipsum dolor sit amet consectetur.</li>
    </ul>
    </Col>
    <Col>
    {/* ***Teacher card *** */}

    <Card border="warning" style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/60px60" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            <b>John Doe</b>
            Teacher
            lead-in to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  </Row>

  <Row>
    <Col>
    <h4>Class Activities Gallery:</h4>
    {/* ****gallery goes here**** */}
    <CardGroup>
  <Card>
    <Card.Img variant="top" src="holder.js/30px30" />
  </Card>
  <Card>
    <Card.Img variant="top" src="holder.js/30px30" />
  </Card>
  <Card>
    <Card.Img variant="top" src="holder.js/30px30" />
  </Card>
  <Card>
    <Card.Img variant="top" src="holder.js/30px30" />
  </Card>
</CardGroup>
    </Col>
  </Row>

</Container>
    </div>
  )
} 

export default ClassDetail;