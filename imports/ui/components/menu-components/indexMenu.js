import React from 'react';
import { Nav, NavDropdown, MenuItem} from "react-bootstrap";

export const IndexMenu = function(props) {

	handleSelect = (eventKey) => {
		const page = eventKey;

		props.setCurrentPage("" , {page: page, props: null});
	}

	return (<NavDropdown title="Actions" onSelect={this.handleSelect} id="indexMenuDropdown">
		<MenuItem eventKey="modeling">Go to business model</MenuItem>
	</NavDropdown>)
}
