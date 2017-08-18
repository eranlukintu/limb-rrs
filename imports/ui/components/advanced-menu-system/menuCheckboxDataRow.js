import React from "react";
import { ListGroup, ListGroupItem, Checkbox} from 'react-bootstrap';


export const MenuCheckboxDataRow = function(props) {

	const menuDataRow = props.menuDataRow
	const setSelectedMenuDataRowId = props.props.props.setSelectedMenuDataRowId;

	handleChange = function() {
		setSelectedMenuDataRowId(menuDataRow._id);
		// console.log(props);
	}

	return <ListGroupItem > 
		<Checkbox onChange={this.handleChange}>
			{menuDataRow.label}
		</Checkbox>
	</ListGroupItem>
}