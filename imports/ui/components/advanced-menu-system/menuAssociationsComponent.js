import React from 'react';
import { ListGroup, ListGroupItem, Grid, Row, Col, Alert, Button, ButtonGroup,  FormGroup, FormControl, ControlLabel} from 'react-bootstrap';
import { composeWithTracker } from 'react-komposer';
import { MENUASSOCIATIONS } from "../../../api/collections/menuCollections.js";
import Loading from "../../components/Loading.js";
import { RawDataRow } from "../../components/modeling-components/raw-model/rawDataRow.js";
import { MenuDataRow } from './menuDataRow.js';
import { MenuCheckboxDataRow } from './menuCheckboxDataRow';
import { MenuAssociationRow } from './menuAssociationRow.js';

class MenuAssociationComponent extends React.Component {
	constructor(props) {
		super();
	}	

	renderMenuDataItems(menuAssociationItemList) {
		// console.log(menuAssociationItemList);
		if(menuAssociationItemList.length>0) {
			return (<ListGroup>
		        {menuAssociationItemList.map((rr) => (
		            <MenuAssociationRow menuAssociationRow = {rr} key = {rr._id}/>
		          ))};    
		    </ListGroup>)
		}else {
			<Alert bsStyle="warning">No menu items yet.</Alert>
		}
	}

	render() {
		return <div>
			<h4>Associated items</h4>			
			{this.renderMenuDataItems(menuAssociationItemList)}
		</div>
	}
}

let menuAssociationItemList;

const composer = (params, onData) => {
  const subscription = Meteor.subscribe('populateMenuAssociationRows');

  if (subscription.ready()) {
    menuAssociationItemList = MENUASSOCIATIONS.find().fetch();
    onData(null, { menuAssociationItemList });
  }
};

export default composeWithTracker(composer, Loading)(MenuAssociationComponent);