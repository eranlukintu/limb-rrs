import React from "react";
import { ListGroup, ListGroupItem} from 'react-bootstrap';


export const MenuDataRow = function(props) {

	const menuDataRow = props.menuDataRow;
	const spacer = "  ";

	return <ListGroupItem > 
		{menuDataRow.label}
		{spacer}
		{menuDataRow.description}
	</ListGroupItem>
}