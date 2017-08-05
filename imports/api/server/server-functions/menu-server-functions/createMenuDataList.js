import { MENUDATAITEMS } from "../../../collections/menuCollections.js";
import { MENUDATAROWS } from "../../../collections/menuCollections";
import { getAttribute } from "./getAttribute.js";

export const createMenuDataList = function() {

	MENUDATAROWS.remove({});

	const topLevelPipeline = [		
			{$match: {staticIndentLevel: "0"}},		
		]

	let menuDataRows = [];

	const topLevelMenuDataItemRows = MENUDATAITEMS.aggregate(topLevelPipeline)
	topLevelMenuDataItemRows.forEach(function(t) {
		// console.log(t);
		const sourceDrowId = t.dRowId;
		const dString = t.staticDstring;
		const indentLevel = t.staticIndentLevel;
		const sortString = t.staticSortString;
		const label = getAttribute(dString, "has principal label", indentLevel);
		const type = getAttribute(dString, "has item type", indentLevel);
		const desc = getAttribute(dString, "has description", indentLevel);
		const menuDataRow = {};
		menuDataRow.sourceDrowId = sourceDrowId;
		menuDataRow.dString = dString;
		menuDataRow.indentLevel = indentLevel;
		menuDataRow.sortString = sortString;
		menuDataRow.label = label;
		menuDataRow.description = desc;
		menuDataRows.push(menuDataRow);
		MENUDATAROWS.insert(menuDataRow);
	});
	// console.log(menuDataRows);


}