import React from 'react';
import {NavDropdown, MenuItem} from 'react-bootstrap';
import { getMenuControlStates } from '../../ui-functions/getMenuControlStates.js';
import { composeWithTracker } from 'react-komposer';
import { MENUASSOCIATIONS } from "../../../api/collections/menuCollections.js";
import Loading from "../../components/Loading.js";
import {allMenuActions} from "../menu-action-components/allMenuActions.js";
import {GenericMenuActionComponent} from "../menu-action-components/genericMenuActionComponent";

class MenuDropdown extends React.Component {
	constructor(props) {
		super(props);
		
		this.renderMenuActions = this.renderMenuActions.bind(this);
	}

	renderMenuActions(activeMenuNames, props) {
		// const setCurrentPage = this.props.setCurrentPage;
		// console.log(this.props);
		// console.log(activeMenuNames);
		const test = activeMenuNames.map(function(a) {
			return allMenuActions(a.menuDataRowLabel);
		});

		// console.log(this.props);

		return activeMenuNames.map(function(rr) {
			// console.log(props);
             return <GenericMenuActionComponent 
             	key = {rr._id}
             	currentPage = {rr.menuDataRowLabel}
             	setCurrentPage = {props.setCurrentPage}/>	            
          }); 
		
	}

	render() {
		
		const navControlStates = this.props.navControlStates;
		const menuControlStates = getMenuControlStates(...navControlStates);
		const setCurrentPage = this.props.setCurrentPage;
		const props = this.props;
		const activeMenuNames = menuAssociationItemList.filter(function(mi) {
			if(mi.menuCombinationLabel === menuControlStates) {
				return mi;
			}
		});	

		return <NavDropdown title="Actions" id="menuDropdown">
			{this.renderMenuActions(activeMenuNames, props)}
		</NavDropdown>
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

export default composeWithTracker(composer, Loading)(MenuDropdown);