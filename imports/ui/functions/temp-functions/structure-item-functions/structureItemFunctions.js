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

export const createReferenceItem = function(referenceProperties) {
	let referenceItem = {};
	referenceItem.itemId = Random.id();
	referenceItem.itemType = referenceProperties.itemType;
	referenceItem.name = referenceProperties.name;
	referenceItem.crossReferenceId = referenceProperties.crossReferenceId;
	referenceItem.itemSourceId = referenceProperties.itemSourceId;
	return referenceItem;
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
		// console.log(associatedValues);
		associatedValues.forEach(function(av) {
			referenceActivitiesValues.push(av);
		});
	});
	Array.prototype.push.apply(referenceActivitiesValues, referenceActivities);
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



export const assignValuesToActivities = function(activitiesArray, referenceActivitiesValuesArray) {
	// console.log(activitiesArray);
	// let activitiesInValuesArray = referenceActivitiesValuesArray.filter(x => x.itemType==="activity");
	// console.log(activitiesInValuesArray);
	// console.log(referenceActivitiesValuesArray);
	let activities = activitiesArray.filter(x => x.itemType === "activity");
	// console.log(activities);
	let valuesArray = [];
	activities.forEach(function(activity) {
		let referenceActivity = referenceActivitiesValuesArray.find(x => x.itemId === activity.sourceId);
		// console.log(activity);
		let activityValues = referenceActivitiesValuesArray.filter(x => x.parentId === activity.itemId);
		console.log(activityValues);
		activityValues.forEach(function(value) {
			let properties = {};
			properties.sourceId = value.itemId;
			properties.name = valueName;
			properties.itemType = "value";
			properties.parentId = activity.itemId;
			properties.relationshipToParent = "valueOf";
			properties.helpNote = "help note not yet implemented";

			let valueItem = createStructureItem(properties);
			valuesArray.push(valueItem);			
		})
	});
	Array.prototype.push.apply(valuesArray, activitiesArray);
	return valuesArray;
}
