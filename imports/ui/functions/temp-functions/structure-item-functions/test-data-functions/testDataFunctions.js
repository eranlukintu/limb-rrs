import { createSortString }  from "../../../dot-string-functions/dotStringFunctions.js";

export const createTestData = function() {

}

const createTestDataItem = function(properties) {
	let testDataItem = {};
	testDataItem.userId = Meteor.userId();
	testDataItem.itemId = Random.id();
	testDataItem.staticDotString = properties.staticDotString;
	testDataItem.staticSortString = properties.staticSortString;
	testDataItem.name = properties.name;
	testDataItem.text = properties.name;
	testDataItem.sourceId = properties.sourceId;
	testDataItem.itemType = properties.itemType;
	// testDataItem.crossReferenceId = properties.crossReferenceId;
	testDataItem.relationshipToParent = properties.relationshipToParent;
	testDataItem.helpNote = properties.helpNote;

	return testDataItem;
}

export const createRootItem = function() {
	let properties = {};
		properties.staticDotString = "1";
		properties.staticSortString = createSortString(properties.staticDotString);
		properties.name = "root";
		properties.itemType = "root";
		properties.sourceId = Random.id()
		properties.crossReferenceId = "null";
		properties.relationshipToParent = "null";
		properties.helpNote = "help note not yet implemented";

	let rootItem = createTestDataItem(properties);
	return rootItem;
}



export const createTestActorItems = function(rootItem, referenceActors) {
	let testActorItems = [];
	testActorItems.push(rootItem);
	referenceActors.forEach(function(actor, index) {
		let properties = {};
		properties.staticDotString = rootItem.staticDotString + "." + (index+1).toString();
		properties.staticSortString = createSortString(properties.staticDotString);
		properties.name = actor.name;
		properties.itemType = "actor";
		properties.sourceId = actor.itemId;
		// properties.crossReferenceId = rootItem.itemId;
		properties.relationshipToParent = "actorOf";
		properties.helpNote = "help note not yet implemented";
		let testActor = createTestDataItem(properties);
		testActorItems.push(testActor);
	})
	// console.log(testActorItems);
	return testActorItems;
}

export const createTestActorsWithActivities = function(testActors, referenceActors, referenceActivitiesOfActors,  referenceActivities) {
	// console.log(referenceActivitiesOfActors);
	// console.log(referenceActivities);
	let testActorsWithActivities = [];

	testActors.forEach(function(testActor) {
		testActorsWithActivities.push(testActor);
	});

	let selectedActors= testActors.filter(x => x.itemType === "actor");
	// console.log(selectedActors);
	selectedActors.forEach(function(selectedActor) {
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
			properties.name = associatedActivity.name;
			properties.itemType = "activity";
			properties.sourceId = sourceActivity.itemId;
			// properties.crossReferenceId = selectedActor.itemId;
			// properties.parentId = "null";
			properties.relationshipToParent = "activityOf";
			properties.helpNote = "help note not yet implemented";

			let interimActivity = createTestDataItem(properties);
			// console.log(interimActivity);
			testActorsWithActivities.push(interimActivity);
		});		
	});
	// console.log(testActorsWithActivities);
	let testArray = testActors.concat(testActorsWithActivities);
	return testActorsWithActivities;
}

export const createTestActorsWithActivityValues = function(
													testActorsWithActivities, 
													referenceActivities, 
													referenceValues,
													referenceActivityValues) {

	let testActorsWithActivityValues = [];
	testActorsWithActivities.forEach(function(TAWA) {
		testActorsWithActivityValues.push(TAWA);
	});

	// console.log(referenceActivityValues);
	// console.log(referenceActivities);

	//extract all activities
	let selectedActivities = testActorsWithActivities.filter(x => x.itemType === "activity");
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
			properties.name = associatedValue.name;
			properties.itemType = "value";
			properties.sourceId = associatedValue.itemId;
			// properties.crossReferenceId = selectedActivity.itemId;
			properties.relationshipToParent = "valueOf";
			properties.helpNote = "help note not yet implemented";

			let interimValue = createTestDataItem(properties);
			testActorsWithActivityValues.push(interimValue);
		});
	});
	return testActorsWithActivityValues;
}

export const createTestActorsWithValueInfluencers = function(
															testActorsWithActivityValues, 
															referenceValues, 
															referenceActivityValues, 
															referenceInfluencersOfValues) {
	// console.log(referenceInfluencersOfValues);

	let testActorsWithValueInfluencers = [];

	//Transfer existing test data items to new array
	testActorsWithActivityValues.forEach(function(TAWAV) {
		testActorsWithValueInfluencers.push(TAWAV);
	});

	//Filter for values. These values are not the original reference values, but a pointer to them.
	let selectedActivityValues = testActorsWithActivityValues.filter(x => x.itemType === "value");
	// console.log(selectedActivityValues);
	selectedActivityValues.forEach(function(selectedTestValue) {		
		//We need to find the respective value in the referenceInfluencersOfValues array.
		//First, we need to find the value in the reference activity values array.
		let sourceActivityValue = referenceActivityValues.find(x => x.itemId === selectedTestValue.sourceId);
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
		
		//Each of the associated influencers needs to be transformed into a test data item
		associatedInfluencers.forEach(function(associatedInfluencer, index) {
			let properties = {};
			properties.staticDotString = selectedTestValue.staticDotString + "." + (index+1).toString();
			properties.staticSortString = createSortString(properties.staticDotString);
			properties.name = associatedInfluencer.name;
			properties.itemType = "influencer";
			properties.sourceId = associatedInfluencer.itemId;
			// properties.crossReferenceId = selectedTestValue.itemId;
			properties.relationshipToParent = "influencerOn";
			properties.helpNote = "help note not yet implemented";

			let interimInfluencer = createTestDataItem(properties);
			testActorsWithValueInfluencers.push(interimInfluencer);
		})
	});
	// console.log(testActorsWithValueInfluencers);
	return testActorsWithValueInfluencers;
}

