import React from "react";
import { ListGroup, ListGroupItem} from 'react-bootstrap';


export const MenuAssociationRow = function(props) {

	// console.log(props.props.props);
	const menuAssociationRow = props.menuAssociationRow;

	return <ListGroupItem> 
		{menuAssociationRow.menuDataRowLabel}
	</ListGroupItem>
}