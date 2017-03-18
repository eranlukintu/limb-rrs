export const createTestData = function() {

}

const createTestDataItem = function(properties) {
	let testDataItem = {};
	testDataItem.userId = Meteor.userId();
	testDataItem.itemId = Random.id();
	testDataItem.name = properties.name;
	testDataItem.text = properties.name;
	testDataItem.sourceId = properties.sourceId;
	testDataItem.itemType = properties.itemType;
	testDataItem.parentId = properties.parentId;
	testDataItem.relationshipToParent = properties.relationshipToParent;
	testDataItem.helpNote = properties.helpNote;

	return testDataItem;
}

export const createRootItem = function() {
	let properties = {};
		properties.name = "root";
		properties.itemType = "root";
		properties.sourceId = Random.id()
		properties.parentId = "null";
		properties.relationshipToParent = "null";
		properties.helpNote = "help note not yet implemented";

	let rootItem = createTestDataItem(properties);
	return rootItem;
}

export const createTestActorItems = function(rootItem, referenceActors) {
	let testActorItems = [];
	testActorItems.push(rootItem);
	referenceActors.forEach(function(actor) {
		let properties = {};
		properties.name = actor.itemName;
		properties.itemType = "actor";
		properties.sourceId = actor.itemId;
		properties.parentId = rootItem.itemId;
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
		let associatedActivities = referenceActivitiesOfActors.filter(x => x.itemParentId === sourceActor.itemId);
		console.log(associatedActivities);
		associatedActivities.forEach(function(associatedActivity) {
			let sourceActivity = referenceActivities.find(x => x.itemId === associatedActivity.itemSourceId);
			// console.log(sourceActivity);
			let properties = {};
			properties.name = associatedActivity.itemName;
			properties.itemType = "activity";
			properties.sourceId = sourceActivity.itemId;
			properties.parentId = selectedActor.itemId;
			properties.relationshipToParent = "activityOf";
			properties.helpNote = "help note not yet implemented";

			let interimActivity = createTestDataItem(properties);
			// console.log(interimActivity);
			testActorsWithActivities.push(interimActivity);
		});		
	});
	// console.log(testActorsWithActivities);
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
		let associatedValues = referenceActivityValues.filter(x => x.itemParentId === sourceActivity.itemId);
		associatedValues.forEach(function(associatedValue) {
			let properties = {};
			properties.name = associatedValue.itemName;
			properties.itemType = "value";
			properties.sourceId = associatedValue.itemId;
			properties.parentId = selectedActivity.itemId;
			properties.relationshipToParent = "valueOf";
			properties.helpNote = "help note not yet implemented";

			let interimValue = createTestDataItem(properties);
			testActorsWithActivityValues.push(interimValue);
		});
	});
	return testActorsWithActivityValues;
}