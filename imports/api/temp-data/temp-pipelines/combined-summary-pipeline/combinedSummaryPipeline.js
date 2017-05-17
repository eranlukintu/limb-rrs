export const combinedSummaryPipeline = [
  {
    $match: {
      secondaryType: "influencer"
    }
  },
  {
     $sort: {primaryName: 1, secondaryName: 1}
  },
  {
    $project: {
      secondaryType: 1,
      primaryName: 1,
      secondaryName: 1,
      observationType: 1,
      primaryDomain: 1,
      secondaryDomain: 1,
      controllingActorName: 1,
      controllingActivityName: 1,
      controllingValueName: 1,
      scoreClass: 1, 
      category: {
        $cond: [
          {
            $and: [
            {$eq: ["$primaryDomain", "internal"]},
            {$eq: ["$secondaryDomain", "external"]}
          ]
        },
          "attractiveness",
            {
              $cond: [
                {
                  $and: [
                    {$eq: ["$primaryDomain", "external"]},
                    {$eq: ["$secondaryDomain", "internal"]}
                ]
              },
                "support",
                "other"
            ]   
          },          
        ]
      } 
    }
  },
  {
    $match: {
      category: {$ne: "other"}
    }
  },
  {
    $group: {
      _id: "$category",
      totalCategoryCount: {
        $sum: 1
      },
      low: {
        $sum: {
            $cond: [{$eq: ["$scoreClass", "low"]}, 1, 0 ]
          }
      },
      medium: {
          $sum: {
          $cond: [{$eq: ["$scoreClass", "medium"]}, 1, 0]
        }
      },
      high: {
          $sum: {
          $cond: [{$eq: ["$scoreClass", "high"]}, 1, 0]
        }
      },
    }
  },
  {
    $project: {
      lowImpactPercentage: {
        $multiply: [{$divide: ["$low", "$totalCategoryCount"]}, 100]
      },
      mediumImpactPercentage: {
        $multiply: [{$divide: ["$medium", "$totalCategoryCount"]}, 100]
      },
      highImpactPercentage: {
        $multiply: [{$divide: ["$high", "$totalCategoryCount"]}, 100]
      },

    }
  },
  // {
  //   $limit: 100
  // },
  // {
  //   $sort: {primaryName: 1, secondaryName: 1}
  // }
]