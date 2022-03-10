import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';

import t from '../assets/harvest-l-500-300.png';

export const NavigationBar = () => (
  <>

    <Navbar sticky="top" bg="white" expand="lg">
      <Navbar.Brand href="/" title="Home"><img src={t} alt="R1N1" width="120px" height="40px" /></Navbar.Brand>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
        </Nav>
      </Navbar.Collapse>
    </Navbar>

  </>
)