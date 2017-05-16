import { Meteor } from "meteor/meteor";
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { OBSERVATIONSDATA} from "../../temp-collections/tempCollections.js";
import { COMBINEDSUMMARYDATA } from "../../temp-collections/tempCollections.js";
import { attractivenessPipeline } from "../../temp-pipelines/tempPipelines.js";
// import { combinedSummaryPipeline } from "../../temp-pipelines/tempPipelines.js";
import { combinedSummaryPipeline } from "../../temp-pipelines/combined-summary-pipeline/combinedSummaryPipeline.js";

export const createCombinedSummary = new ValidatedMethod({
  name: "createCombinedSummary",
  validate: new SimpleSchema({ 

  }).validator(),
  run({}) {

    // console.log(this.userId);
    // console.log(OBSERVATIONSDATA.find().count());
  	
  	COMBINEDSUMMARYDATA.remove({});
  	// console.log("After remove", COMBINEDSUMMARYDATA.find().count());
  	console.log(OBSERVATIONSDATA.find().count());
    
    let combinedSummaryList = OBSERVATIONSDATA.aggregate(combinedSummaryPipeline);
    // console.log(combinedSummaryList.length);
    // let size = combinedSummaryList.length;
    // console.log("Refresh attractiveness data activated");
    // console.log(size);
    // let obSize = OBSERVATIONSDATA.length;    
  
    combinedSummaryList.forEach(function(DDI) {
      COMBINEDSUMMARYDATA.insert(DDI);
    });
  },
});

