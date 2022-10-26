import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import logo from '../../../assets/imgs/e.png'
import './Header.css'
const Header = () => {
    return (
        <Navbar bg="light" variant="light" expand="lg" className='p-3 rounded'>
            <Container>
                <Navbar.Brand href="/" className='fw-bold logo'><img src={logo} alt='Logo' width={30} /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <LinkContainer to="/">
                            <Nav.Link>Home</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="topics">
                            <Nav.Link>Quiz Topics</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="statistics">
                            <Nav.Link>Statistics</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="blog">
                            <Nav.Link>Blog</Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;