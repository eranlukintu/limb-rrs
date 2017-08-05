import { DOTROWS } from "../../collections/drows.js";
import { DYNAMICROWS } from '../../collections/dynamicRows.js';
import { ACTORS } from '../../collections/actors.js';
import { MENUDATAITEMS } from '../../collections/menuCollections.js';
import { MENUDATAROWS } from '../../collections/menuCollections.js';
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
	return MENUDATAROWS.find({});
});
