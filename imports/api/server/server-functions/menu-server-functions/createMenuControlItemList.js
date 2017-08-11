import { MENUDATACONTROLVARIABLES } from "../../../collections/menuCollections.js";
import { MENUCONTROLVARIABLESROWS } from "../../../collections/menuCollections";
import { getAttribute } from "./getAttribute.js";

export const createMenuControlItemList = function() {

	MENUCONTROLVARIABLESROWS.remove({});

	const topLevelPipeline = [		
			{$match: {staticIndentLevel: "0"}},		
		]

	let menuControlRows = [];

	const topLevelMenuControlItemRows = MENUDATACONTROLVARIABLES.aggregate(topLevelPipeline)
	// console.log(topLevelMenuControlItemRows);
	topLevelMenuControlItemRows.forEach(function(t) {
		// console.log(t);
		const sourceDrowId = t.dRowId;
		const dString = t.staticDstring;
		const indentLevel = t.staticIndentLevel;
		const sortString = t.staticSortString;
		const menuControlItems = MENUDATACONTROLVARIABLES;

		// console.log(sourceDrowId, dString, indentLevel, sortString);

		const label = getAttribute(dString, "has principal label", indentLevel, menuControlItems);
		const type = getAttribute(dString, "has item type", indentLevel, menuControlItems);
		const desc = getAttribute(dString, "has description", indentLevel, menuControlItems);
		const category = getAttribute(dString, "has category", indentLevel, menuControlItems);

		const menuControlRow = {};
		menuControlRow.sourceDrowId = sourceDrowId;
		menuControlRow.dString = dString;
		menuControlRow.indentLevel = indentLevel;
		menuControlRow.sortString = sortString;
		menuControlRow.label = label;
		menuControlRow.type = type;
		menuControlRow.description = desc;
		menuControlRow.category = category;
		
		menuControlRows.push(menuControlRow);
		MENUCONTROLVARIABLESROWS.insert(menuControlRow);
	});
	// console.log(menuControlRows);


}