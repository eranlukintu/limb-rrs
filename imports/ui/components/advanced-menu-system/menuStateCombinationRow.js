import React from "react";
import { ListGroup, ListGroupItem, Checkbox} from 'react-bootstrap';


export const MenuStateCombinationRow = function(props) {

	// console.log(props.props.props);
	const menuStateCombinationRow = props.menuStateCombinationRow;
	const setSelectedMenuCombinationId = props.props.props.setSelectedMenuCombinationId;
	const checkedClass = props.checkedClass;
	// console.log(props.checkedClass);
	
	handleSelect = function(e) {
		// console.log(menuStateCombinationRow._id);
		setSelectedMenuCombinationId(menuStateCombinationRow._id);
	}

	return <ListGroupItem > 
		<Checkbox checked = {checkedClass} onClick={this.handleSelect.bind(this)}>
			{menuStateCombinationRow.combinationString}
		</Checkbox>		
	</ListGroupItem>
}