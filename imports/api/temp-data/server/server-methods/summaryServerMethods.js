import { Meteor } from "meteor/meteor";
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { DISPLAYDATA } from "../../temp-collections/tempCollections.js";
import { TESTDATA } from "../../temp-collections/tempCollections.js";
import { OBSERVATIONSDATA } from "../../temp-collections/tempCollections.js";
import { SUMMARYDATA } from "../../temp-collections/tempCollections.js";
import { ATTRACTIVENESSDATA } from "../../temp-collections/tempCollections.js";
import { SUPPORTDATA } from "../../temp-collections/tempCollections.js";
import { ALIGNMENTDATA } from "../../temp-collections/tempCollections.js";


export const createSummaryDataForDisplay = new ValidatedMethod({
  name: "SummaryData.create",
  validate: new SimpleSchema({ 

  }).validator(),
  run({}) {

    // console.log(this.userId);
  	
  	SUMMARYDATA.remove({});
    // let userId = this.userId;
    // console.log(userId);
    let summaryObservations = OBSERVATIONSDATA.aggregate(summaryPipeline);
    // let size = summaryObservations.length;
    // console.log(size);

    // let summaryAttractivenessData = OBSERVATIONSDATA.aggregate(attractivenessSummaryPipeline);
    // let summarySupportData = OBSERVATIONSDATA.aggregate(supportSummaryPipeline);

    // console.log(summaryAttractivenessData);

    // let  summaryDisplayData = addSummaryAttractivenessData(summaryAttractivenessData);
    // let extendedSummaryDisplayData = addSummarySupportData(summarySupportData, summaryDisplayData);
  
    summaryObservations.forEach(function(DDI) {
      SUMMARYDATA.insert(DDI);
    });
  },
});

const summaryPipeline = [
  {
      $match: 
        {
          secondaryType: "influencer", 
          observationType: "impact",
        }        
  },
  {
    $limit: 50
  }
];

const attractivenessSummaryPipeline = [
  {
      $match: {
        $and: [
          // {userId: userId},
          {secondaryType: "influencer"}, 
          {observationType: "impact"},
          {primaryDomain: "internal"},
          {secondaryDomain: "external"},
        ]
      }        
  },
];

const supportSummaryPipeline = [
  {
      $match: {
        $and: [
          // {userId: userId},
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

