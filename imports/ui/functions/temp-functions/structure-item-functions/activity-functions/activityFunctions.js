import { createReferenceItem } from "../structureItemFunctions.js";

export const createReferenceActivities = function(numberOfActivities) {
	let referenceActivities = [];

	for(let i=1; i<numberOfActivities + 1; i++) {
		let referenceProperties = {};
		referenceProperties.itemType = "activity";
		referenceProperties.name = "activity-" + i.toString();
		referenceProperties.crossReferenceId = "NA";
		referenceProperties.itemSourceId = "NA";

		let referenceActivity = createReferenceItem(referenceProperties);
		referenceActivities.push(referenceActivity);
	}
	return referenceActivities;
}