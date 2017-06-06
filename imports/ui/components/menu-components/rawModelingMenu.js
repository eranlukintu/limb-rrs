import React from 'react';
import { Nav, NavDropdown, MenuItem} from "react-bootstrap";

export const RawModelingMenu = function(props) {

	handleSelect = (eventKey) => {
		const currentPage = props.currentPage;
		const currentMenu = props.menuName;
		const calculateNextPage = props.calculateNextPage;
		const nextPage = props.calculateNextPageAndMenu(eventKey, currentPage, calculateNextPage);
	}

	return (<NavDropdown title="Actions" onSelect={this.handleSelect} id="modelingMenuDropdown">
		<MenuItem eventKey="index">Go to index page</MenuItem>
		<MenuItem eventKey="createRoot">Create root</MenuItem>
	</NavDropdown>)
}
