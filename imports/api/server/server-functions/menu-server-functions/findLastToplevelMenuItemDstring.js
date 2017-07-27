import { MENUITEMS } from '../../../collections/drows.js';


export const findLastTopLevelMenuDstring = function() {

	let lastDstring;

	if(!MENUITEMS) {
		lastDstring = "1";
	}else {
		const lastDstringPipeline = [		
			{$match: {staticIndentLevel: "0"}},
			{$sort: {staticSortLevel: -1}},
			{$group: {_id: null, first: {$first: "$$ROOT"}}},		
	]

		const topLevelArray=MENUITEMS.aggregate(lastDstringPipeline);
		

		if(topLevelArray.length > 0) {
			lastDstring = topLevelArray[0].first.staticDstring;
		}else {
			lastDstring = 1;
		}
	}
	
	return lastDstring;

}