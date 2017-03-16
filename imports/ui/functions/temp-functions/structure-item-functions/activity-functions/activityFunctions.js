import { createReferenceItem } from "../structureItemFunctions.js";

export const createReferenceActivities = function(numberOfActivities) {
	let referenceActivities = [];

	for(let i=1; i<numberOfActivities + 1; i++) {
		let referenceProperties = {};
		referenceProperties.itemType = "activity";
		referenceProperties.itemName = "activity-" + i.toString();
		referenceProperties.itemParentId = "NA";

		let referenceActivity = createReferenceItem(referenceProperties);
		referenceActivities.push(referenceActivity);
	}
	return referenceActivities;
}