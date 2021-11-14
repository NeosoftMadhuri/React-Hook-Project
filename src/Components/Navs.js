import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
export default function Navs() {
    return (
        <>
            <Navbar bg="dark" expand="lg">
                <Container fluid>
                    <h4 style={{ color: "white", marginLeft: "20px" }}>Big-Code</h4>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Link to="/" style={{ color: "white", textDecoration: "none", marginLeft: "20px" }}>Home</Link>
                            <Link to="/course" style={{ color: "white", marginLeft: "20px", textDecoration: "none" }}>Course</Link>
                            <Link to="/userinfo" style={{ color: "white", marginLeft: "20px", textDecoration: "none" }}>User Info</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}
