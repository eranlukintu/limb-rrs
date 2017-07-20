import React from 'react';
import { Nav, NavDropdown, MenuItem} from "react-bootstrap";
import { Meteor } from "meteor/meteor";
import { DYNAMICROWS } from "../../../api/collections/dynamicRows.js";

export const ActorModelingMenu = function(props) {
	
	handleSelect = (eventKey) => {
		switch(eventKey) {
			case "refreshActorList": 
				Meteor.call("createActorList", {});
			break;

			case "index":
			case "back": 
			case "createNewActor":
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
		<MenuItem eventKey="back">Back to business model</MenuItem>
		<MenuItem eventKey="refreshActorList">Refresh actor list</MenuItem>
		<MenuItem eventKey="createNewActor">Create new Actor</MenuItem>
		

	</NavDropdown>)
}
