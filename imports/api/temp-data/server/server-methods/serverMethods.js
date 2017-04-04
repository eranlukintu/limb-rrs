import { Meteor } from "meteor/meteor";
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { DISPLAYDATA } from "../../temp-collections/tempCollections.js";
import { TESTDATA } from "../../temp-collections/tempCollections.js";

export const loadActorsForDisplay = new ValidatedMethod({
  name: "DisplayData.actors",
  validate: new SimpleSchema({ 

  }).validator(),
  run({}) {
  	
  	DISPLAYDATA.remove({});

  	let pipeline = [
  		{$match: {itemType: "actor"}},
      {$sort: {staticDotString: 1}},
  	];

    let  displayData = TESTDATA.aggregate(pipeline);

    displayData.forEach(function(DDI) {
      DISPLAYDATA.insert(DDI);
    });
  },
});

export const loadItemAndDescendants = new ValidatedMethod({
  name: "DisplayData.loadItemAndDescendants",
  validate: new SimpleSchema({ 
    staticSString: {type: String},
  }).validator(),
  run({staticSString}) {
    
    DISPLAYDATA.remove({});
    // const staticDotString = item.staticDotString;
    // console.log(staticDotString);
    // console.log(staticDString);

    let pipeline = [
      {$match: {staticSortString: {$regex: "^" + staticSString}}},
      {$sort: {staticSortString: 1}},
    ];

    let  displayData = TESTDATA.aggregate(pipeline);

    displayData.forEach(function(DDI) {
      DISPLAYDATA.insert(DDI);
    });
  },
});