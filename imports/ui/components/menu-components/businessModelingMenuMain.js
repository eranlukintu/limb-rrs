import React from 'react';
import { Nav, NavDropdown, MenuItem} from "react-bootstrap";
import { Meteor } from "meteor/meteor";
import { DYNAMICROWS } from "../../../api/collections/dynamicRows.js";
import { BusinessModelingMenuSelected } from "./businessModelingMenu_selected.js";
import { BusinessModelingMenuUnselected } from "./businessModelingMenu_unselected.js";
 
export const BusinessModelingMenuMain = function(props) {

	renderMenu = function(selectedItemType) {
		switch(selectedItemType) {
			case "actor": return <BusinessModelingMenuSelected />;
			break;

			case "null": return <BusinessModelingMenuUnselected />
			break;

			default: return <BusinessModelingMenuUnselected />
		}
	}
		

	return {renderMenu()}
}