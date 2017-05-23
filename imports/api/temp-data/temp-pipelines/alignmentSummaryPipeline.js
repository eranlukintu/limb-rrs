export const alignmentSummaryPipeline = [
	{
		$group: {
			_id: "$_id",
			// maxScore: {$max: "$score"},
			// minScore: {$min: "$score"},
			// actors: {
			// 	$push: "$controllingActorName"
			// }
		}
	},
	// {
	// 	$project: {
	// 		spreadResult: {$subtract: ["$maxScore", "$minScore"]}
	// 	}
	// }
]