import { createReferenceItem } from "../structureItemFunctions.js";

export const createReferenceActors = function(numberOfActors) {
	let referenceActors = [];

	for(let i=1; i<numberOfActors + 1; i++) {
		let referenceProperties = {};
		referenceProperties.itemType = "actor";
		referenceProperties.name = "actor-" + i.toString();
		referenceProperties.itemDomain = setItemDomain(i, numberOfActors);
		referenceProperties.itemParentId = "NA";
		referenceProperties.itemSourceId = "NA";

		let referenceActor = createReferenceItem(referenceProperties);
		referenceActors.push(referenceActor);
	}
	return referenceActors;
}

const setItemDomain = function(i, numberOfActors) {
	let itemDomain;

	switch(i) {
		case 1: itemDomain = "internal";
		break;

		case numberOfActors: itemDomain = "competitive";
		break;

		default: itemDomain = "external";
	}

	return itemDomain;
}