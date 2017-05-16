import { Meteor } from "meteor/meteor";

export const attractivenessPipeline = [
  {
    $match: 
        {
          secondaryType: "influencer", 
          // observationType: "impact",
          primaryDomain: "external",
          secondaryDomain: "internal"
        }              
  },
  {
    $group: 
      {
        _id: 
        {
          obType: "$observationType",
          scoreClass: "$scoreClass"
        },
      }
  },
  {
    $group:
      {
        _id: "$_id.observationType",
        

      }
  }
  // {
  //   $project: 
  //     {
  //       scores: 1
  //     }
  // }
  // //       _id: "$controllingActorName",    
  //       lowImpactCount: 
  //         {
  //           $sum: 
  //             {
  //               $cond: [{$eq: ["$scoreClass", "low"]}, 1, 0 ]
  //             }
  //         },
  //         mediumImpactCount: 
  //         {
  //           $sum: 
  //             {
  //               $cond: [{$eq: ["$scoreClass", "medium"]}, 1, 0 ]
  //             }
  //         },
  //         highImpactCount: 
  //         {
  //           $sum: 
  //             {
  //               $cond: [{$eq: ["$scoreClass", "high"]}, 1, 0 ]
  //             }
  //         },
  //         subTotal: {$sum: 1}
  //     }
  // },
  // {
  //    $project: 
  //     {
  //       lowImpactCount: 1,
  //       mediumImpactCount: 1,
  //       highImpactCount: 1,
  //       subTotal: 1,
  //       lowImpactFraction: 
  //         {
  //           $divide: ["$lowImpactCount", "$subTotal"]
  //         },
  //       mediumImpactFraction: 
  //         {
  //           $divide: ["$mediumImpactCount", "$subTotal"]
  //         },
  //       highImpactFraction: 
  //         {
  //           $divide: ["$highImpactCount", "$subTotal"]
  //         },
  //       combinedImpactFraction: 
  //         {
  //           $divide: ["$subTotal", "$subTotal"]
  //         },
  //     }
  // },
  // {
  //   $sort: {_id: 1} 
  // }
]

