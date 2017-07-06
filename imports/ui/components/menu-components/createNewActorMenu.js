import React from 'react';
import { Nav, NavDropdown, MenuItem} from "react-bootstrap";
import { Meteor } from "meteor/meteor";

export const CreateNewActorMenu = function(props) {
	
	handleSelect = (eventKey) => {
		switch(eventKey) {
			case "submit": 
				console.log(props);
			break;

			case "index":
			case "back": 
				const currentPage = props.currentPage;
				const currentMenu = props.menuName;
				const calculateNextPage = props.calculateNextPage;
				const calculateNextMenu = props.calculateNextMenu;
				const setCurrentPage = props.setCurrentPage;
				const modeling = props.modeling;
				const setMenuName=props.setMenuName;
				props.calculateNextPageAndMenu(eventKey, 
												currentPage, 
												calculateNextPage, 
												calculateNextMenu, 
												setCurrentPage, 
												currentPage.props,
												setMenuName);
			break;
		}
		
	}

	return (<NavDropdown title="Actions" onSelect={this.handleSelect} id="modelingMenuDropdown">
		<MenuItem eventKey="index">Go to index page</MenuItem>
		<MenuItem eventKey="back">Back to actor model</MenuItem>
		<MenuItem eventKey="submit">Submit details</MenuItem>
		

	</NavDropdown>)
}