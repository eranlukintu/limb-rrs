import React from "react";
import { ListGroup, ListGroupItem} from 'react-bootstrap';


export const MenuStateCombinationRow = function(props) {

	// console.log(props.props.props);
	const menuStateCombinationRow = props.menuStateCombinationRow;
	const setSelectedMenuCombinationId = props.props.props.setSelectedMenuCombinationId;
	
	handleSelect = function(e) {
		// console.log(menuStateCombinationRow._id);
		setSelectedMenuCombinationId(menuStateCombinationRow._id);
	}

	return <ListGroupItem onClick={this.handleSelect.bind(this)}> 
		{menuStateCombinationRow.combinationString}
	</ListGroupItem>
}