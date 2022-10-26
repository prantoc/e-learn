import React, { useContext } from 'react';
import { useState } from 'react';
import { Container, Dropdown, Image, Nav, Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../assets/imgs/e.png'
import lightmode from '../../../assets/imgs/light.png'
import darkmode from '../../../assets/imgs/dark.png'
import './Header.css'
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import avatar from '../../../assets/imgs/man.png'
import { error, success } from '../../../Toasts/Toasts';
const Header = () => {
    const [mode, setMode] = useState(false)
    const { user, logoutUser } = useContext(AuthContext);
    const userLogout = () => {
        logoutUser()
            .then(() => {
                success(' Sign-out successful');
            }).catch((e) => {
                error(e);
            });
    }
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
                        <LinkContainer to="categories">
                            <Nav.Link>Categories</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/faq">
                            <Nav.Link>FAQ</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="blog">
                            <Nav.Link>Blog</Nav.Link>
                        </LinkContainer>
                    </Nav>

                    {
                        user
                            ?
                            <Navbar.Text className='d-flex' title={user.displayName}>
                                <Dropdown>
                                    <Dropdown.Toggle className='border border-1 py-1' variant="outline-light" id="dropdown-basic">
                                        <Image roundedCircle style={{ height: '28px' }} src={user.photoURL ? user.photoURL : avatar} />
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu className='position-absolute end-100 translate-middle-x' style={{ zIndex: '9999' }}>
                                        <Dropdown.Item >{user?.displayName}</Dropdown.Item>
                                        <Dropdown.Item onClick={userLogout}>Logout</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                                <button onClick={() => setMode(!mode)} className='btn btn-light'><img src={mode === true ? darkmode : lightmode} alt='Light mode' width={30} /></button>
                            </Navbar.Text>

                            :
                            <Nav className='py-1'>
                                <LinkContainer to="/login" >
                                    <Link className="nav-link">Login</Link>
                                </LinkContainer>
                                <LinkContainer to="/signup">
                                    <Link className="nav-link">SignUp</Link>
                                </LinkContainer>
                                <button onClick={() => setMode(!mode)} className='btn btn-light'><img src={mode === true ? darkmode : lightmode} alt='Light mode' width={30} /></button>
                            </Nav>
                    }
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;