import { createSortString }  from "../../../dot-string-functions/dotStringFunctions.js";
import { calculateIndentLevel } from "../../../dot-string-functions/dotStringFunctions.js";

export const createTestData = function() {

}

const createHierarchyItem = function(properties) {
	let hierarchyItem = {};
	hierarchyItem.userId = Meteor.userId();
	hierarchyItem.itemId = Random.id();
	hierarchyItem.staticDotString = properties.staticDotString;
	hierarchyItem.staticSortString = properties.staticSortString;
	hierarchyItem.staticIndentLevel = properties.staticIndentLevel;
	hierarchyItem.name = properties.name;
	hierarchyItem.text = properties.name;
	hierarchyItem.sourceId = properties.sourceId;
	hierarchyItem.itemType = properties.itemType;
	hierarchyItem.relationshipToParent = properties.relationshipToParent;
	hierarchyItem.helpNote = properties.helpNote;
	hierarchyItem.primaryItemId = properties.primaryItemId;
	hierarchyItem.secondaryItemId = hierarchyItem.itemId;
	hierarchyItem.observationType = properties.observationType;
	hierarchyItem.observationValue = properties.observationValue;
	hierarchyItem.observerId = properties.observerId;
	hierarchyItem.observerName = properties.observerName;
	hierarchyItem.observationDate = properties.observationDate;

	return hierarchyItem;
}

export const createRootItem = function() {
	let properties = {};
		properties.staticDotString = "1";
		properties.staticSortString = createSortString(properties.staticDotString);
		properties.staticIndentLevel = "0";
		properties.name = "root";
		properties.itemType = "root";
		properties.sourceId = Random.id()		
		properties.relationshipToParent = "null";
		properties.helpNote = "help note not yet implemented";
		properties.primaryItemId = "null";
		properties.observationType = "NA";
		properties.observationValue = "NA";
		properties.observerId = "NA";
		properties.observerName = "NA";
		properties.observationDate = "NA";

	let rootItem = createHierarchyItem(properties);
	// console.log(rootItem);
	return rootItem;
}



export const createHierarchyWithActors = function(rootItem, referenceActors) {
	let hierarchyWithActors = [];
	hierarchyWithActors.push(rootItem);
	referenceActors.forEach(function(actor, index) {
		let properties = {};
		properties.staticDotString = rootItem.staticDotString + "." + (index+1).toString();
		properties.staticSortString = createSortString(properties.staticDotString);
		properties.staticIndentLevel = calculateIndentLevel(properties.staticDotString);
		properties.name = actor.name;
		properties.itemType = "actor";
		properties.sourceId = actor.itemId;
		// properties.crossReferenceId = rootItem.itemId;
		properties.relationshipToParent = "actorOf";
		properties.helpNote = "help note not yet implemented";
		properties.primaryItemId = rootItem.itemId;
		properties.observationType = "NA";
		properties.observationValue = "NA";
		properties.observerId = "NA";
		properties.observerName = "NA";
		properties.observationDate = "NA";
		let testActor = createHierarchyItem(properties);
		hierarchyWithActors.push(testActor);
	})
	// console.log(hierarchyWithActors);
	return hierarchyWithActors;
}

export const createHierarchyWithActivities = function(hierarchyWithActors, referenceActors, referenceActivitiesOfActors,  referenceActivities) {
	// console.log(referenceActivitiesOfActors);
	// console.log(referenceActivities);
	let hierarchyWithActivities = [];

	hierarchyWithActors.forEach(function(testActor) {
		hierarchyWithActivities.push(testActor);
	});

	let hierarchyActors= hierarchyWithActors.filter(x => x.itemType === "actor");
	// console.log(hierarchyActors);
	hierarchyActors.forEach(function(selectedActor) {
		let sourceActor = referenceActors.find(x => x.itemId === selectedActor.sourceId)
		// console.log(sourceActor);
		let associatedActivities = referenceActivitiesOfActors.filter(x => x.crossReferenceId === sourceActor.itemId);
		// console.log(associatedActivities);
		associatedActivities.forEach(function(associatedActivity, index) {
			let sourceActivity = referenceActivities.find(x => x.itemId === associatedActivity.itemSourceId);
			// console.log(sourceActivity);
			let properties = {};
			properties.staticDotString = selectedActor.staticDotString + "." + (index+1).toString();
			properties.staticSortString = createSortString(properties.staticDotString);
			properties.staticIndentLevel = calculateIndentLevel(properties.staticDotString);
			properties.name = associatedActivity.name;
			properties.itemType = "activity";
			properties.sourceId = sourceActivity.itemId;
			// properties.crossReferenceId = selectedActor.itemId;
			// properties.parentId = "null";
			properties.relationshipToParent = "activityOf";
			properties.helpNote = "help note not yet implemented";
			properties.primaryItemId = selectedActor.itemId;
			properties.observationType = "NA";
			properties.observationValue = "NA";
			properties.observerId = "NA";
			properties.observerName = "NA";
			properties.observationDate = "NA";

			let hierarchyActivity = createHierarchyItem(properties);
			// console.log(hierarchyActivity);
			hierarchyWithActivities.push(hierarchyActivity);
		});		
	});
	// console.log(hierarchyWithActivities);
	return hierarchyWithActivities;
}

export const createHierarchyWithValues = function(
													hierarchyWithActivities, 
													referenceActivities, 
													referenceValues,
													referenceActivityValues) {

	let hierarchyWithValues = [];
	hierarchyWithActivities.forEach(function(HWA) {
		hierarchyWithValues.push(HWA);
	});

	// console.log(referenceActivityValues);
	// console.log(referenceActivities);

	//extract all activities
	let selectedActivities = hierarchyWithActivities.filter(x => x.itemType === "activity");
	// console.log(selectedActivities);

	//For each activity, proceed with the following steps:
	//1. Find the source activity
	//2. For the source activity, find the values in the reference activity values array that have a
	//parent id corresponding to the source id.
	//3. For each of the activity values, find the corresponding reference value and set it as the source id
	selectedActivities.forEach(function(selectedActivity) {
		let sourceActivity = referenceActivities.find(x => x.itemId ===selectedActivity.sourceId);
		// console.log(sourceActivity);
		let associatedValues = referenceActivityValues.filter(x => x.crossReferenceId === sourceActivity.itemId);
		associatedValues.forEach(function(associatedValue, index) {
			let properties = {};
			properties.staticDotString = selectedActivity.staticDotString + "." + (index+1).toString();
			properties.staticSortString = createSortString(properties.staticDotString);
			properties.staticIndentLevel = calculateIndentLevel(properties.staticDotString);
			properties.name = associatedValue.name;
			properties.itemType = "value";
			properties.sourceId = associatedValue.itemId;
			// properties.crossReferenceId = selectedActivity.itemId;
			properties.relationshipToParent = "valueOf";
			properties.helpNote = "help note not yet implemented";
			properties.primaryItemId = selectedActivity.itemId;
			properties.observationType = "NA";
			properties.observationValue = "NA";
			properties.observerId = "NA";
			properties.observerName = "NA";
			properties.observationDate = "NA";

			let interimValue = createHierarchyItem(properties);
			hierarchyWithValues.push(interimValue);
		});
	});
	return hierarchyWithValues;
}

export const createHierarchyWithInfluencers = function(
															hierarchyWithValues, 
															referenceValues, 
															referenceActivityValues, 
															referenceInfluencersOfValues) {
	// console.log(referenceInfluencersOfValues);

	let hierarchyWithInfluencers = [];

	//Transfer existing test data items to new array
	hierarchyWithValues.forEach(function(THV) {
		hierarchyWithInfluencers.push(THV);
	});

	//Filter for values. These values are not the original reference values, but a pointer to them.
	let selectedHierarchyValues = hierarchyWithValues.filter(x => x.itemType === "value");
	// console.log(selectedHierarchyValues);
	selectedHierarchyValues.forEach(function(selectedHierarchyValue) {		
		//We need to find the respective value in the referenceInfluencersOfValues array.
		//First, we need to find the value in the reference activity values array.
		let sourceActivityValue = referenceActivityValues.find(x => x.itemId === selectedHierarchyValue.sourceId);
		// console.log(sourceActivityValue);

		//Now we need to find the reference value.
		let referenceValue = referenceValues.find(x => x.itemId === sourceActivityValue.itemSourceId);
		// console.log(referenceValue);

		//Now we need to locate that value in the reference influencers of values array. Its id will be the paremt id of 
		//the respective item.
		// let influencerValue = referenceInfluencersOfValues.find(x => x.crossReferenceId === referenceValue.itemId);
		// console.log(influencerValue);

		//We need to find all the influencers that are children of the influencerValue
		let associatedInfluencers = referenceInfluencersOfValues.filter(x => x.crossReferenceId === referenceValue.itemId);
		// console.log(associatedInfluencers);
		//Each of the associated influencers needs to be transformed into a test data item
		associatedInfluencers.forEach(function(associatedInfluencer, index) {
			let properties = {};
			properties.staticDotString = selectedHierarchyValue.staticDotString + "." + (index+1).toString();
			properties.staticSortString = createSortString(properties.staticDotString);
			properties.staticIndentLevel = calculateIndentLevel(properties.staticDotString);
			properties.name = associatedInfluencer.name;
			properties.itemType = "influencer";
			properties.sourceId = associatedInfluencer.itemId;
			// properties.crossReferenceId = selectedHierarchyValue.itemId;
			properties.relationshipToParent = "influencerOn";
			properties.helpNote = "help note not yet implemented";
			properties.primaryItemId = referenceValue.itemId;
			properties.observationType = "NA";
			properties.observationValue = "NA";
			properties.observerId = "NA";
			properties.observerName = "NA";
			properties.observationDate = "NA";

			let interimInfluencer = createHierarchyItem(properties);
			hierarchyWithInfluencers.push(interimInfluencer);
		})
	});
	// console.log(hierarchyWithInfluencers);
	return hierarchyWithInfluencers;
}

