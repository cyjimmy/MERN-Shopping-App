import React, { useRef, useState } from "react";
import { Button, Modal, Navbar } from "react-bootstrap";
import { useCart } from "../context/CartContext";
import { Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

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

const InputStyle = {
  marginBottom: "0.3rem",
  borderRadius: "10px",
  textAlign: "center",
  border: "1px solid rgba(0,0,0,0.5)",
};

export default function Header() {
  const cartItemCount = useCart().itemList.length;
  const [displayModal, setDisplayModal] = useState(false);
  const emailRef = useRef();
  const pwRef = useRef();

  const loginBtnHandler = () => {
    if (!displayModal) {
      setDisplayModal(true);
    } else {
      axios.post("/login", {
        email: emailRef.current.value,
        password: pwRef.current.value,
      });
    }
  };

  const newAccountBtnHandler = () => {
    axios.post("/signUp", {
      email: emailRef.current.value,
      password: pwRef.current.value,
    });
  }

  const handleClose = () => {
    setDisplayModal(false);
  };

  return (
    <>
      <Navbar bg="dark" variant="dark" sticky="top" style={{ height: "8%" }}>
        <Navbar.Brand style={{ marginLeft: "1rem" }}>MERN Store</Navbar.Brand>
        <Link to="/" style={LinkStyle}>
          Home
        </Link>
        <Link to="/product" style={LinkStyle}>
          Products
        </Link>
        <Link to="/cart" style={LinkStyle}>
          {cartItemCount > 0 && (
            <>
              Cart{" "}
              <Badge bg="secondary" style={BadgeStyle}>
                {cartItemCount}
              </Badge>
            </>
          )}
        </Link>
        <Navbar.Collapse className="justify-content-end">
          <Button style={{ margin: "1em" }} onClick={loginBtnHandler}>
            Login
          </Button>
        </Navbar.Collapse>
      </Navbar>
      <Modal show={displayModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ display: "flex", flexDirection: "column" }}>
          <input ref={emailRef} style={InputStyle} placeholder="Email"></input>
          <input ref={pwRef} style={InputStyle} placeholder="Password"></input>
          <Button style={{ marginTop: "5px" }} onClick={loginBtnHandler}>
            Login
          </Button>
          <Button style={{ marginTop: "5px" }} onClick={newAccountBtnHandler}>
            Create Account
          </Button>
        </Modal.Body>
      </Modal>
    </>
  );
}
