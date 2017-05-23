import { Meteor } from "meteor/meteor";
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { OBSERVATIONSDATA} from "../../temp-collections/tempCollections.js";
import { ALIGNMENTDATA } from "../../temp-collections/tempCollections.js";
import { alignmentSummaryPipeline } from "../../temp-pipelines/alignmentSummaryPipeline.js";

export const refreshAlignmentData = new ValidatedMethod({
  name: "refreshAlignmentData",
  validate: new SimpleSchema({ 

  }).validator(),
  run({}) {
  	
  	ALIGNMENTDATA.remove({});
  	
    let alignmentObservations = OBSERVATIONSDATA.aggregate(alignmentSummaryPipeline);
    console.log("Alignments", alignmentObservations.length);
    
    alignmentObservations.forEach(function(DDI) {
      ALIGNMENTDATA.insert(DDI);
    });
  },
});