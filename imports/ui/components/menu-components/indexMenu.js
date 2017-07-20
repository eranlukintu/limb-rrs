import React from 'react';
import { composeWithTracker } from 'react-komposer';
import { Nav, NavDropdown, MenuItem} from "react-bootstrap";
import { DOTROWS } from "../../../api/collections/drows.js";
import Loading from "../Loading.js";

const IndexMenu = function(props) {

	handleSelect = (eventKey) => {
		// console.log(props.isInitialised);
		switch(eventKey) {
			case "createRoot": 
					Meteor.call("addRootItem", {});
				break;

			case "modeling": 
			
				const currentPage = props.currentPage;
				const currentMenu = props.menuName;
				const calculateNextPage = props.calculateNextPage;
				const calculateNextMenu = props.calculateNextMenu;
				const setCurrentPage = props.setCurrentPage;
				const modeling = props.modeling;
				const setMenuName=props.setMenuName;
				const selectedItemType = props.selectedItemType;
				props.calculateNextPageAndMenu(eventKey, 
												currentPage, 
												calculateNextPage, 
												calculateNextMenu, 
												setCurrentPage, 
												currentPage.props,
												setMenuName,
												selectedItemType);
			break;
		}
	}

	renderIndexMenu = function() {
		return (<NavDropdown title="Actions" onSelect={this.handleSelect} id="indexMenuDropdown">
			<MenuItem eventKey="modeling">Go to business model</MenuItem>
		</NavDropdown>);
	}

	return <NavDropdown title="Actions" onSelect={this.handleSelect} id="indexMenuDropdown">
			<MenuItem eventKey="modeling">Go to business model</MenuItem>
			<MenuItem eventKey="createRoot">Create root item</MenuItem>
		</NavDropdown>
}

let rawList;

const composer = (params, onData) => {
  const subscription = Meteor.subscribe('populateRawModel');

  if (subscription.ready()) {
    rawList = DOTROWS.find().fetch();
    onData(null, { rawList });
  }
};

export default composeWithTracker(composer, Loading)(IndexMenu);
