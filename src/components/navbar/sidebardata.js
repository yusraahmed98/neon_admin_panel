import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";

export const SidebarData = [
{
	title: "Partners",
	path: "/partners",
	
	iconClosed: <RiIcons.RiArrowDownSFill />,
	iconOpened: <RiIcons.RiArrowUpSFill />,

	subNav: [
	{
		title: "Add Partner",
		path: "/addpartner",
		
	},
	{
		title: "Delete Partner",
		path: "/deletepartner",
		
	},
	],
},
{
	title: "Our Team",
	path: "/ourteam",
	
	iconClosed: <RiIcons.RiArrowDownSFill />,
	iconOpened: <RiIcons.RiArrowUpSFill />,

	subNav: [
	{
		title: "Add Employee",
		path: "/addemployee",
		
		cName: "sub-nav",
	},
	{
		title: "Edit Employee",
		path: "/editemployee",
		
		cName: "sub-nav",
	},
	{
		title: "Delete Employee",
		path: "/deleteemployee",
		
	},
	],
},

{
	title: "Blogs",
	path: "/blogs",

	iconClosed: <RiIcons.RiArrowDownSFill />,
	iconOpened: <RiIcons.RiArrowUpSFill />,

	subNav: [
	{
		title: "Add Blog",
		path: "/addblog",
		
	},
	{
		title: "Edit Blog",
		path: "/editblog",
		
	},
    {
		title: "Delete Blog",
		path: "/deleteblog",
		
	},
	],
},



{
	title: "Feedback",
	path: "/feedback",
	/* icon: <FaIcons.FaEnvelopeOpenText />, */

	iconClosed: <RiIcons.RiArrowDownSFill />,
	iconOpened: <RiIcons.RiArrowUpSFill />,

	subNav: [
	{
		title: "Add Feedback",
		path: "/addfeedback",
		
	},
	{
		title: "Edit feedback",
		path: "/editfeedback",
		
	},
    {
		title: "Delete Feedback",
		path: "/deletefeedback",
		
	},
	],
},



{
	title: "Projects",
	path: "/projects",
	/* icon: <FaIcons.FaEnvelopeOpenText />, */

	iconClosed: <RiIcons.RiArrowDownSFill />,
	iconOpened: <RiIcons.RiArrowUpSFill />,

	subNav: [
	{
		title: "Add Project",
		path: "/addproject",
		
	},
	{
		title: "Edit Project",
		path: "/editproject",
		
	},
    {
		title: "Delete Project",
		path: "/deleteproject",
		
	},
	],
},


{
	title: "Department",

	/* icon: <FaIcons.FaEnvelopeOpenText />, */

	iconClosed: <RiIcons.RiArrowDownSFill />,
	iconOpened: <RiIcons.RiArrowUpSFill />,

	subNav: [
		
	{
		title: "Add Department",
		path: "/adddepartment",
		
	},
	
    {
		title: "Delete Department ",
		path: "/deletedepartment",
		
	},
	
	],
},

{
	title: "Role",

	/* icon: <FaIcons.FaEnvelopeOpenText />, */

	iconClosed: <RiIcons.RiArrowDownSFill />,
	iconOpened: <RiIcons.RiArrowUpSFill />,

	subNav: [
		
	{
		title: "Add Role",
		path: "/addrole",
		
	},
	
    {
		title: "Delete Role",
		path: "/deleterole",
		
	},
	
	],
},

{
	title: "Services",
	path: "/projects",
	/* icon: <FaIcons.FaEnvelopeOpenText />, */

	iconClosed: <RiIcons.RiArrowDownSFill />,
	iconOpened: <RiIcons.RiArrowUpSFill />,

	subNav: [
	{ 
		title: "Add Service",
		path: "/buynowadd",
		
	},
	{
		title: "Edit Service",
		path: "/buynowedit",
		
	},
	{
		title: "Delete Service",
		path: "/deleteservice",
		
	},

	
	],
},




{
	title: "Packages",
	path: "/projects",
	/* icon: <FaIcons.FaEnvelopeOpenText />, */

	iconClosed: <RiIcons.RiArrowDownSFill />,
	iconOpened: <RiIcons.RiArrowUpSFill />,

	subNav: [

	{
		title: "Add Package",
		path: "/addpackage",
		
	},
	{
		title: "Edit Package",
		path: "/editpackage",
		
	},
	{
		title: "Delete Package",
		path: "/deletepackage",
		
	},
	
	],
},




];
