import { DOTROWS } from "../../collections/drows.js";
import { DYNAMICROWS } from '../../collections/dynamicRows.js';
import { Meteor } from 'meteor/meteor';

Meteor.publish("populateRawModel", function() {
	return DOTROWS.find({});
});

Meteor.publish("populateBusinessModel", function() {
	return DYNAMICROWS.find({});
});

