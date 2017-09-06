import React from 'react';
import {NavDropdown, MenuItem} from 'react-bootstrap';
import { getMenuControlStates } from '../../ui-functions/getMenuControlStates.js';
import { composeWithTracker } from 'react-komposer';
import { MENUASSOCIATIONS } from "../../../api/collections/menuCollections.js";
import Loading from "../../components/Loading.js";

class MenuDropdown extends React.Component {
	render() {
		
		const navControlStates = this.props.navControlStates;
		const menuControlStates = getMenuControlStates(...navControlStates);
		// console.log(menuAssociationItemList);
		activeMenuNames = menuAssociationItemList.filter(function(mi) {
			if(mi.menuCombinationLabel === menuControlStates) {
				return mi;
			}
		});

		console.log(activeMenuNames);

		return <NavDropdown title="Actions" id="menuDropdown">
			<MenuItem eventKey="temp">Temp</MenuItem>
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