import { Meteor } from "meteor/meteor";
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { OBSERVATIONSDATA} from "../../temp-collections/tempCollections.js";
import { ATTRACTIVENESSDATA } from "../../temp-collections/tempCollections.js";
import { attractivenessPipeline } from "../../temp-pipelines/tempPipelines.js";

export const refreshAttractivenessData = new ValidatedMethod({
  name: "refreshAttractivenessData",
  validate: new SimpleSchema({ 

  }).validator(),
  run({}) {

    // console.log(this.userId);
  	
  	ATTRACTIVENESSDATA.remove({});
    
    let attractivenessObservations = OBSERVATIONSDATA.aggregate(attractivenessPipeline);
    // let size = attractivenessObservations.length;
    // console.log(size);
    
  
    attractivenessObservations.forEach(function(DDI) {
      ATTRACTIVENESSDATA.insert(DDI);
    });
  },
});