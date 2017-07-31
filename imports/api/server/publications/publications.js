import { DOTROWS } from "../../collections/drows.js";
import { DYNAMICROWS } from '../../collections/dynamicRows.js';
import { ACTORS } from '../../collections/actors.js';
import { MENUITEMS } from '../../collections/menuCollections.js';
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
	return MENUITEMS.find({});
});
