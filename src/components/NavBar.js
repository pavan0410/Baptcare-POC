import React from "react";
import { Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap";

function NavBar() {
  return (
    <div>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home" className="ml-0">
            Info Capture
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
