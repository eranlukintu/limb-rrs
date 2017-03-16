import { createReferenceItem } from "../structureItemFunctions.js";

export const createReferenceValues = function(numberOfValues) {
	let referenceValues = [];

	for(let i=1; i<numberOfValues + 1; i++) {
		let referenceProperties = {};
		referenceProperties.itemType = "value";
		referenceProperties.itemName = "value-" + i.toString();
		referenceProperties.itemParentId = "NA";

		let referenceValue = createReferenceItem(referenceProperties);
		referenceValues.push(referenceValue);
	}
	return referenceValues;
}