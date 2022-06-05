import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../src/images/logo.png'

const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" style={{ backgroundColor: 'skyblue' }} variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to='/home' ><img src={logo} alt="" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link className='text-black ps-2 ' style={{ fontSize: '20px' }} as={Link} to='/home'>Home</Nav.Link>
                            <Nav.Link className='text-black ps-3' style={{ fontSize: '20px' }} as={Link} to='/products'>Products & Services</Nav.Link>
                            <Nav.Link className='text-black ps-3' style={{ fontSize: '20px' }} as={Link} to='/client'>Become a Client</Nav.Link>
                            <Nav.Link className='text-black ps-3' style={{ fontSize: '20px' }} as={Link} to='/about'>About</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link className='text-black' style={{ fontSize: '20px' }} as={Link} to='/login'>Login</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;