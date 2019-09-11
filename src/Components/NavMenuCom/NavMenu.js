import React from "react";
import "./NavMenu.css";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

const NavMenu = () => {
  return (
    <div className="stickyNav">
      <Navbar light expand="md" className="nav">
        <NavbarBrand href="/" className="brand">
          <div className="site-logo">
            <img
              className="logo-docplanner"
              src="https://www.docplanner.com/img/logo-default-group-en.svg?v=1"
              alt="Docplanner Group"
              width="300px"
            />
          </div>
        </NavbarBrand>
        <NavbarToggler />
        <Collapse navbar className="navItems">
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/components/">About us</NavLink>
            </NavItem>
            <NavItem>
              <NavLink>Career</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Departments
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>Marketing & PR</DropdownItem>
                <DropdownItem>Customer Success & Sales</DropdownItem>
                <DropdownItem>IT, Product, Design & UX</DropdownItem>
                <DropdownItem>Finance & Administration</DropdownItem>
                <DropdownItem>HR & more</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavMenu;
