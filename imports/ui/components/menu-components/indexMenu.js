import React from 'react';
import { Nav, NavDropdown, MenuItem} from "react-bootstrap";

export const IndexMenu = function(props) {

	handleSelect = (eventKey) => {
		const currentPage = props.currentPage;
		const currentMenu = props.menuName;
		const calculateNextPage = props.calculateNextPage;
		const nextPage = props.calculateNextPageAndMenu(eventKey, currentPage, calculateNextPage);
	}

	return (<NavDropdown title="Actions" onSelect={this.handleSelect} id="indexMenuDropdown">
		<MenuItem eventKey="modeling">Go to business model</MenuItem>
	</NavDropdown>)
}
