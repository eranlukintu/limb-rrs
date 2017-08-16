import React from "react";
import { ListGroup, ListGroupItem, Checkbox} from 'react-bootstrap';


export const MenuCheckboxDataRow = function(props) {

	const menuDataRow = props.menuDataRow

	return <ListGroupItem > 
		<Checkbox>
			{menuDataRow.label}
		</Checkbox>
	</ListGroupItem>
}