import { MENUDATAITEMS } from "../../../collections/menuCollections.js";
import { MENUDATAROWS } from "../../../collections/menuCollections";
import { getAttribute } from "./getAttribute.js";

export const createMenuDataList = function() {

	// MENUDATAROWS.remove({});
	const menuDataItemsCollection = MENUDATAITEMS;

	const topLevelPipeline = [		
			{$match: {staticIndentLevel: "0"}},		
		]

	let menuDataRows = [];

	const topLevelMenuDataItemRows = MENUDATAITEMS.aggregate(topLevelPipeline)
	topLevelMenuDataItemRows.forEach(function(t) {
		const foundDataRow = MENUDATAROWS.findOne({sourceDrowId: t.dRowId});
		if(foundDataRow){
				const isChanged = function() {

					let isDataRowChanged = false;

					const dString = foundDataRow.staticDstring;
					const indentLevel = foundDataRow.staticIndentLevel;
					const originalLabel = foundDataRow.label;
					const newLabel = getAttribute(dString, "has principal label", indentLevel, menuDataItemsCollection);
					const originalDescription = foundRow.description;
					const newDescription = getAttribute(dString, "has description", indentLevel, menuDataItemsCollection);

					if(originalLabel !== newLabel) {
						isDataRowChanged = true;
					}

					if(originalDescription !== newDescription) {
						isDataRowChanged = true
					}

					return isDataRowChanged;
				}

				const dataRowChangedStatus = isChanged();
				if(dataRowChangedStatus === true) {
					const amendedLabel = getAttribute(
									foundDataRow.staticDstring, 
									"has principal label", 
									foundDataRow.staticIndentLevel, 
									menuDataItemsCollection);
					const amendedDescription =  getAttribute(
									foundDataRow.staticDstring, 
									"has description", 
									foundDataRow.staticIndentLevel, 
									menuDataItemsCollection);

					MENUDATAROWS.update(_id: t._id,	
							{ $set:
								{
									label: amendedLabel, description: amendedDescription
								}
							}
						);					
				}else {
					console.log("Data row already exists");
				}
		}else {
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

			MENUDATAROWS.insert(menuDataRow);
		}
	});
}