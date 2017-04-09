import { Meteor } from "meteor/meteor";
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { DISPLAYDATA } from "../../temp-collections/tempCollections.js";
import { TESTDATA } from "../../temp-collections/tempCollections.js";
import { OBSERVATIONDATA } from "../../temp-collections/tempCollections.js";
import { calculateParentDotString } from "../../../../ui/functions/dot-string-functions/dotStringFunctions.js";
import { createRandomNumberWithinRange } from "../../../../ui/functions/random-number-functions/randomNumberFunctions.js";

export const loadObservationsForDisplay = new ValidatedMethod({
  name: "DisplayData.observations",
  validate: new SimpleSchema({ 

  }).validator(),
  run({}) {
  	
  	OBSERVATIONDATA.remove({});

  	let observedItems = ["activity", "value", "influencer"];
  	let observations = [];

  	observedItems.forEach(function(observedItem) {
	  	let pipeline = [
	  		{$match: {itemType: observedItem}},
	  	]

	    let  oItems = TESTDATA.aggregate(pipeline);
	    // console.log(observationDisplayData);
	    oItems.forEach(function(hierarchyItem) {
	    	if(observedItem === "influencer") {
	    		let importanceObservation = createObservation(hierarchyItem, "importance");
	    		OBSERVATIONDATA.insert(importanceObservation);
	    		let impactObservation = createObservation(hierarchyItem, "impact");
	    		OBSERVATIONDATA.insert(impactObservation);
	    	} else {
	    		let observation = createObservation(hierarchyItem, "importance");
	    		OBSERVATIONDATA.insert(observation);
	    	}	    	
	    	
	    });
  	});
  	// console.log(observations);
  	
  },
});

const createObservation = function(hierarchyItem, obType) {
	let observation = {};
	let activityStaticDotString = hierarchyItem.staticDotString;
	let parentHierarchyDotString = calculateParentDotString(activityStaticDotString);
	// console.log(parentHierarchyDotString);
	let parentHierarchy = TESTDATA.findOne({staticDotString: parentHierarchyDotString});
	let observationPrimaryId = parentHierarchy.sourceId;
	let observationPrimaryName = parentHierarchy.name;
	let observationSecondaryId = hierarchyItem.sourceId;
	let observationSecondaryName = hierarchyItem.name;
	let observationType = obType;
	let observationScore = createRandomNumberWithinRange(0,10);

	observation.userId = Meteor.userId();
	observation.createdAt = new Date();
	observation.primaryId = observationPrimaryId;
	observation.primaryName = observationPrimaryName;
	observation.secondaryId = observationSecondaryId;
	observation.secondaryName = observationSecondaryName;
	observation.observationType = observationType;
	observation.score = observationScore;

	return observation;
}


