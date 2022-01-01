import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";

export default function Header() {
  return (
    <Navbar bg="dark" variant="dark" sticky="top" style={{ height: "8%" }}>
      <Container>
        <Navbar.Brand>MERN Store</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/products">Products</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
