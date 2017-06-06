import React from 'react';
import { Nav, NavDropdown, MenuItem} from "react-bootstrap";

export const ModelingMenu = function(props) {

	handleSelect = (eventKey) => {
		const page = eventKey;
		props.setCurrentPage("" , {page: page, props: {props}});
		const menuName = chooseMenuName(eventKey);
		props.setMenuName(menuName);
	}

	chooseMenuName = (eventKey) => {
		switch(eventKey) {
			case "index": return "indexMenu";
			break;

			case "modelingWorkPage": return "modelingWorkPageMenu";
			break

		default: return "NA";
		}
	}

	return (<NavDropdown title="Actions" onSelect={this.handleSelect} id="modelingMenuDropdown">
		<MenuItem eventKey="index">Go to index page</MenuItem>
		<MenuItem eventKey="modelingWorkPage">Go to modeling work page</MenuItem>
	</NavDropdown>)
}