import React from 'react';
import { Container, Nav, Navbar, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import {ReactComponent as EdukidsLogo} from '../img/edukids_logo.svg';

const Header = () => {

    return (
        <div className="App">
        <Navbar bg="dark" variant="myblue"
            sticky="top" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Navbar.Brand href="home">
            <EdukidsLogo href="home" className="svg" />
        </Navbar.Brand>
            <Container>
                <Container variant="myblue">
                <Nav className="justify-content-center">
                        <Nav.Link href="home">Home</Nav.Link>
                        <Nav.Link href="about">About</Nav.Link>
                        <NavDropdown title="Class">
                            <NavDropdown.Item href="classes">Classes</NavDropdown.Item>
                            <NavDropdown.Item href="classdetail">Class Detail</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Event">
                            <NavDropdown.Item href="events">Events</NavDropdown.Item>
                            <NavDropdown.Item href="eventdetail">Event Detail</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Other">
                            <NavDropdown.Item href="contact">Contact Us</NavDropdown.Item>
                            <NavDropdown.Item href="faq">FAQ</NavDropdown.Item>
                            <NavDropdown.Item href="team">Team</NavDropdown.Item>
                            <NavDropdown.Item href="career">Career</NavDropdown.Item>
                            <NavDropdown.Item href="careerdetails">Career Detail</NavDropdown.Item>
                        </NavDropdown>
                </Nav>
                </Container>
            </Container>
            <Form className="d-flex">
                <FormControl
                    type="search"
                    placeholder= ""
                    className="mr-2"
                    aria-label="Search"
                />
            </Form>
            <Button> Book a Visit </Button>
            </Navbar.Collapse>
        </Navbar>
      </div>  
    );

};

export default Header;