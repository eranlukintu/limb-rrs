import { Meteor } from "meteor/meteor";
import { combinedSummaryData } from "./combinedSummaryData.js";

Meteor.publish('combinedSummaryData' function() {
	return combinedSummaryData;
});