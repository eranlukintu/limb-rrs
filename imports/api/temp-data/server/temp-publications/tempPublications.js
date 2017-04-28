import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { SARS } from '../../temp-collections/tempCollections.js';
import { STRUCTUREITEMS } from '../../temp-collections/tempCollections.js';
import { TESTDATA } from '../../temp-collections/tempCollections.js';
import { DISPLAYDATA } from '../../temp-collections/tempCollections.js';
import { OBSERVATIONSDATA } from '../../temp-collections/tempCollections.js';
import { SUMMARYDATA } from '../../temp-collections/tempCollections.js';
import { ATTRACTIVENESSDATA } from '../../temp-collections/tempCollections.js';

Meteor.publish('SARS.list', () => SARS.find());

Meteor.publish('StructureItems.list', () => STRUCTUREITEMS.find());

Meteor.publish("TestData.all", function() { 
	return TESTDATA.find({ userId:this.userId }, {sort: {staticSortString: 1}} );
});

Meteor.publish("DisplayData.all", function() { 
	return DISPLAYDATA.find({ userId:this.userId }, {sort: {staticSortString: 1}} );
});

Meteor.publish("DisplayData.observations", function() { 
	return OBSERVATIONSDATA.find({userId:this.userId } );
});

Meteor.publish("observationsSummary", function() {
	return SUMMARYDATA.find({}, {sort: {itemCategory:1}});
});

Meteor.publish("refreshAttractivenessList", function() {
	return ATTRACTIVENESSDATA.find({});
});

// Meteor.publish("hierarchy.actors", function() {
// 	return TESTDISPLAYDATA.find({userId:this.userId },
// 		{itemType: "actor"},
// 		{sort: {staticSortString: 1}}
// 	});
