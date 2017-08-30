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
		}

	setCheckedClass(currentMenuCombinationId, selectedMenuCombinationId) {
		if(currentMenuCombinationId === selectedMenuCombinationId) {
			return "checked";
		}else {
			return "";
		}
	}

	renderMenuDataItems(menuCombinationsList) {
		// console.log(menuCombinationsList);
		const selectedMenuCombinationId = this.props.props.selectedMenuCombinationId;
		if(menuCombinationsList.length>0) {
			return (<ListGroup>
		        {menuCombinationsList.map((mc) => (
		            <MenuStateCombinationRow key={mc._id} 
		            	menuStateCombinationRow={mc}
		            	checkedClass = {this.setCheckedClass(mc._id, selectedMenuCombinationId)}
		            	props={this.props}/>
		          ))}; 
		    </ListGroup>)
		}else {
			<p>No menu items yet.</p>
		}
	}

	render() {
		return <div>			
			<h4>Menu state combinations</h4>
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