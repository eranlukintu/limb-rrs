import { createReferenceItem } from "../structureItemFunctions.js";
import { createRandomNumberWithinRange } from "../../../random-number-functions/randomNumberFunctions.js";
import { createSetOfUniqueRandomNumbers } from "../../../random-number-functions/randomNumberFunctions.js";

export const createReferenceActivitiesOfActors = function(referenceActors, referenceActivities) {
	let referenceActivitiesOfActors = [];
	referenceActors.forEach(function(actor) {
		let referenceActivitiesOfActor = createReferenceActivitiesForSingleActor(actor, referenceActivities);
		referenceActivitiesOfActor.forEach(function(selectedActivity) {
			let referenceProperties = {};
			referenceProperties.itemType = "referenceActivityOfActor";
			referenceProperties.itemName = selectedActivity.itemName;
			referenceProperties.itemParentId = actor.itemId;

			let referenceActivityOfActor = createReferenceItem(referenceProperties);
			referenceActivitiesOfActors.push(referenceActivityOfActor);
			});
	});
	return referenceActivitiesOfActors;
}

const createReferenceActivitiesForSingleActor = function(actor, referenceActivities) {
	let referenceActivitiesOfSingleActor = [];
	let numberOfReferenceActivities = referenceActivities.length;
	let numberOfActivitiesToBeAssigned = createRandomNumberWithinRange(3, 7);

	//Create a set of random numbers that will each act as an index by which to select an activity
	let setOfIndexes = createSetOfUniqueRandomNumbers(numberOfReferenceActivities, numberOfActivitiesToBeAssigned);

	setOfIndexes.forEach(function(index) {
		let selectedActivity = referenceActivities[index];
		referenceActivitiesOfSingleActor.push(selectedActivity);
	})
	return referenceActivitiesOfSingleActor;
}