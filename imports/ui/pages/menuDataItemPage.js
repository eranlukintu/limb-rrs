import React from 'react';
import { ListGroup, ListGroupItem, Grid, Row, Col, Alert, Button, ButtonGroup,  FormGroup, FormControl, ControlLabel} from 'react-bootstrap';
import { composeWithTracker } from 'react-komposer';
import { MENUITEMS } from "../../api/collections/menuCollections.js";
import Loading from "../components/Loading.js";

class MenuDataItemPage extends React.Component {
	constructor(props) {
		super();

		this.state={
			menuDataItemName: '',
			menuDataItemType: 'menuDataItem',
		}

		this.renderMenuDataItems = this.renderMenuDataItems.bind(this);
		this.handleButtonClick = this.handleButtonClick.bind(this);
		this.handleNameChange = this.handleNameChange.bind(this);
		this.handleTypeChange = this.handleTypeChange.bind(this);
	}

	handleButtonClick(e) {
		const props=this.props;
		const setCurrentPage = this.props.setCurrentPage;
		const id=e.target.id;
		const menuDataItem = {};
		menuDataItem.name = this.state.menuDataItemName;
		menuDataItem.type = this.state.menuDataItemType;		
		
		switch(id) {
			case "1": Meteor.call("createMenuItemMethod", menuDataItem);
			break;
		}
	}

	handleNameChange(e) {
		this.setState({menuDataItemName: e.target.value});
	}

	handleTypeChange(e) {
		console.log(e.target.value);
		this.setState({menuDataItemType: e.target.value});
	}

	renderMenuDataItems(menuDataItemList) {
		// console.log(menuDataItemList);
		if(menuDataItemList.length>0) {
			return (<ListGroup>
		        {menuDataItemList.map((rr) => (
		            <RawDataRow rawDataRow = {rr} key = {rr._id} calculateIndentLevel={props.calculateIndentLevel}/>
		          ))};    
		    </ListGroup>)
		}else {
			<Alert bsStyle="warning">No menu items yet.</Alert>
		}
	}

	render() {
		return <div>
			<h3>MenuItem</h3>
			<ButtonGroup>
				<Button
					id="1" bsStyle="info" bsSize="small" onClick={this.handleButtonClick}>
		  			Add menu data item
				</Button>
			</ButtonGroup>
			<FormGroup>
				<FormControl
					type="text"
					value={this.state.menuDataItemName}
					placeholder="Enter name of menu item"
					onChange={this.handleNameChange}>					
				</FormControl>				
			</FormGroup>				
			<FormGroup onChange={this.handleTypeChange}>
				<FormControl componentClass="select" placeholder="select">
			        <option value="menuDataItem" >Menu data item</option>
			        <option value="other" >Other</option>
			      </FormControl>
			</FormGroup>
			{this.renderMenuDataItems(menuDataItemList)}
		</div>
	}
}

let menuDataItemList;

const composer = (params, onData) => {
  const subscription = Meteor.subscribe('populateMenuItems');

  if (subscription.ready()) {
    menuDataItemList = MENUITEMS.find().fetch();
    onData(null, { menuDataItemList });
  }
};

export default composeWithTracker(composer, Loading)(MenuDataItemPage);