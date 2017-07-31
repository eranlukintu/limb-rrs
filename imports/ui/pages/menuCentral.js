import React from 'react';
import { Jumbotron, Button, ButtonGroup } from 'react-bootstrap';
import { createMenuCombinations } from "../../functions/advanced-menu-functions/create-menu-combinations.js";

export default class MenuCentral extends React.Component {
	constructor(props) {
		super();
		this.handleButtonClick = this.handleButtonClick.bind(this);
	}

	handleButtonClick(e) {
		const props=this.props;
		const setCurrentPage = this.props.setCurrentPage;
		const id=e.target.id;
		// console.log(e.target);
		// console.log(props);
		switch(id) {
			case "1": Meteor.call("composeMenuCombinations", {});
			break;

			case "2": setCurrentPage("", {page: "menuDataItemPage", props: props});
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
		  		<Button 
		  			id="2" bsStyle="info" bsSize="small" onClick={this.handleButtonClick}>
		  			Create menu item
		  		</Button>
		  	</ButtonGroup>
	  	</div>
	}
}
