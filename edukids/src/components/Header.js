import React from 'react';
import { Container, Nav, Navbar, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';


const Header = () => {

    return (
        <div className="App">
        <Navbar bg="dark" variant="myblue"
            sticky="top" expand="lg">
        <Navbar.Brand href="home" className="justify-content-start" >Logo</Navbar.Brand>

            <Container>
                <Container variant="myblue">
                <Nav className="justify-content-center">
                    
                        <Nav.Link href="home">Home</Nav.Link>
                        <Nav.Link href="about">About</Nav.Link>
                        <NavDropdown title="Class">
                            <NavDropdown.Item href="class/stuff">Stuff</NavDropdown.Item>
                            <NavDropdown.Item href="class/stuff">Stuff</NavDropdown.Item>
                            <NavDropdown.Item href="class/stuff">Stuff</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Event">
                            <NavDropdown.Item href="event/stuff">Stuff</NavDropdown.Item>
                            <NavDropdown.Item href="event/stuff">Stuff</NavDropdown.Item>
                            <NavDropdown.Item href="event/stuff">Stuff</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Other">
                            <NavDropdown.Item href="other/stuff">Stuff</NavDropdown.Item>
                            <NavDropdown.Item href="other/stuff">Stuff</NavDropdown.Item>
                            <NavDropdown.Item href="other/stuff">Stuff</NavDropdown.Item>
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
        </Navbar>
      </div>  
    );

};

export default Header;