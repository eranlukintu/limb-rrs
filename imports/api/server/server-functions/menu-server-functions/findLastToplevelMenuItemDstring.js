import { MENUDATAITEMS } from '../../../collections/menuCollections.js';


export const findLastTopLevelMenuDataItemDstring = function() {

	let lastDstring;

	if(!MENUDATAITEMS) {
		console.log("no menu data items");
		lastDstring = "1";
	}else {
		const lastDstringPipeline = [		
			{$match: {staticIndentLevel: "0"}},
			{$sort: {staticSortString: 1}},
			{$group: {_id: null, last: {$last: "$$ROOT"}}},		
	]

		const topLevelArray=MENUDATAITEMS.aggregate(lastDstringPipeline);
		console.log(topLevelArray);
		

		if(topLevelArray) {
			lastDstring = topLevelArray[0].last.staticDstring;
		}else {
			lastDstring = 1;
		}
	}
	console.log("last dstring", lastDstring);
	return lastDstring;

}