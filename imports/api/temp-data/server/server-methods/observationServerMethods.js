import { Meteor } from "meteor/meteor";
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { DISPLAYDATA } from "../../temp-collections/tempCollections.js";
import { TESTDATA } from "../../temp-collections/tempCollections.js";
import { OBSERVATIONSDATA } from "../../temp-collections/tempCollections.js";
import { calculateParentDotString } from "../../../../ui/functions/dot-string-functions/dotStringFunctions.js";
import { calculateGrandparentDotString } from "../../../../ui/functions/dot-string-functions/dotStringFunctions.js";
import { calculateGreatgrandparentDotString } from "../../../../ui/functions/dot-string-functions/dotStringFunctions.js";
import { createRandomNumberWithinRange } from "../../../../ui/functions/random-number-functions/randomNumberFunctions.js";

export const loadObservationsForDisplay = new ValidatedMethod({
  name: "DisplayData.observations",
  validate: new SimpleSchema({ 

  }).validator(),
  run({}) {
  	
  	OBSERVATIONSDATA.remove({});

  	//"Actor" is not included because the first level of relationship is with activity
  	//and therefore a minimum of two types of elements are required.
  	let observedItems = ["activity", "value", "influencer"];
  	let observations = [];

  	observedItems.forEach(function(observedItem) {
	  	let pipeline = [
	  		{$match: {itemType: observedItem}},
	  	]

	    let  oItems = TESTDATA.aggregate(pipeline);
	    // console.log(observationDisplayData);
	    oItems.forEach(function(hierarchyItem) {
	    	// console.log("Creating observation");
	    	if(observedItem === "influencer") {
	    		let importanceObservation = createObservation(hierarchyItem, "importance");
	    		OBSERVATIONSDATA.insert(importanceObservation);
	    		let impactObservation = createObservation(hierarchyItem, "impact");
	    		OBSERVATIONSDATA.insert(impactObservation);
	    	} else {
	    		let observation = createObservation(hierarchyItem, "importance");
	    		OBSERVATIONSDATA.insert(observation);
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

	let observationUserId = Meteor.userId();
	let observationObserverId = Meteor.userId();
	let observationCreatedAt = new Date();

	let observationControllingActor = findObservationControllingActor(obType, hierarchyItem);
	let observationControllingActivity = findObservationControllingActivity(obType, hierarchyItem);
	let observationControllingValue = findObservationControllingValue(obType, hierarchyItem);

	let parentHierarchy = TESTDATA.findOne({staticDotString: parentHierarchyDotString});

	let observationControllingActorId = setControllingItemId(observationControllingActor);
	let observationControllingActorName = setControllingActorName(observationControllingActor);
	let observationControllingActivityId = setControllingItemId(observationControllingActivity);
	let observationControllingActivityName = setControllingActorName(observationControllingActivity);
	let observationControllingValueId = setControllingItemId(observationControllingValue);
	let observationControllingValueName = setControllingActorName(observationControllingValue);

	let observationPrimaryId = parentHierarchy.sourceId;
	let observationPrimaryName = parentHierarchy.name;
	let observationPrimaryType = parentHierarchy.itemType;
	let observationPrimaryDomain = parentHierarchy.itemDomain;
	let observationSecondaryId = hierarchyItem.sourceId;
	let observationSecondaryName = hierarchyItem.name;
	let observationSecondaryType = hierarchyItem.itemType;
	let observationSecondaryDomain = hierarchyItem.itemDomain;
	let observationType = obType;
	let observationCombinedId = observationPrimaryId + observationSecondaryId + observationType;
	let observationScore = createRandomNumberWithinRange(0,10);
	let observationScoreClass = calculateObservationScoreClass(observationScore);
	let observationScoreClassRank = rankObservationScoreClass(observationScoreClass);

	observation.userId = observationUserId;
	observation.observerId = observationObserverId;
	observation.createdAt = observationCreatedAt;
	observation.controllingActorId = observationControllingActorId;
	observation.controllingActorName = observationControllingActorName;
	observation.controllingActivityId = observationControllingActivityId;
	observation.controllingActivityName = observationControllingActivityName;
	observation.controllingValueId = observationControllingValueId;
	observation.controllingValueName = observationControllingValueName;
	observation.primaryId = observationPrimaryId;
	observation.primaryName = observationPrimaryName;
	observation.primaryType = observationPrimaryType;
	observation.primaryDomain = observationPrimaryDomain;
	observation.secondaryId = observationSecondaryId;
	observation.secondaryName = observationSecondaryName;
	observation.secondaryType = observationSecondaryType;
	observation.secondaryDomain = observationSecondaryDomain;
	observation.observationType = observationType;
	observation.combinedId = observationCombinedId;
	observation.score = observationScore;
	observation.scoreClass = observationScoreClass;
	observation.scoreClassRank = observationScoreClassRank;

	return observation;
}

const calculateObservationScoreClass = function(score) {
	let observationScoreClass;

	switch(score) {
		case 0:
		case 1:
		case 2:
		case 3: return observationScoreClass = "low";
		break;

		case 4:
		case 5:
		case 6:
		case 7: return observationScoreClass = "medium";
		break;

		case 8:
		case 9:
		case 10: return observationScoreClass  = "high";

		default: return observationScoreClass = "NA";
	}
}

const rankObservationScoreClass = function(observationScoreClass) {
	
	switch(observationScoreClass) {

		case "NA": return 0; break;
		case "low": return 1; break;
		case "medium": return 2; break;
		case "high": return 3; break;
		default: return 0;

	}
}

const findObservationControllingActor = function(obType, hierarchyItem) {
	
	let itemType = hierarchyItem.itemType;
	let dotString;
	let actor;
	let actorDotString;

	switch(itemType) {
		
		case "activity":
			dotString = hierarchyItem.staticDotString;
			actorDotString = calculateParentDotString(dotString);
			actor = TESTDATA.findOne({staticDotString: actorDotString});
			// console.log(dotString, actorDotString);












































































































































































































































































































































































































































































































































































































































































































































































































































			

			if(actor) {
				return actor;
			}else {
				return "NA";
			}
			break;

		case "value":
			dotString = hierarchyItem.staticDotString;
			actorDotString = calculateGrandparentDotString(dotString);
			actor = TESTDATA.findOne({staticDotString: actorDotString});

			if(actor) {
				return actor;
			}else {
				return "NA";
			}
			break;

		case "influencer":
			dotString = hierarchyItem.staticDotString;
			actorDotString = calculateGreatgrandparentDotString(dotString);
			actor = TESTDATA.findOne({staticDotString: actorDotString});

			if(actor) {
				return actor;
			}else {
				return "NA";
			}
			break;

		default: return "NA";
	}
}

const findObservationControllingActivity = function(obType, hierarchyItem) {

	let itemType = hierarchyItem.itemType;
	let dotString;
	let activity;
	let activityDotString;

	switch(itemType) {
		case "activity":
			return "NA";
			break;

		case "value":
			dotString = hierarchyItem.staticDotString;
			activityDotString = calculateParentDotString(dotString);
			activity = TESTDATA.findOne({staticDotString: activityDotString});

			if(activity) {
				return activity;
			}else {
				return "NA";
			}
			break;

		case "influencer":
			dotString = hierarchyItem.staticDotString;
			activityDotString = calculateGrandparentDotString(dotString);
			activity = TESTDATA.findOne({staticDotString: activityDotString});

			if(activity) {
				return activity;
			}else {
				return "NA";
			}
			break;

		default: return "NA";
	}
}

const findObservationControllingValue = function(obType, hierarchyItem) {
	
	let itemType = hierarchyItem.itemType;

	switch(itemType) {
		case "activity":
			return "NA";
			break;

		case "value":
			return "NA";
			break;

		case "influencer":
			const dotString = hierarchyItem.staticDotString;
			const valueDotString = calculateParentDotString(dotString);
			const value = TESTDATA.findOne({staticDotString: valueDotString});

			if(value) {
				return value;
			}else {
				return "NA";
			}
			break;

		default: return "NA";
	}
}

const setControllingItemId = function(item) {
	if(item === "NA") {
		return "NA";
	}else {
		return item.itemId;
	}
}

const setControllingActorName = function(item) {
	if(item === "NA") {
		return "NA";
	}else {
		return item.name;
	}
}

