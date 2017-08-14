import React from 'react';
import { Jumbotron, Button, ButtonGroup, ButtonToolbar } from 'react-bootstrap';
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

			case "3": setCurrentPage("", {page: "menuDataRowsPage", props: props});
			break;

			case "4": setCurrentPage("", {page: "menuControlVariablesItemsPage", props: props});
			break;

			case "5": setCurrentPage("", {page: "menuControlItemsRowsPage", props: props});
			break;

			case "6": setCurrentPage("", {page: "menuAssociationsPage", props: props});
			break;
		}
	}

	render() {
		
		return <div>
			<Jumbotron className="text-center">
		    	<h2>Menu central</h2>
		  	</Jumbotron>
		  	<ButtonToolbar>
		  		<ButtonGroup>		  		
		  		<Button 
		  			id="2" bsStyle="info" bsSize="small" onClick={this.handleButtonClick}>
		  			Create menu item
		  		</Button>
		  		<Button 
		  			id="3" bsStyle="info" bsSize="small" onClick={this.handleButtonClick}>
		  			Show menu data rows
		  		</Button>
		  		<Button 
		  			id="4" bsStyle="info" bsSize="small" onClick={this.handleButtonClick}>
		  			Create menu control variable
		  		</Button>
		  		<Button 
		  			id="5" bsStyle="info" bsSize="small" onClick={this.handleButtonClick}>
		  			Menu control items rows
		  		</Button>
		  		<Button 
		  			id="1" bsStyle="info" bsSize="small" onClick={this.handleButtonClick}>
		  			Create combinations
		  		</Button>
		  		<Button 
		  			id="6" bsStyle="info" bsSize="small" onClick={this.handleButtonClick}>
		  			Menu associations
		  		</Button>
		  	</ButtonGroup>
		  	</ButtonToolbar>		  	
	  	</div>
	}
}
