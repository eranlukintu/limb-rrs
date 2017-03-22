import { createReferenceItem } from "../structureItemFunctions.js";

export const createReferenceValues = function(numberOfValues) {
	let referenceValues = [];

	for(let i=1; i<numberOfValues + 1; i++) {
		let referenceProperties = {};
		referenceProperties.itemType = "value";
		referenceProperties.name = "value-" + i.toString();
		referenceProperties.itemParentId = "NA";
		referenceProperties.itemSourceId = "NA";

		let referenceValue = createReferenceItem(referenceProperties);
		referenceValues.push(referenceValue);
	}
	return referenceValues;
}