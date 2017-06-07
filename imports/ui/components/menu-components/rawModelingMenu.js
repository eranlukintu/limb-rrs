import React from 'react';
import { Nav, NavDropdown, MenuItem} from "react-bootstrap";

export const RawModelingMenu = function(props) {

	handleSelect = (eventKey) => {
		switch(eventKey) {
			case "createRoot": return console.log("Create root function");
			break;

			case "index":
			case "back": console.log(eventKey);
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
		<MenuItem eventKey="back">Go back to modeling page</MenuItem>
		<MenuItem eventKey="createRoot">Create root</MenuItem>
	</NavDropdown>)
}
