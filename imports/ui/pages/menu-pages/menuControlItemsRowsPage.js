import React from 'react';
import { ListGroup, ListGroupItem, Grid, Row, Col, Alert, Button, ButtonGroup,  FormGroup, FormControl, ControlLabel} from 'react-bootstrap';
import { composeWithTracker } from 'react-komposer';
import { MENUCONTROLVARIABLESROWS } from "../../../api/collections/menuCollections.js";
import Loading from "../../components/Loading.js";
import { RawDataRow } from "../../components/modeling-components/raw-model/rawDataRow.js";
import { MenuControlRow } from "../../components/advanced-menu-system/menuControlRow.js";

class MenuControlItemsRowsPage extends React.Component {
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
		const setCurrentPage = this.props.setCurrentPage;
		const id=e.target.id;
		const menuControlItem = {};
		menuControlItem.name = this.state.menuControlItemName;
		menuControlItem.type = this.state.menuControlItemType;
		menuControlItem.description = this.state.menuControlItemDescription;
		menuControlItem.category = this.state.menuControlItemCategory;	
		
		switch(id) {
			case "1": console.log("Not yet functioning");
			break;

			case "2": setCurrentPage("", {page: "menuCentral", props: props});
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

	renderMenuDataItems(menuControlVariableList) {
		// console.log(menuControlVariableList);
		if(menuControlVariableList.length>0) {
			return (<ListGroup>
		        {menuControlVariableList.map((rr) => (
		            <MenuControlRow menuControlRow = {rr} key = {rr._id} props={this.props}/>
		          ))};    
		    </ListGroup>)
		}else {
			<Alert bsStyle="warning">No menu items yet.</Alert>
		}
	}

	render() {
		return <div>
			<h3>Menu control items rows</h3>
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
			<FormGroup>
				<FormControl
					type="text"
					value={this.state.menuControlItemName}
					placeholder="Enter name of menu control item"
					onChange={this.handleNameChange}>					
				</FormControl>
				<FormControl
					type="text"
					value={this.state.menuControlItemDescription}
					placeholder="Enter description"
					onChange={this.handleDescriptionChange}>					
				</FormControl>			
			</FormGroup>				
			<FormGroup onChange={this.handleTypeChange}>
				<FormControl componentClass="select" placeholder="select">
			        <option value="menuControlItem" >Menu control item item</option>
			        <option value="other" >Other</option>
			      </FormControl>
			</FormGroup>
			<FormGroup onChange={this.handleCategoryChange}>
				<FormControl componentClass="select" placeholder="select">
			        <option value="role" >Role category</option>
			        <option value="initialisation" >Initialisation category</option>
			        <option value="page" >Page category</option>
			        <option value="graphical" >Graphical category</option>
			        <option value="selected" >Selected category</option>
			      </FormControl>
			</FormGroup>
			
			{this.renderMenuDataItems(menuControlVariableList)}
		</div>
	}
}

let menuControlVariableList;

const composer = (params, onData) => {
  const subscription = Meteor.subscribe('populateMenuControlRows');

  if (subscription.ready()) {
    menuControlVariableList = MENUCONTROLVARIABLESROWS.find().fetch();
    onData(null, { menuControlVariableList });
  }
};

export default composeWithTracker(composer, Loading)(MenuControlItemsRowsPage);