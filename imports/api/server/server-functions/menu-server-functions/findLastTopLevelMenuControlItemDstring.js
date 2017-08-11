import { MENUDATACONTROLVARIABLES } from '../../../collections/menuCollections.js';


export const findLastTopLevelMenuControlItemDstring = function() {

	let lastDstring;
	const menuControlItemsLength = MENUDATACONTROLVARIABLES.find({}).count();
	console.log(menuControlItemsLength);

	if(menuControlItemsLength === 0) {
		console.log("no menu control items");
		lastDstring = "0";
	}else {
		const lastDstringPipeline = [		
			{$match: {staticIndentLevel: "0"}},
			{$sort: {staticSortString: 1}},
			{$group: {_id: null, last: {$last: "$$ROOT"}}},		
		]

		const topLevelArray=MENUDATACONTROLVARIABLES.aggregate(lastDstringPipeline);
		// console.log(topLevelArray);
		

		if(topLevelArray) {
			lastDstring = topLevelArray[0].last.staticDstring;
		}else {
			lastDstring = "0";
		}
	}
	// console.log("last dstring", lastDstring);
	return lastDstring;

}