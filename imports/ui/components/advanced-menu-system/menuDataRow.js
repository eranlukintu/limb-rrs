import React from "react";
import { ListGroup, ListGroupItem} from 'react-bootstrap';


export const MenuDataRow = function(props) {

	const menuDataRow = props.menuDataRow;
	const setSelectedMenuDataRow = props.setSelectedMenuDataRow;
	const spacer = "  ";

	console.log(menuDataRow);
	
	handleSelect = function(e) {
		setSelectedMenuDataRow(menuDataRow.sourceDrowId);
	}

	return <ListGroupItem onClick={this.handleSelect.bind(this)}> 
		{menuDataRow.label}
	</ListGroupItem>
}