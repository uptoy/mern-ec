import React from 'react'
import { Nav, Navbar, Container } from 'react-bootstrap'
import { NavLink, Link } from 'react-router-dom'

const Header = (props) => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Link to="/" className="navbar-brand">Admin DashBoard</Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">

                        </Nav>
                        <Nav>
                            <li className="nav-item">
                                <NavLink to="signin" className="nav-item">Signin</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="signup" className="nav-item">Signup</NavLink>
                            </li>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header