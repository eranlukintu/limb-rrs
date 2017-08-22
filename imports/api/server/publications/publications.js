import { DOTROWS } from "../../collections/drows.js";
import { DYNAMICROWS } from '../../collections/dynamicRows.js';
import { ACTORS } from '../../collections/actors.js';
import { MENUDATAITEMS } from '../../collections/menuCollections.js';
import { MENUDATAROWS } from '../../collections/menuCollections.js';
import { MENUDATACONTROLVARIABLES } from '../../collections/menuCollections.js';
import { MENUCONTROLVARIABLESROWS } from '../../collections/menuCollections.js';
import { MENUCOMBINATIONS } from '../../collections/menuCollections.js';
import { MENUASSOCIATIONS } from '../../collections/menuCollections.js';
import { removeRedundantMenuAssociations } from '../server-functions/menu-server-functions/removeRedundantMenuAssociations.js';

import { Meteor } from 'meteor/meteor';

Meteor.publish("populateRawModel", function() {
	return DOTROWS.find({});
});

Meteor.publish("populateBusinessModel", function() {
	return DYNAMICROWS.find({});
});

Meteor.publish("populateActorModel", function() {
	return ACTORS.find({});
});

Meteor.publish("populateMenuItems", function() {
	return MENUDATAITEMS.find({});
});

Meteor.publish("populateMenuDataRows", function() {	
	return [
		MENUDATAROWS.find({}),
		MENUASSOCIATIONS.find({})
		];
});

Meteor.publish("populateMenuControlItems", function() {
	return MENUDATACONTROLVARIABLES.find({});
});

Meteor.publish("populateMenuControlRows", function() {	
	return MENUCONTROLVARIABLESROWS.find({}, {sort: {category: 1}});
});

Meteor.publish("populateMenuCombinationRows", function() {	
	return MENUCOMBINATIONS.find({});
});

Meteor.publish("populateMenuAssociationRows", function() {	
	removeRedundantMenuAssociations();
	return MENUASSOCIATIONS.find({});
});
