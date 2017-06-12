import React from 'react';
import { Nav, NavDropdown, MenuItem} from "react-bootstrap";

export const UnInitialisedIndexMenu = function(props) {

	handleSelect = (eventKey) => {
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
	}

	return (<NavDropdown title="Actions" onSelect={this.handleSelect} id="modelingMenuDropdown">
		<MenuItem eventKey="initialise">Initialise application</MenuItem>
	</NavDropdown>)
}