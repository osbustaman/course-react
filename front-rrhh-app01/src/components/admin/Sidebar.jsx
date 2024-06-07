import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

export const Sidebar = () => {
  return (
    <>
        <div className="sidebar">
            <Navbar expand="lg" className="flex-column align-items-start">
                <Navbar.Brand href="#">Menu</Navbar.Brand>
                <Nav className="flex-column">
                <Nav.Link as={Link} to="/panel-control/dashboard">Dashboard</Nav.Link>
                <Nav.Link as={Link} to="/panel-control/profile">Profile</Nav.Link>
                <Nav.Link as={Link} to="/panel-control/settings">Settings</Nav.Link>
                </Nav>
            </Navbar>
        </div>
    </>
  )
}
