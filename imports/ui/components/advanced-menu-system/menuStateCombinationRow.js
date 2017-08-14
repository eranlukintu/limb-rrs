import React from "react";
import { ListGroup, ListGroupItem} from 'react-bootstrap';


export const MenuStateCombinationRow = function(props) {

	const menuStateCombinationRow = props.menuStateCombinationRow;
	// const setSelectedMenuControlRow = props.setSelectedMenuControlRow;
	const spacer = "  ";
	
	handleSelect = function(e) {
		console.log("Not functioning yet");
	}

	return <ListGroupItem onClick={this.handleSelect.bind(this)}> 
		{menuStateCombinationRow.combinationString}
	</ListGroupItem>
}