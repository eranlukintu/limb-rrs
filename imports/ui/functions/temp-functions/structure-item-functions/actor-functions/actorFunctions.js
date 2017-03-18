import { createReferenceItem } from "../structureItemFunctions.js";

export const createReferenceActors = function(numberOfActors) {
	let referenceActors = [];

	for(let i=1; i<numberOfActors + 1; i++) {
		let referenceProperties = {};
		referenceProperties.itemType = "actor";
		referenceProperties.itemName = "actor-" + i.toString();
		referenceProperties.itemParentId = "NA";
		referenceProperties.itemSourceId = "NA";

		let referenceActor = createReferenceItem(referenceProperties);
		referenceActors.push(referenceActor);
	}
	return referenceActors;
}