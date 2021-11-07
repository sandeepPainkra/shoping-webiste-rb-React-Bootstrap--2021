import React from "react";
import {
  Badge,
  Container,
  Dropdown,
  FormControl,
  Navbar,
} from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" style={{ height: 80 }}>
      <Container>
        <Navbar.Brand>
          <Link to="/">SHOPPINGWEB</Link>
        </Navbar.Brand>
        <Navbar.Text className="search">
          <FormControl
            style={{ width: 500 }}
            placeholder="Search a product"
            className="m-auto"
          ></FormControl>
        </Navbar.Text>
        <Dropdown style={{ minWidth: 300, textAlign: "right" }}>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            <FaShoppingCart /> <Badge bg="success">0</Badge>
          </Dropdown.Toggle>

          <Dropdown.Menu style={{ minWidth: 300 }}>
            <Dropdown.Item>
              <Link to="/cart">
                <span style={{ padding: 10 }}>Cart is Empty</span>
              </Link>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Container>
    </Navbar>
  );
};

export default Header;
