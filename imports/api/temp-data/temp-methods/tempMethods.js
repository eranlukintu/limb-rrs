import { Meteor } from "meteor/meteor";
import { SARS } from "../temp-collections/tempCollections.js";

Meteor.methods({
	"insertSAR": function(SAR) {
		addSAR(SAR);
	}
});

addSAR = function(SAR) {
	SARS.insert({
		stakeholder: SAR.stakeholder,
		activity: SAR.activity,
		parent: SAR.stakeholder
	});
}