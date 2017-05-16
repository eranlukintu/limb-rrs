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
    $limit: 100
  },
  {
    $sort: {primaryName: 1, secondaryName: 1}
  }
]