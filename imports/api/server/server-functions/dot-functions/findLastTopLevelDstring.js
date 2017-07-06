import { DOTROWS } from '../../../collections/drows.js';


export const findLastTopLevelDstring = function() {
	const lastDstringPipeline = [		
			{$match: {staticIndentLevel: "0"}},
			{$sort: {staticSortLevel: -1}},
			{$group: {_id: null, first: {$first: "$$ROOT"}}},		
	]

	const topLevelArray=DOTROWS.aggregate(lastDstringPipeline);
	let lastDstring;

	if(topLevelArray.length > 0) {
		lastDstring = topLevelArray[0].first.staticDstring;
	}else {
		lastDstring = 1;
	}
	return lastDstring;

}