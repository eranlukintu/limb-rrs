import { DOTROWS } from "../../collections/drows.js";
import { Meteor } from 'meteor/meteor';

Meteor.publish("populateRawModel", function() {
	return DOTROWS.find({});
});

