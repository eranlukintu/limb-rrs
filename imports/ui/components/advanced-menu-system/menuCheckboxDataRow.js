import React from "react";
import { ListGroup, ListGroupItem, Checkbox} from 'react-bootstrap';


export const MenuCheckboxDataRow = function(props) {

	const menuDataRow = props.menuDataRow
	const setSelectedMenuDataRowId = props.props.props.setSelectedMenuDataRowId;
	const updateMenuAssociations = props.props.props.updateMenuAssociations;
	const selectedMenuCombinationId = props.props.props.selectedMenuCombinationId;
	const previousMenuDataRowId = props.props.props.selectedMenuDataRowId;
	const checkedClass = props.checkedClass;
	// console.log(checkedClass);
	// console.log(menuDataRow);


	handleChange = function() {
		// console.log("previous", previousMenuDataRowId)
		updateMenuAssociations(selectedMenuCombinationId, 
								menuDataRow._id, 
								previousMenuDataRowId);
		// console.log(props);
	}

	return <ListGroupItem > 
		<Checkbox checked={checkedClass} onChange={this.handleChange}>
			{menuDataRow.label}
		</Checkbox>
	</ListGroupItem>
}