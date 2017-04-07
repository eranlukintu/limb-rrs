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

  	let observation = {};

  	let pipeline = [
  		{$match: {itemType: "activity"}},
  	]

    let  activities = TESTDATA.aggregate(pipeline);
    // console.log(observationDisplayData);
    activities.forEach(function(hierarchyActivity) {
    	let activityStaticDotString = hierarchyActivity.staticDotString;
    	let parentHierarchyActorDotString = calculateParentDotString(activityStaticDotString);
    	// console.log(parentHierarchyActorDotString);
    	let parentHierarchyActor = TESTDATA.findOne({staticDotString: parentHierarchyActorDotString});
    	let observationPrimaryId = parentHierarchyActor.sourceId;
    	let observationPrimaryName = parentHierarchyActor.name;
    	let observationSecondaryId = hierarchyActivity.sourceId;
    	let observationSecondaryName = hierarchyActivity.name;
    	let observationType = "importance";
    	let observationScore = createRandomNumberWithinRange(0,10);

    	observation.userId = Meteor.userId();
    	observation.createdAt = new Date();
    	observation.primaryId = observationPrimaryId;
    	observation.primaryName = observationPrimaryName;
    	observation.secondaryId = observationSecondaryId;
    	observation.secondaryName = observationSecondaryName;
    	observation.observationType = observationType;
    	observation.score = observationScore;
    	// console.log(observation);
    	OBSERVATIONDATA.insert(observation);
    	
    });
  },
});


