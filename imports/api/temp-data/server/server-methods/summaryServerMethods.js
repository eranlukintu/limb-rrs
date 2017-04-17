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

    let summaryAttractivenessData = OBSERVATIONDATA.aggregate(attractivenessSummaryPipeline);
  	
    let  summaryDisplayData = [];
    

    summaryAttractivenessData.forEach(function(summaryDisplayItem) {
      let summaryDisplayRow = {};
      summaryDisplayRow.itemLabel = summaryDisplayItem._id;
      summaryDisplayRow.itemValue = summaryDisplayItem.subTotal;
      summaryDisplayRow.indentLevel = 1;
      summaryDisplayData.push(summaryDisplayRow);
    });
    // console.log(summaryDisplayData);
    summaryDisplayData.forEach(function(DDI) {
      SUMMARYDATA.insert(DDI);
    });
  },
});

const attractivenessSummaryPipeline = [
  {
      $match: {
        $and: [
          {secondaryType: "influencer"}, 
          {observationType: "impact"},
          {primaryDomain: "internal"},
          {secondaryDomain: "external"},
        ]
      }        
  },
  {
    $group:{_id: "$scoreClass", subTotal: {$sum: 1}}
  },
];

