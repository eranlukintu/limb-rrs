import { MENUDATAITEMS } from '../../../collections/menuCollections.js';


export const findLastTopLevelMenuDataItemDstring = function() {

	let lastDstring;
	const menuDataItemsLength = MENUDATAITEMS.find({}).count();
	console.log(menuDataItemsLength);

	if(menuDataItemsLength === 0) {
		console.log("no menu data items");
		lastDstring = "0";
	}else {
		const lastDstringPipeline = [		
			{$match: {staticIndentLevel: "0"}},
			{$sort: {staticSortString: 1}},
			{$group: {_id: null, last: {$last: "$$ROOT"}}},		
		]

		const topLevelArray=MENUDATAITEMS.aggregate(lastDstringPipeline);
		// console.log(topLevelArray);
		

		if(topLevelArray) {
			lastDstring = topLevelArray[0].last.staticDstring;
		}else {
			lastDstring = "0";
		}
	}
	console.log("last dstring", lastDstring);
	return lastDstring;

}