import React from 'react';
import { Nav, NavDropdown, MenuItem} from "react-bootstrap";

export const RawModelingMenu = function(props) {

	handleSelect = (eventKey) => {
		const page = choosePageName(eventKey);
		props.setCurrentPage("" , {page: page, props: null});
		const menuName = chooseMenuName(eventKey);
		props.setMenuName(menuName);
	}

	

	choosePageName = (eventKey) => {
		switch(eventKey) {
			case "index": return "index";
			break;

			default: return props.currentPage;
		}
	}

	return (<NavDropdown title="Actions" onSelect={this.handleSelect} id="modelingMenuDropdown">
		<MenuItem eventKey="index">Go to index page</MenuItem>
		<MenuItem eventKey="createRoot">Create root</MenuItem>
	</NavDropdown>)
}

chooseMenuName = (eventKey) => {
	switch(eventKey) {
		case "index": return "indexMenu";
		break;

		case "createRoot": return "rawMenu";
		break

	default: return props.menuName;
	}
}