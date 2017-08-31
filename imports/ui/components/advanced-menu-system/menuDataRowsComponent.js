import React from 'react';
import { ListGroup, ListGroupItem, Grid, Row, Col, Alert, Button, ButtonGroup,  FormGroup, FormControl, ControlLabel} from 'react-bootstrap';
import { composeWithTracker } from 'react-komposer';
import { MENUDATAROWS } from "../../../api/collections/menuCollections.js";
import { MENUASSOCIATIONS } from "../../../api/collections/menuCollections.js";
import Loading from "../../components/Loading.js";
import { RawDataRow } from "../../components/modeling-components/raw-model/rawDataRow.js";
import { MenuDataRow } from './menuDataRow.js';
import { MenuCheckboxDataRow } from './menuCheckboxDataRow';

class MenuDataRowsComponent extends React.Component {
	constructor(props) {
		super();
	}

	setCheckedClass(selectedMenuCombinationId, 
					menuDataRowId, 
					menuAssociationsList) {
		let checkedClass = "";

		const associatedDataRows = menuAssociationsList.filter(function(ma) {
			if(ma.menuCombinationId === selectedMenuCombinationId) {
				return ma;
			}
		});

		// console.log(associatedDataRows);
		const foundMenuDataRow = associatedDataRows.find(
									x => x.menuDataRowId === menuDataRowId);
		// console.log(menuDataRowId);
		// console.log(foundMenuDataRow);
		if(foundMenuDataRow) {
			checkedClass = "checked";
		}
		// console.log(checkedClass);
		return checkedClass;
	}	

	renderMenuDataItems(bothLists) {
		const menuDataRowList = bothLists[0];
		const menuAssociationsList = bothLists[1];
		const selectedMenuCombinationId = this.props.props.selectedMenuCombinationId;
		
		if(menuDataRowList.length>0) {
			return (<ListGroup>
		        {menuDataRowList.map((rr) => (
		            <MenuCheckboxDataRow 
		            	menuDataRow = {rr} 
		            	key = {rr._id} 
		            	checkedClass = {this.setCheckedClass(
		            				selectedMenuCombinationId,
		            				rr._id,
		            				menuAssociationsList)}
		            	props={this.props} />
		          ))};    
		    </ListGroup>)
		}else {
			<p>No menu items yet.</p>
		}
	}

	render() {
		return <div>
			<h4>Menu data row</h4>
			
			{this.renderMenuDataItems(bothLists)}
		</div>
	}
}

let menuDataRowList;
let menuAssociationsList;
let bothLists;

const composer = (params, onData) => {
  const subscription = Meteor.subscribe('populateMenuDataRows');

  if (subscription.ready()) {
    menuDataRowList = MENUDATAROWS.find().fetch();
    menuAssociationsList = MENUASSOCIATIONS.find().fetch();
    bothLists = [menuDataRowList, menuAssociationsList];
    onData(null, { bothLists });
  }
};

export default composeWithTracker(composer, Loading)(MenuDataRowsComponent);