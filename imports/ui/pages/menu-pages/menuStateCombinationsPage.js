import React from 'react';
import { ListGroup, ListGroupItem, Grid, Row, Col, Alert, Button, ButtonGroup,  FormGroup, FormControl, ControlLabel} from 'react-bootstrap';
import { composeWithTracker } from 'react-komposer';
import { MENUCOMBINATIONS } from "../../../api/collections/menuCollections.js";
import Loading from "../../components/Loading.js";
import { RawDataRow } from "../../components/modeling-components/raw-model/rawDataRow.js";
import { MenuControlRow } from "../../components/advanced-menu-system/menuControlRow.js";
import { MenuStateCombinationRow } from '../../components/advanced-menu-system/menuStateCombinationRow.js';

class MenuStateCombinationsPage extends React.Component {
	constructor(props) {
		super();

		this.state={
			menuControlItemName: '',
			menuControlItemDescription: 'No description added yet',
			menuControlItemType: 'menuControlItem',
			menuControlItemCategory: 'noCategory'
		}

		this.renderMenuDataItems = this.renderMenuDataItems.bind(this);
		this.handleButtonClick = this.handleButtonClick.bind(this);
		this.handleNameChange = this.handleNameChange.bind(this);
		this.handleTypeChange = this.handleTypeChange.bind(this);
		this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
		this.handleCategoryChange = this.handleCategoryChange.bind(this);
	}

	handleButtonClick(e) {
		const props=this.props;
		const setCumcentPage = this.props.setCumcentPage;
		const id=e.target.id;
		const menuControlItem = {};
		menuControlItem.name = this.state.menuControlItemName;
		menuControlItem.type = this.state.menuControlItemType;
		menuControlItem.description = this.state.menuControlItemDescription;
		menuControlItem.category = this.state.menuControlItemCategory;	
		
		switch(id) {
			case "1": console.log("Not yet functioning");
			break;

			case "2": setCumcentPage("", {page: "menuCentral", props: props});
			break;

			case "3": Meteor.call('createMenuControlItemMethod', menuControlItem);
			break;
		}
	}

	handleNameChange(e) {
		this.setState({menuControlItemName: e.target.value});
	}

	handleTypeChange(e) {
		this.setState({menuControlItemType: e.target.value});
	}

	handleDescriptionChange(e) {
		this.setState({menuControlItemDescription: e.target.value})
	}

	handleCategoryChange(e) {
		this.setState({menuControlItemCategory: e.target.value})
	}

	renderMenuDataItems(menuCombinationsList) {
		// console.log(menuCombinationsList);
		if(menuCombinationsList.length>0) {
			return (<ListGroup>
		        {menuCombinationsList.map((mc) => (
		            <MenuStateCombinationRow key={mc._id} menuStateCombinationRow={mc}/>
		          ))}; 
		    </ListGroup>)
		}else {
			<Alert bsStyle="warning">No menu items yet.</Alert>
		}
	}

	render() {
		return <div>
			<h4>Menu state combinations</h4>
			<ButtonGroup>
				<Button
					id="1" bsStyle="info" bsSize="small" onClick={this.handleButtonClick}>
		  			Edit menu control item
				</Button>
				<Button
					id="2" bsStyle="info" bsSize="small" onClick={this.handleButtonClick}>
		  			Menu central
				</Button>
				<Button
					id="3" bsStyle="info" bsSize="small" onClick={this.handleButtonClick}>
		  			Add menu control item
				</Button>
			</ButtonGroup>	
			
			{this.renderMenuDataItems(menuCombinationsList)}
		</div>
	}
}

let menuCombinationsList;

const composer = (params, onData) => {
  const subscription = Meteor.subscribe('populateMenuCombinationRows');

  if (subscription.ready()) {
    menuCombinationsList = MENUCOMBINATIONS.find().fetch();
    onData(null, { menuCombinationsList });
  }
};

export default composeWithTracker(composer, Loading)(MenuStateCombinationsPage);