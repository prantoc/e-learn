import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../assets/imgs/e.png'
import lightmode from '../../../assets/imgs/light.png'
// import darkmode from '../../../assets/imgs/dark.png'
const Header = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="/" className='fw-bold logo'><img src={logo} alt='Logo' width={40} /></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <LinkContainer to="/">
                            <Nav.Link>Home</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/categories">
                            <Nav.Link>Categories</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="statistics">
                            <Nav.Link>FAQ</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="blog">
                            <Nav.Link>Blog</Nav.Link>
                        </LinkContainer>
                    </Nav>
                    {/* <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                    </Form> */}
                    <Nav className='py-1'>
                        <LinkContainer to="/login" >
                            <Link className="nav-link">Login</Link>
                        </LinkContainer>
                        <LinkContainer to="/signup">
                            <Link className="nav-link btn btn-danger text-white">SignUp</Link>
                        </LinkContainer>
                        <button className='btn btn-light'><img src={lightmode} alt='Light mode' width={30} /></button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;