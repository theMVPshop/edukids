import React from "react";
import { Container, Row, Col, Image, Card, CardGroup } from "react-bootstrap";

function ClassDetail() {
  return (
    <div>
      <Container className="Head-Container">
        <h1 className="Head-H1">Class Detail</h1>
      </Container>
      <Container className="ClassDetail-container">
        <Row className="justify-content-md-center">
          <Col>
            <h2 className="ClassDetail-h2">Class Description</h2>
            <p className="ClassDetail-p">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium fugiat cumque nemo eaque deleniti perferendis vel vero
              in ut assumenda!
            </p>

            <Image
              className="classDetail-Description-image"
              // src="/img/tutor-and-multicultural-kids-playing-with-construc-M27G27Q.jpg"
            />

            <h3 className="ClassDetail-h3">Class Curriculum</h3>
            <p className="ClassDetail-p">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti
              accusantium voluptate maxime obcaecati? Impedit maxime dolores
              vero quas? Blanditiis cumque non ullam recusandae fugiat neque
              error totam expedita, magni ea!
            </p>
            <ul className="ClassDetail-list-style">
              <li>Lorem ipsum dolor sit amet consectetur.</li>
              <li>
                <i class="bi bi-check-circle-fill"></i>Lorem ipsum dolor sit
                amet consectetur adipisicing.
              </li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
              <li>Lorem ipsum dolor sit amet consectetur.</li>
            </ul>

            <h4>Class Activities Gallery:</h4>
            {/* ****gallery goes here**** */}
            <CardGroup>
              <Card>
                <Image
                  className="classDetail-Activities-gallery-photo"
                  src="https://images.unsplash.com/photo-1574704530833-d47190a0d92f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8"
                  rounded
                />
              </Card>
              <Card>
                <Image
                  className="classDetail-Activities-gallery-photo"
                  src="https://images.unsplash.com/photo-1574704530833-d47190a0d92f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8"
                  rounded
                />
              </Card>
              <Card>
                <Image
                  className="classDetail-Activities-gallery-photo"
                  src="https://images.unsplash.com/photo-1574704530833-d47190a0d92f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8"
                  rounded
                />
              </Card>
              <Card>
                <Image
                  className="classDetail-Activities-gallery-photo"
                  src="https://images.unsplash.com/photo-1574704530833-d47190a0d92f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8"
                  rounded
                />
              </Card>
            </CardGroup>
          </Col>

          <Col md="auto">
            {/* ***information card*** */}

            <Card className="ClassDetail-information-card-area">
              <Card.Body className="ClassDetail-information-card">
                <button className="classDetail-information-button">
                  Information
                </button>
                <br />
                <p className="classDetail-information-paragraph">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Doloremque ab et ex repellendus,
                </p>
                <br />
                <p className="classDetail-information-title">Category:</p>
                <p className="classDetail-information-item">Creative Class</p>
                <p className="classDetail-information-title">Age Group:</p>
                <p className="classDetail-information-item">2 - 5 Years Old</p>
                <p className="classDetail-information-title">Class size:</p>
                <p className="classDetail-information-item">
                  20 kids in one class
                </p>
                <p className="classDetail-information-title">Fees Cost:</p>
                <p className="classDetail-information-item">$25/Mon</p>
              </Card.Body>
            </Card>

            {/* ***Teacher card *** */}

            <Card className="ClassDetail-teacher-card-area">
              <Card.Body className="ClassDetail-teacher-card">
                <Card.Img
                  variant="top"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dGVhY2hlciUyMGhlYWRzaG90fGVufDB8fDB8fA%3D%3D/15x15"
                  className="ClassDetail-teacher-img"
                />

                <Card.Text className="ClassDetail-teacher-card-text">
                  <b>Jane Deo</b>
                  <br />
                  teacher
                  <br />
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ClassDetail;
