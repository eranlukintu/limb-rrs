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
    $group:
      {
        _id: "$controllingActorName", 
        lowCount: 
          {
            $sum: 
              {
                $cond: [{$eq: ["$scoreClass", "low"]}, 1, 0 ]
              }
          },
          mediumCount: 
          {
            $sum: 
              {
                $cond: [{$eq: ["$scoreClass", "medium"]}, 1, 0 ]
              }
          },
          highCount: 
          {
            $sum: 
              {
                $cond: [{$eq: ["$scoreClass", "high"]}, 1, 0 ]
              }
          },
          subTotal: {$sum: 1}
      }
  },
  {
     $project: 
      {
        lowCount: 1,
        mediumCount: 1,
        highCount: 1,
        subTotal: 1,
        lowFraction: 
          {
            $divide: ["$lowCount", "$subTotal"]
          },
        mediumFraction: 
          {
            $divide: ["$mediumCount", "$subTotal"]
          },
        highFraction: 
          {
            $divide: ["$highCount", "$subTotal"]
          },
        combinedFraction: 
          {
            $divide: ["$subTotal", "$subTotal"]
          },
      }
  },
  {
    $sort: {_id: 1} 
  }
]




  // {
  //   $group: 
  //   {
  //     _id: "$controllingActorName", 
  //     primaryName: {$first:"$primaryName"},
  //     secondaryName: {$first: "$secondaryName"},
  //     lowItems: {
  //       $push: {
  //         $cond: {
  //           if: {$eq: ["$scoreClass", "low"]},
  //           then: ["$_id", "$scoreClass"],
  //           else: null,
  //           }
  //         }
  //       },

  //     // scoreClass: {$first: "$scoreClass"},
  //     // scoreClassRank: {$first: "$scoreClassRank"},
  //     subTotal: {$sum: 1} 
  //   }
  // },
  // {
  //   $project: {primaryName: 1, lowItems: 1}
  // }
  // {
  //   $sort: {_id: 1}
  // },
  // {
  //   $group: 
  //   {
  //     _id: "$scoreClass",
  //     primaryName: {$first:"$primaryName"},
  // //     // secondaryName: {$first: "$secondaryName"},
  // //     // scoreClassRank: {$first: "$scoreClassRank"},
  //   }
  // }
// ]
