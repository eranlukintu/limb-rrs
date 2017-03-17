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

export const createTestActorsWithActivities = function(testActors, referenceActors, referenceActivitiesOfActors) {
	// console.log(referenceActivitiesOfActors);
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
			let properties = {};
			properties.name = associatedActivity.itemName;
			properties.itemType = "activity";
			properties.sourceId = associatedActivity.itemId;
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