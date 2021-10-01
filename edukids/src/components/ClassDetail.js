import React from 'react';
import { Container, Row, Col, Image, Card, CardGroup } from 'react-bootstrap';





function ClassDetail() {
  return(
    <div>
   <Container className="ClassDetail-container">

    *** Class Detail header IMG ***

  <Row>
    <Col>
    <h2 className="ClassDetail-h2">Class Description</h2>
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
    <Col xs={6} md={4}>
    <h3 className="ClassDetail-h3">Class Curriculum</h3>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit quo ratione recusandae!</p>
    <ul>
        <li>Lorem ipsum dolor sit amet consectetur.</li>
        <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
        <li>Lorem ipsum dolor sit amet consectetur.</li>
    </ul>
    </Col>
    <Col >
    {/* ***Teacher card *** */}

    <Card className="ClassDetail-teacher-card-area">
        <Card.Body className="ClassDetail-teacher-card">
        <Card.Img variant="top" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dGVhY2hlciUyMGhlYWRzaG90fGVufDB8fDB8fA%3D%3D/15x15" className="ClassDetail-teacher-img" />
          
          <Card.Text className="ClassDetail-teacher-card-text">
            <b>Jane Deo</b>
            <br/>
            teacher
            <br/>
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
    <Card.Img variant="top" src="https://images.unsplash.com/photo-1574704530833-d47190a0d92f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8/5px5" />
  </Card>
  <Card>
    <Card.Img variant="top" src="https://images.unsplash.com/flagged/photo-1572818640942-05bbb70c9089?ixlib=rb-1.2.1/15px15" />
  </Card>
  <Card>
    <Card.Img variant="top" src="https://images.unsplash.com/flagged/photo-1572818640942-05bbb70c9089?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8/15px15/30px30" />
  </Card>
  <Card>
    <Card.Img variant="top" src="https://images.unsplash.com/flagged/photo-1572818640942-05bbb70c9089?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8/15px15/30px30" />
  </Card>
</CardGroup>
    </Col>
  </Row>

</Container>
    </div>
  )
} 

export default ClassDetail;