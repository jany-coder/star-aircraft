import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavigationBar = (props) => {

    return (
        <div>
            <Navbar bg="light" variant="light">
                <Container>
                    <Navbar.Brand href="#home">Start-Aircraft</Navbar.Brand>
                    <Nav className="ml-auto">
                        <Nav.Link><Link to="/">Home</Link></Nav.Link>
                        <Nav.Link><Link to="/seats">Available Seats</Link></Nav.Link>
                        <Nav.Link><Link to="/login">Login</Link></Nav.Link>  
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavigationBar;