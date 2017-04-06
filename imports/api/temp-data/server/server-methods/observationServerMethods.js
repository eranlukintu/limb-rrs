import { Meteor } from "meteor/meteor";
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { DISPLAYDATA } from "../../temp-collections/tempCollections.js";
import { TESTDATA } from "../../temp-collections/tempCollections.js";
import { OBSERVATIONDATA } from "../../temp-collections/tempCollections.js";

export const loadObservationsForDisplay = new ValidatedMethod({
  name: "DisplayData.observations",
  validate: new SimpleSchema({ 

  }).validator(),
  run({}) {
  	
  	OBSERVATIONDATA.remove({});

  	let pipeline = [
  		{$match: {$or:[{itemType:"actor"}, {itemType:"activity"}]}},
      {$sort: {staticSortString: 1}},
  	];

    let  observationDisplayData = TESTDATA.aggregate(pipeline);
    // console.log(observationDisplayData);

    observationDisplayData.forEach(function(AA) {
      OBSERVATIONDATA.insert(AA);
    });
  },
});


