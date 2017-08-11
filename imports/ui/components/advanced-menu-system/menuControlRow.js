import React from "react";
import { ListGroup, ListGroupItem} from 'react-bootstrap';


export const MenuControlRow = function(props) {

	const menuControlRow = props.menuControlRow;
	// const setSelectedMenuControlRow = props.setSelectedMenuControlRow;
	const spacer = "  ";
	
	handleSelect = function(e) {
		setSelectedMenuControlRow(menuControlRow.sourceDrowId);
	}

	return <ListGroupItem onClick={this.handleSelect.bind(this)}> 
		{menuControlRow.label}
		{spacer}
		{menuControlRow.description}
		{spacer}
		{menuControlRow.category}
	</ListGroupItem>
}