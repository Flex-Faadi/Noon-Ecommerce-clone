import React from "react";
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  NavDropdown,
} from "react-bootstrap";
function Header() {
  return (
    <>
      <Navbar bg="warning container-fluid" expand="lg">
        <Navbar.Brand href="#home">
          <img
            src="https://z.nooncdn.com/s/app/com/noon/images/logos/noon-black-en.svg"
            alt="imgLogo"
          />
        </Navbar.Brand>
        <Form inline>
          <FormControl
            type="text"
            placeholder="Search"
            className="mr-sm-2"
            expand="xlg"
          />
        </Form>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto d-flex justify-content-between">
            <Nav.Link href="#home" className="mr-3">
              العربية
            </Nav.Link>
            <img
              src="https://z.nooncdn.com/s/app/com/common/images/flags/ae.svg"
              alt="3rge"
              width="30px"
            />
            <NavDropdown
              className="mr-3"
              title="Ship To UAE"
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item href="#action/3.1">UAE</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">KSA</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">EGYPT</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link" className="border-right border-secondary">
              SignIn <i className="fa fa-user" aria-hidden="true"></i>
            </Nav.Link>
            <Nav.Link href="#link">
              Cart <i className="fa fa-shopping-cart" aria-hidden="true"></i>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default Header;
