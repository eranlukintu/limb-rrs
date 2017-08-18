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
	
	renderMenuDataItems(menuCombinationsList) {
		// console.log(menuCombinationsList);
		if(menuCombinationsList.length>0) {
			return (<ListGroup>
		        {menuCombinationsList.map((mc) => (
		            <MenuStateCombinationRow key={mc._id} menuStateCombinationRow={mc} props={this.props}/>
		          ))}; 
		    </ListGroup>)
		}else {
			<Alert bsStyle="warning">No menu items yet.</Alert>
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