import React from 'react';
import { Jumbotron, Button, ButtonGroup } from 'react-bootstrap';
import { createMenuCombinations } from "../../functions/advanced-menu-functions/create-menu-combinations.js";

export default class MenuCentral extends React.Component {

	handleButtonClick(e) {
		const id=e.target.id;
		console.log(e.target.value);
		switch(id) {
			case "1": Meteor.call("composeMenuCombinations", {});
			break;
		}
	}

	render() {
		return <div>
			<Jumbotron className="text-center">
		    	<h2>Menu central</h2>
		  	</Jumbotron>
		  	<ButtonGroup>
		  		<Button 
		  			id="1" bsStyle="info" bsSize="small" onClick={this.handleButtonClick}>
		  			Create combinations
		  		</Button>
		  	</ButtonGroup>
	  	</div>
	}
}
