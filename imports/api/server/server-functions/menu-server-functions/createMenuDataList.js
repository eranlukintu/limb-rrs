import { MENUDATAITEMS } from "../../../collections/menuCollections.js";
import { MENUDATAROWS } from "../../../collections/menuCollections";
import { getAttribute } from "./getAttribute.js";

export const createMenuDataList = function() {

	MENUDATAROWS.remove({});
	const menuDataItemsCollection = MENUDATAITEMS;

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
		const label = getAttribute(dString, "has principal label", indentLevel, menuDataItemsCollection);
		const type = getAttribute(dString, "has item type", indentLevel, menuDataItemsCollection);
		const desc = getAttribute(dString, "has description", indentLevel, menuDataItemsCollection);
		const menuDataRow = {};

		// console.log(type);

		menuDataRow.sourceDrowId = sourceDrowId;
		menuDataRow.dString = dString;
		menuDataRow.indentLevel = indentLevel;
		menuDataRow.sortString = sortString;
		menuDataRow.label = label;
		menuDataRow.type = type;
		menuDataRow.description = desc;
		menuDataRows.push(menuDataRow);
		MENUDATAROWS.insert(menuDataRow);
	});
	// console.log(menuDataRows);


}