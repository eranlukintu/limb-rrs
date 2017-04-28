export const attractivenessPipeline = [
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
  {
    $group: {_id: "$primaryName", "influencers": {$push: {"influencer": "$secondaryName"}}}
  },
];