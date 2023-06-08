import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "./sidebardata";
import SubMenu from "./submenu";
import { IconContext } from "react-icons/lib";

const Nav = styled.li`

height: 80px;
display: flex;
justify-content: flex-start;
align-items: center;
color:white;
padding-left: 20%

`;

const NavIcon = styled(Link)`
margin-left: 2rem;
font-size: 2rem;
height: 80px;
display: flex;
justify-content: flex-start;
align-items: center;

`;

const SidebarNav = styled.nav`
background: black;
width: 250px;
height: 100vh;
display: flex;
justify-content: center;
position: fixed;
top: 0;
left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
transition: 350ms;
z-index: 10;
overflow-y: scroll;
top: 0;
bottom: 0;
`;

const SidebarWrap = styled.div`
width: 100%;
`;

const Sidebar = () => {
const [sidebar, setSidebar] = useState(false);

const showSidebar = () => setSidebar(!sidebar);

return (
	<>
	<IconContext.Provider value={{ color: "#fff" }}>
		<Nav>
		<NavIcon to="#">
			<FaIcons.FaBars onClick={showSidebar} />
		</NavIcon>

		</Nav>
		<SidebarNav sidebar={sidebar}>
		<SidebarWrap>
			<NavIcon to="#">
			<AiIcons.AiOutlineClose onClick={showSidebar} />
			</NavIcon>
			<NavIcon to="/home">


			<FaIcons.FaHome/>
			</NavIcon>
			{SidebarData.map((item, index) => {
			return <SubMenu item={item} key={index} />;
			})}
		</SidebarWrap>
		</SidebarNav>
	</IconContext.Provider>
	</>
);
};

export default Sidebar;
