import { Meteor } from "meteor/meteor";

export const attractivenessPipeline = [
  {
    $match: 
        {
          secondaryType: "influencer", 
          observationType: "impact",
          primaryDomain: "external",
          secondaryDomain: "internal"
        }              
  },
  {
    $group: {_id: "$controllingActorName", 
    // controllingActor: ($first: "$controllingActor"),
    primaryName: {$first:"$primaryName"},
    secondaryName: {$first: "$secondaryName"},
    subTotal: {$sum: 1} }
  },
  {
    $sort: {_id: 1}
  }
]
