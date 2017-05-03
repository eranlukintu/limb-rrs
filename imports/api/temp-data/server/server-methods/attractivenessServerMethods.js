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
    // console.log(OBSERVATIONSDATA.find().count());
  	
  	ATTRACTIVENESSDATA.remove({});
  	// console.log("After remove", ATTRACTIVENESSDATA.find().count());
  	console.log(OBSERVATIONSDATA.find().count());
    
    let attractivenessObservations = OBSERVATIONSDATA.aggregate(attractivenessPipeline);
    // console.log(attractivenessObservations);
    // let size = attractivenessObservations.length;
    // console.log("Refresh attractiveness data activated");
    // console.log(size);
    // let obSize = OBSERVATIONSDATA.length;    
  
    attractivenessObservations.forEach(function(DDI) {
      ATTRACTIVENESSDATA.insert(DDI);
    });
  },
});
