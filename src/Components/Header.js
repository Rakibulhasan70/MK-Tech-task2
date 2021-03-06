import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../src/images/logo.png'
import auth from '../firebase.git.init';

const Header = () => {
    const [user] = useAuthState(auth)
    const navigate = useNavigate()

    const handleSignOut = () => {
        if (user) {
            navigate('/')
            signOut(auth)
        }
    }
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
                            <Nav.Link className='text-black ps-3' style={{ fontSize: '20px' }} as={Link} to='/download'>Downloads</Nav.Link>
                        </Nav>
                        <Nav>
                            {
                                user ?
                                    <button onClick={handleSignOut} style={{ fontSize: '20px' }} className='btn btn-link text-black text-decoration-none '>Sign Out</button>
                                    :
                                    <Nav.Link className='text-black' style={{ fontSize: '20px' }} as={Link} to='/login'>login</Nav.Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;