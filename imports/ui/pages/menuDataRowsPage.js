import React from 'react';
import { ListGroup, ListGroupItem, Grid, Row, Col, Alert, Button, ButtonGroup,  FormGroup, FormControl, ControlLabel} from 'react-bootstrap';
import { composeWithTracker } from 'react-komposer';
import { MENUDATAITEMS } from "../../api/collections/menuCollections.js";
import { MENUDATAROWS } from "../../api/collections/menuCollections.js";
import Loading from "../components/Loading.js";
import { RawDataRow } from "../components/modeling-components/raw-model/rawDataRow.js";
import { MenuDataRow } from "../components/advanced-menu-system/menuDataRow.js";

class MenuDataRowsPage extends React.Component {
	constructor(props) {
		super();

		this.renderMenuDataItems = this.renderMenuDataItems.bind(this);
	}

	renderMenuDataItems(menuDataItemList) {
		console.log(menuDataItemList);
		if(menuDataItemList.length>0) {
			return (<ListGroup>
		        {menuDataItemList.map((rr) => (
		            <MenuDataRow menuDataRow = {rr} key = {rr._id}/>
		          ))};    
		    </ListGroup>)
		}else {
			<Alert bsStyle="warning">No menu items yet.</Alert>
		}
	}

	render() {
		return <div>
			<h3>Menu data row</h3>			
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

export default composeWithTracker(composer, Loading)(MenuDataRowsPage);