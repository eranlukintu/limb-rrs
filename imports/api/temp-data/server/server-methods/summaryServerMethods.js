import { Meteor } from "meteor/meteor";
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { DISPLAYDATA } from "../../temp-collections/tempCollections.js";
import { TESTDATA } from "../../temp-collections/tempCollections.js";
import { OBSERVATIONDATA } from "../../temp-collections/tempCollections.js";
import { SUMMARYDATA } from "../../temp-collections/tempCollections.js";

export const createSummaryDataForDisplay = new ValidatedMethod({
  name: "SummaryData.create",
  validate: new SimpleSchema({ 

  }).validator(),
  run({}) {
  	
  	SUMMARYDATA.remove({});

  	let numberOfActors;

  	let actorPipeline = [
  		{$group : {_id:"$itemType", count:{$sum:1}}}	
  	];

    let  summaryDisplayData = TESTDATA.aggregate(actorPipeline);
    console.log(summaryDisplayData);
    // summaryDisplayData.forEach(function(DDI) {
    //   SUMMARYDATA.insert(DDI);
    // });
  },
});