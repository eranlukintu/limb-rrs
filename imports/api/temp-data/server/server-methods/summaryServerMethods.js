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
    let summarySupportData = OBSERVATIONDATA.aggregate(supportSummaryPipeline);

    console.log(summaryAttractivenessData);

    let  summaryDisplayData = addSummaryAttractivenessData(summaryAttractivenessData);
    let extendedSummaryDisplayData = addSummarySupportData(summarySupportData, summaryDisplayData);
  
    extendedSummaryDisplayData.forEach(function(DDI) {
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

const supportSummaryPipeline = [
  {
      $match: {
        $and: [
          {secondaryType: "influencer"}, 
          {observationType: "impact"},
          {primaryDomain: "external"},
          {secondaryDomain: "internal"},
        ]
      }        
  },
  {
    $group:{_id: "$scoreClass", subTotal: {$sum: 1}}
  },
];

const addSummaryAttractivenessData = function(summaryAttractivenessData) {
  let  summaryDisplayData = [];
  summaryAttractivenessData.forEach(function(summaryDisplayItem) {
    let summaryDisplayRow = {}; 
    // summaryDisplayRow.userId = summaryDisplayItem.userId;   
    summaryDisplayRow.itemCategory = "attractiveness";
    summaryDisplayRow.itemLabel = summaryDisplayItem._id;
    summaryDisplayRow.itemValue = summaryDisplayItem.subTotal;
    summaryDisplayRow.indentLevel = 1;
    summaryDisplayRow.sortRanking = 1;
    summaryDisplayRow.scoreClassRank = summaryDisplayItem.scoreClassRank;
    summaryDisplayData.push(summaryDisplayRow);
  });
  return summaryDisplayData;
}

const addSummarySupportData = function(summarySupportData, summaryDisplayData) {
  summarySupportData.forEach(function(summaryDisplayItem) {
    let summaryDisplayRow = {};
    // summaryDisplayRow.userId = summaryDisplayItem.userId; 
    summaryDisplayRow.itemCategory = "support";
    summaryDisplayRow.itemLabel = summaryDisplayItem._id;
    summaryDisplayRow.itemValue = summaryDisplayItem.subTotal;
    summaryDisplayRow.indentLevel = 1;
    summaryDisplayRow.sortRanking = 2;
    summaryDisplayRow.scoreClassRank = summaryDisplayItem.scoreClassRank;
    summaryDisplayData.push(summaryDisplayRow);
  });
  return summaryDisplayData;
}

