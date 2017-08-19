import React from "react";
import { ListGroup, ListGroupItem, Checkbox} from 'react-bootstrap';


export const MenuCheckboxDataRow = function(props) {

	const menuDataRow = props.menuDataRow
	const setSelectedMenuDataRowId = props.props.props.setSelectedMenuDataRowId;
	const updateMenuAssociations = props.props.props.updateMenuAssociations;
	const selectedMenuCombinationId = props.props.props.selectedMenuCombinationId;

	handleChange = function() {
		updateMenuAssociations(selectedMenuCombinationId, menuDataRow._id);
		// console.log(props);
	}

	return <ListGroupItem > 
		<Checkbox onChange={this.handleChange}>
			{menuDataRow.label}
		</Checkbox>
	</ListGroupItem>
}