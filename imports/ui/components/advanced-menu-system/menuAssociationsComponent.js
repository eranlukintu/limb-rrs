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
		const selectedMenuCombinationId = this.props.props.selectedMenuCombinationId;
		const filteredMenuAssociationsList = menuAssociationItemList.filter(function(mc) {
			if(mc.menuCombinationId === selectedMenuCombinationId) {
				return mc;
			}
		});
		// console.log(menuAssociationItemList);
		// console.log(filteredMenuAssociationsList);
		if(filteredMenuAssociationsList.length>0) {
			return (<ListGroup>
		        {filteredMenuAssociationsList.map((rr) => (
		            <MenuAssociationRow menuAssociationRow = {rr} key = {rr._id}/>
		          ))};    
		    </ListGroup>)
		}else {
			<p>No associated items yet</p>
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