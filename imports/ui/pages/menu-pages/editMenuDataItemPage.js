import React from 'react';
import { ListGroup, ListGroupItem, Grid, Row, Col, Alert, Button, ButtonGroup,  FormGroup, FormControl, ControlLabel} from 'react-bootstrap';
import { composeWithTracker } from 'react-komposer';
import { MENUDATAITEMS } from "../../../api/collections/menuCollections.js";
import Loading from "../../components/Loading.js";
import { RawDataRow } from "../../components/modeling-components/raw-model/rawDataRow.js";

export default class EditMenuDataItemPage extends React.Component {
	constructor(props) {
		super();

		// console.log(props[0]);

		this.state={
			menuDataItemName: props[0].label,
			menuDataItemDescription: props[0].description,
			menuDataItemType: props[0].type,
		}

		this.handleButtonClick = this.handleButtonClick.bind(this);
		this.handleNameChange = this.handleNameChange.bind(this);
		this.handleTypeChange = this.handleTypeChange.bind(this);
		this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
	}

	handleButtonClick(e) {
		const props=this.props;
		const setCurrentPage = this.props.setCurrentPage;
		const id=e.target.id;
		const menuDataItem = {};
		menuDataItem.sourceDrowId = props[0].sourceDrowId;
		menuDataItem.name = this.state.menuDataItemName;
		menuDataItem.type = this.state.menuDataItemType;
		menuDataItem.description = this.state.menuDataItemDescription;	
		
		switch(id) {
			case "1": Meteor.call("updateMenuDataItemMethod", menuDataItem)
			break;
		}
	}

	handleNameChange(e) {
		this.setState({menuDataItemName: e.target.value});
	}

	handleTypeChange(e) {
		this.setState({menuDataItemType: e.target.value});
	}

	handleDescriptionChange(e) {
		this.setState({menuDataItemDescription: e.target.value})
	}

	render() {
		return <div>
			<h3>Menu Data Item</h3>
			<ButtonGroup>
				<Button
					id="1" bsStyle="info" bsSize="small" onClick={this.handleButtonClick}>
		  			Submit menu data item
				</Button>
			</ButtonGroup>
			<FormGroup>
				<FormControl
					type="text"
					value={this.state.menuDataItemName}
					placeholder="Enter name of menu item"
					onChange={this.handleNameChange}>					
				</FormControl>
				<FormControl
					type="text"
					value={this.state.menuDataItemDescription}
					placeholder="Enter description"
					onChange={this.handleDescriptionChange}>					
				</FormControl>				
			</FormGroup>				
		</div>
	}
}
