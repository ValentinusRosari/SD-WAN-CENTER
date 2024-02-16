import React from "react";
import { Nav, NavLink, NavMenu } from "./NavbarElements";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
          <NavLink to="/dashboard" activeStyle>
            Dashboard
          </NavLink>
          <NavLink to="/ticket" activeStyle>
            Ticket
          </NavLink>
          <NavLink to="/alarm" activeStyle>
            Alarm
          </NavLink>
          <NavLink to="/inventory" activeStyle>
            Inventory
          </NavLink>
          <NavLink to="/user" activeStyle>
            User
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
