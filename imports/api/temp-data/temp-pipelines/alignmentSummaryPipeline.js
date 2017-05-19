export const alignmentSummaryPipeline = [
	{
		$group: {
			$_id: "$combinedId"
		}
	}
]