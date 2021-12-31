import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";

export default function Header() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">MERN Store</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Products</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
