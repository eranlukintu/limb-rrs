import React from 'react';
import { ListGroup, ListGroupItem, Grid, Row, Col, Alert, Button, ButtonGroup,  FormGroup, FormControl, ControlLabel} from 'react-bootstrap';
import { composeWithTracker } from 'react-komposer';
import { MENUDATAROWS } from "../../../api/collections/menuCollections.js";
import Loading from "../../components/Loading.js";
import { RawDataRow } from "../../components/modeling-components/raw-model/rawDataRow.js";
import { MenuDataRow } from './menuDataRow.js';
import { MenuCheckboxDataRow } from './menuCheckboxDataRow';

class MenuDataRowsComponent extends React.Component {
	constructor(props) {
		super();
	}

	

	renderMenuDataItems(menuDataItemList) {
		// console.log(menuDataItemList);
		if(menuDataItemList.length>0) {
			return (<ListGroup>
		        {menuDataItemList.map((rr) => (
		            <MenuCheckboxDataRow menuDataRow = {rr} key = {rr._id} />
		          ))};    
		    </ListGroup>)
		}else {
			<Alert bsStyle="warning">No menu items yet.</Alert>
		}
	}

	render() {
		return <div>
			<h4>MenuItem</h4>
			
			{this.renderMenuDataItems(menuDataItemList)}
		</div>
	}
}

let menuDataItemList;

const composer = (params, onData) => {
  const subscription = Meteor.subscribe('populateMenuDataRows');

  if (subscription.ready()) {
    menuDataItemList = MENUDATAROWS.find().fetch();
    onData(null, { menuDataItemList });
  }
};

export default composeWithTracker(composer, Loading)(MenuDataRowsComponent);