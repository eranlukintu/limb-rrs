import React from "react";
import { ListGroup, ListGroupItem} from 'react-bootstrap';


export const MenuControlRow = function(props) {

	console.log(props);
	const menuControlRow = props.menuControlRow;
	const setSelectedMenuControlRowId = props.props.setSelectedMenuControlRowId;
	const spacer = "  ";
	
	handleSelect = function(e) {
		setSelectedMenuControlRowId(menuControlRow.sourceDrowId);
	}

	return <ListGroupItem onClick={this.handleSelect.bind(this)}> 
		{menuControlRow.label}
		{spacer}
		{menuControlRow.category}
	</ListGroupItem>
}