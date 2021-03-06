import React from 'react';
import {Link, NavLink} from "react-router-dom";
import {Container, Nav, Navbar} from "react-bootstrap";

const Header = () => {
    return (
        <header>
            <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
                <Container>
                    <Navbar.Brand as={Link} to="/" >Shop</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Link as={NavLink} to='/cart'>
                                <i className="fas fa-shopping-cart"/> Cart
                            </Nav.Link>
                            <Nav.Link as={NavLink} to='/user'>
                                <i className="fas fa-user"/> Sign In
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;
