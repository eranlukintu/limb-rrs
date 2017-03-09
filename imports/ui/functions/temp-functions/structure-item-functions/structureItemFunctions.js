import { Meteor } from "meteor/meteor";
import { Random } from 'meteor/random';
import { createSetOfUniqueRandomNumbers } from "../../random-number-functions/randomNumberFunctions.js";

const createStructureDataItem = function(properties) {
	let dataStructureItem = {};
	dataStructureItem.userId = Meteor.userId();
	dataStructureItem.itemId = Random.id();
	dataStructureItem.displayLabel = properties.displayLabel;
	dataStructureItem.itemType = properties.itemType;
	dataStructureItem.parentId = properties.itemType;
	dataStructureItem.relationshipToParent = properties.itemType;
	dataStructureItem.helpNote = properties.helpNote;
}

const createStakeholderDataItems = function(actors) {

	structureDataItems = []:
	
	actors.forEach(function(actor) {
		let properties = {};
		properties.displayLabel = actor;
		properties.itemType = "actor";
		properties.parentId = "null";
		properties.relationshipToParent = "null";
		properties.helpNote = "help note not yet implemented";

		let structureDataItem = createStructureDataItem(properties);
		structureDataItems.push(structureDataItem);

	});
}

const createStakeholderActivities = function(structureDataItemsArray) {

	let actors = structureDataItemsArray.filter(x => x.itemType = "actor");


}