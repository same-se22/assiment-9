import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from './../../../Hooks/useAuth';
import { HashLink } from 'react-router-hash-link';

const Header = () => {
  const {user, logOut} = useAuth();
    return (
<>
  <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg">
    <Container>
    <Navbar.Brand href="#home">Ed-Tech company</Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
    <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
      <Nav.Link as={HashLink} to="#About">About</Nav.Link>
      <Nav.Link as={HashLink} to="#Class">Class</Nav.Link>
      <Nav.Link as={HashLink} to="/home#experts">Team Experts</Nav.Link>
      <Nav.Link as={HashLink} to="/home#services"> Services</Nav.Link>
      <Nav.Link as={HashLink} to="#Shedule">Shedule</Nav.Link>
      <Nav.Link as={HashLink} to="#Event">Event</Nav.Link>
      <Nav.Link as={HashLink} to="#Blog">Blog</Nav.Link>
      <Nav.Link as={HashLink} to="/contact#Contact">Contact</Nav.Link>
{  user?.email ?    
<Button onClick={logOut} variant='light'>LogOut</Button> :
<Nav.Link as={Link} to="/Login">Login</Nav.Link>
}      <Navbar.Text>
        Signed in as: <a href="#login">{user?.displayName}</a> 
      </Navbar.Text>
    </Navbar.Collapse>
    </Container>
  </Navbar>
 
</>
    );
};

export default Header;