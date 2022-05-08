import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import logo from '../../images/logo.jpg'

import './Header.css'

const Header = () => {
    const [user] = useAuthState(auth)

    return (
        <div className=''>
            <Navbar collapseOnSelect expand="lg" variant="light" style={{ backgroundColor: "rgb(234, 234, 253)" }}>
                <Container>
                    <Navbar.Brand href="#home">
                        <img src={logo} alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link className='fs-5 text-dark' href="/">Home</Nav.Link>
                            <Nav.Link className='fs-5 text-dark' href="#about">About</Nav.Link>
                            <Nav.Link className='fs-5 text-dark' as={Link} to="/blog">Blogs</Nav.Link>
                            <Nav.Link className='fs-5 text-dark' href="#contact">Contact</Nav.Link>
                            <Nav.Link className='fs-5 text-dark' href="catagories">Catagories</Nav.Link>

                        </Nav>
                        <Nav>
                            {
                                user ?
                                    <>
                                        <Nav.Link as={Link} to="/additem" className='fs-5 text-dark'>
                                            AddItem
                                        </Nav.Link>
                                        <Nav.Link as={Link} to="/manageinventory" className='fs-5 text-dark'>
                                            ManageItems
                                        </Nav.Link>
                                        <Nav.Link as={Link} to="/myitems" className='fs-5 text-dark'>
                                            MyItem
                                        </Nav.Link>
                                        <Nav.Link as={Link} to="/" onClick={() => signOut(auth)} className='fs-5 text-dark '>
                                            Sign out
                                        </Nav.Link>
                                    </>
                                    :
                                    <Nav.Link as={Link} to='/login' className='fs-5 text-dark'> LogIn</Nav.Link>
                            }

                            <Nav.Link as={Link} to='/register' className='fs-5 text-dark'>
                                Register
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );
};

export default Header;