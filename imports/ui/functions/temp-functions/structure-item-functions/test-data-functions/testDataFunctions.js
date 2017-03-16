export const createTestData = function() {

}

const createTestDataItem = function(properties) {
	let testDataItem = {};
	testDataItem.userId = Meteor.userId();
	testDataItem.itemId = Random.id();
	testDataItem.name = properties.name;
	testDataItem.text = properties.name;
	testDataItem,sourceId = properties.sourceId;
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
	return testActorItems;
}