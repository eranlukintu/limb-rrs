import { Meteor } from "meteor/meteor";
import { Random } from 'meteor/random';
import { createSetOfUniqueRandomNumbers } from "../../random-number-functions/randomNumberFunctions.js";
import { createRandomNumberWithinRange } from "../../random-number-functions/randomNumberFunctions.js";
import { createHierarchyArray } from "../../../functions/createHierarchyArray.js";

export const createStructureItems = function(actors) {
	let SI_1 = createActorDataItems(actors);
	let SI_2 = createActivitiesForActors(SI_1);

	return SI_2;
}

const createStructureItem = function(properties) {
	let structureItem = {};
	structureItem.userId = Meteor.userId();
	structureItem.itemId = Random.id();
	structureItem.name = properties.name;
	structureItem.itemType = properties.itemType;
	structureItem.parentId = properties.parentId;
	structureItem.relationshipToParent = properties.itemType;
	structureItem.helpNote = properties.helpNote;

	return structureItem;
}

const createRootItem = function() {
	let properties = {};
		properties.name = "root";
		properties.itemType = "root";
		properties.parentId = "null";
		properties.relationshipToParent = "null";
		properties.helpNote = "help note not yet implemented";

	let rootItem = createStructureItem(properties);
	return rootItem;
}

const createActorDataItems = function(actors) {

	let rootArray = [];
	let rootItem = createRootItem();
	rootArray.push(rootItem);
	let SDI_A = [];
	
	actors.forEach(function(actor) {
		let properties = {};
		properties.name = actor;
		properties.itemType = "actor";
		properties.parentId = rootItem.itemId;
		properties.relationshipToParent = "belongsTo";
		properties.helpNote = "help note not yet implemented";

		let structureItem = createStructureItem(properties);
		SDI_A.push(structureItem);
		console.log(SDI_A);

	});

	return SDI_A;
}

const createActivitiesForActors = function(structureItemsArray) {

	let actors = structureItemsArray.filter(x => x.itemType = "actor");
	let activities = [];
	actors.forEach(function(actor) {
		let actorActivities = createActorActivities(actor);
		Array.prototype.push.apply(activities, actorActivities);
	});
	Array.prototype.push.apply(structureItemsArray, activities);
	return structureItemsArray;
}

const createActorActivities = function(actor) {

	let numberOfActivities = createRandomNumberWithinRange(2, 6);
	let generatedNumbers = createSetOfUniqueRandomNumbers(40, numberOfActivities);
	let generatedActivities = [];
	let activityDataItems = [];

	generatedNumbers.forEach(function(num) {
		let temp = "activity-" + num.toString();
		generatedActivities.push(temp);
	});

	generatedActivities.forEach(function(activity) {
		let properties = {};
		properties.name = activity;
		properties.itemType = "activity";
		properties.parentId = "actor.itemId";
		properties.relationshipToParent = "activityOf";
		properties.helpNote = "help note not yet implemented";

		tempDSI = createStructureItem(properties);
		activityDataItems.push(tempDSI);
	});

	return activityDataItems;
}