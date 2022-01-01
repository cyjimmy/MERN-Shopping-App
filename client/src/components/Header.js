import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import { useCart } from "../context/CartContext";
import { Badge } from "react-bootstrap";
import { Link } from "react-router-dom";

const LinkStyle = {
  textDecoration: "none",
  color: "white",
  marginRight: "1rem",
  transform: "translateY(1px)",
  fontSize: "1.1rem",
};

const BadgeStyle = {
  borderRadius: "50%",
};

export default function Header() {
  const cartItemCount = useCart();

  return (
    <Navbar bg="dark" variant="dark" sticky="top" style={{ height: "8%" }}>
      <Navbar.Brand style={{ marginLeft: "1rem" }}>MERN Store</Navbar.Brand>
      <Link to="/" style={LinkStyle}>
        Home
      </Link>
      <Link to="/products" style={LinkStyle}>
        Products
      </Link>
      <Link to="/cart" style={LinkStyle}>
        {cartItemCount ? (
          <>
            Cart{" "}
            <Badge bg="secondary" style={BadgeStyle}>
              {cartItemCount}
            </Badge>
          </>
        ) : (
          "Cart"
        )}
      </Link>
    </Navbar>
  );
}
