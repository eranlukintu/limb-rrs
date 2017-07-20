import React from 'react';
import { Nav, NavDropdown, MenuItem} from "react-bootstrap";
import { Meteor } from "meteor/meteor";
import { DYNAMICROWS } from "../../../api/collections/dynamicRows.js";

export const BusinessModelingMenuUnselected = function(props) {
	
	handleSelect = (eventKey) => {
		switch(eventKey) {
			case "createDynamicList": 
				Meteor.call("createDynamicList", {});
			break;

			case "index":
			case "back": 
			case "actorModelComponent":
				const currentPage = props.currentPage;
				const currentMenu = props.menuName;
				const calculateNextPage = props.calculateNextPage;
				const calculateNextMenu = props.calculateNextMenu;
				const setCurrentPage = props.setCurrentPage;
				const modeling = props.modeling;
				const setMenuName=props.setMenuName;
				const selectedItemType = props.selectedItemType;
				props.calculateNextPageAndMenu(eventKey, 
												currentPage, 
												calculateNextPage, 
												calculateNextMenu, 
												setCurrentPage, 
												currentPage.props,
												setMenuName,
												selectedItemType);
			break;
		}
		
	}

	return (<NavDropdown title="Actions" onSelect={this.handleSelect} id="modelingMenuDropdown">
		<MenuItem eventKey="index">Go to index page</MenuItem>
		<MenuItem eventKey="back">Go back to modeling page</MenuItem>
		<MenuItem eventKey="createDynamicList">Create dynamic array</MenuItem>

	</NavDropdown>)
}
