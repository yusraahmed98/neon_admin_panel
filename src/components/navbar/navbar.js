import React from "react";
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from "cdbreact";

import { Sidenav, Nav } from 'rsuite';
import DashboardIcon from '@rsuite/icons/legacy/Dashboard';
import GroupIcon from '@rsuite/icons/legacy/Group';
import MagicIcon from '@rsuite/icons/legacy/Magic';
import GearCircleIcon from '@rsuite/icons/legacy/GearCircle';
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function NavBar() {
  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        position: "fixed",
        top: "0",
      }}
    >
      <CDBSidebar
        textColor="#fff"
        backgroundColor="#1c1c1c"
        style={{ width: "25%" }}
      >
        <CDBSidebarHeader /* prefix={<i  className="fa fa-bars fa-large"></i>} */
        >
          <a
            href="/SoftwareDevelopment"
            className="text-decoration-none"
            style={{ color: "inherit" }}
          >
            Software Development
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            
              <Nav>
                 <Nav.Menu title="Advanced" icon={<MagicIcon />}>
        <Nav.Item href='/geo' >Geo</Nav.Item>
        <Nav.Item >Devices</Nav.Item>
        <Nav.Item>Loyalty</Nav.Item>
        <Nav.Item>Visit Depth</Nav.Item>
      </Nav.Menu>
</Nav>


      

            <NavLink exact to="/ourteam" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="users">Our Team</CDBSidebarMenuItem>
            </NavLink>

            <NavLink exact to="/blogs" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="pen">Blogs</CDBSidebarMenuItem>
            </NavLink>

            <NavLink exact to="/feedback" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="comment">Feedback</CDBSidebarMenuItem>
            </NavLink>

            <NavLink exact to="/projects" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="laptop">Projects</CDBSidebarMenuItem>
            </NavLink>

            <NavLink exact to="/Buynow" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="wallet">Buy Now</CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>
        <CDBSidebarFooter style={{ textAlign: "center" }}>
          <div
            style={{
              padding: "20px 5px",
            }}
          >
            NEON
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
}
export default NavBar;
