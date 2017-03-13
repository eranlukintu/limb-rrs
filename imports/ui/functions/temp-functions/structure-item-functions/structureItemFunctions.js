import { Meteor } from "meteor/meteor";
import { Random } from 'meteor/random';
import { createSetOfUniqueRandomNumbers } from "../../random-number-functions/randomNumberFunctions.js";
import { createRandomNumberWithinRange } from "../../random-number-functions/randomNumberFunctions.js";
import { createHierarchyArray } from "../../../functions/createHierarchyArray.js";

export const createStructureItems = function(actors) {
	let SI_1 = createActorDataItems(actors);
	let SI_2 = createActivitiesForActors(SI_1);
	console.log(SI_1);
	return SI_1;
}

const createStructureItem = function(properties) {
	let structureItem = {};
	structureItem.userId = Meteor.userId();
	structureItem.itemId = Random.id();
	structureItem.name = properties.name;
	structureItem.text = properties.name;
	structureItem,sourceId = properties.sourceId;
	structureItem.itemType = properties.itemType;
	structureItem.parentId = properties.parentId;
	structureItem.relationshipToParent = properties.relationshipToParent;
	structureItem.helpNote = properties.helpNote;

	return structureItem;
}

export const createRootItem = function() {
	let properties = {};
		properties.name = "root";
		properties.itemType = "root";
		properties.sourceId = Random.id()
		properties.parentId = "null";
		properties.relationshipToParent = "null";
		properties.helpNote = "help note not yet implemented";

	let rootItem = createStructureItem(properties);
	return rootItem;
}

export const createActorDataItems = function(rootItem, actors) {

	let SDI_A = [];
	SDI_A.push(rootItem);
	// console.log(SDI_A);

	actors.forEach(function(actor) {
		let properties = {};
		properties.name = actor;
		properties.itemType = "actor";
		properties.parentId = rootItem.itemId;
		properties.sourceId = Random.id();
		properties.relationshipToParent = "belongsTo";
		properties.helpNote = "help note not yet implemented";

		let structureItem = createStructureItem(properties);
		SDI_A.push(structureItem);

	});
	return SDI_A;
}

export const createReferenceActivityItems = function() {
	let referenceActivities = [];

	for (let i = 0; i<41; i++) {
		let properties = {};
		properties.name = "activity-" + i.toString();
		properties.itemType = "activity";
		properties.parentId = "NA";
		properties.sourceId = "NA";
		properties.relationshipToParent = "NA";
		properties.helpNote = "help note not yet implemented";

		let referenceActivity = createStructureItem(properties);
		referenceActivities.push(referenceActivity);
	}

	return referenceActivities;
}

export const createReferenceValueItems = function() {
	let referenceValues = [];

	for (let i = 0; i<71; i++) {
		let properties = {};
		properties.name = "value-" + i.toString();
		properties.itemType = "value";
		properties.parentId = "NA";
		properties.sourceId = Random.id();
		properties.relationshipToParent = "NA";
		properties.helpNote = "help note not yet implemented";

		let referenceValue = createStructureItem(properties);
		referenceValues.push(referenceValue);
	}

	return referenceValues;
}

export const createReferenceValuesForReferenceActivities = function(referenceActivities, referenceValues) {
	let referenceActivitiesValues = [];

	referenceActivities.forEach(function(referenceActivity) {
		let associatedValues = createReferenceActivityValues(referenceActivity, referenceValues);
		associatedValues.forEach(function(av) {
			referenceActivitiesValues.push(av);
		});
	});
	return referenceActivitiesValues;
}

const createReferenceActivityValues = function(referenceActivity, referenceValues) {
	let numberOfValues = createRandomNumberWithinRange(4,10);
	let generatedValueNumbers = createSetOfUniqueRandomNumbers(70, numberOfValues);
	let generatedValueNames = [];
	let valueDataItems = [];

	generatedValueNumbers.forEach(function(num) {
		let temp = "value-" + num.toString();
		generatedValueNames.push(temp);
	});

	generatedValueNames.forEach(function(valueName) {
		let foundValue = referenceValues.find(x => x.name === valueName);
		let properties = {};
		properties.sourceId = foundValue.itemId;
		properties.name = valueName;
		properties.itemType = "value";
		properties.parentId = referenceActivity.itemId;
		properties.relationshipToParent = "valueOf";
		properties.helpNote = "help note not yet implemented";

		tempDSI = createStructureItem(properties);
		valueDataItems.push(tempDSI);
	});
	return valueDataItems;	
}

export const createActivitiesForActors = function(actorsStructureArray) {

	let actors = actorsStructureArray.filter(x => x.itemType === "actor");
	let activities = [];
	actors.forEach(function(actor) {
		let actorActivities = createActorActivities(actor);
		Array.prototype.push.apply(activities, actorActivities);
	});
	Array.prototype.push.apply(actorsStructureArray, activities);
	return actorsStructureArray;
}

const createActorActivities = function(actor) {

	let referenceActivities = createReferenceActivityItems();
	let numberOfActivities = createRandomNumberWithinRange(2, 6);
	let generatedNumbers = createSetOfUniqueRandomNumbers(40, numberOfActivities);
	let generatedActivityNames = [];
	let activityDataItems = [];

	generatedNumbers.forEach(function(num) {
		let temp = "activity-" + num.toString();
		generatedActivityNames.push(temp);
	});

	generatedActivityNames.forEach(function(activityName) {
		let foundActivity = referenceActivities.find(x => x.name === activityName);
		let properties = {};
		properties.sourceId = foundActivity.itemId;
		properties.name = activityName;
		properties.itemType = "activity";
		properties.parentId = actor.itemId;
		properties.relationshipToParent = "activityOf";
		properties.helpNote = "help note not yet implemented";

		tempDSI = createStructureItem(properties);
		activityDataItems.push(tempDSI);
	});

	return activityDataItems;
}
