import React from 'react';
import { Nav, NavDropdown, MenuItem} from "react-bootstrap";

export const IndexMenu = function(props) {

	handleSelect = (eventKey) => {
		const page = eventKey;
		props.setCurrentPage("" , {page: page, props: null});
		const menuName = chooseMenuName(eventKey);
		props.setMenuName(menuName);
	}

	chooseMenuName = (eventKey) => {
		switch(eventKey) {
			case "modeling": return "modelingMenu";
			break;

		default: return "NA";
		}
	}

	return (<NavDropdown title="Actions" onSelect={this.handleSelect} id="indexMenuDropdown">
		<MenuItem eventKey="modeling">Go to business model</MenuItem>
	</NavDropdown>)
}