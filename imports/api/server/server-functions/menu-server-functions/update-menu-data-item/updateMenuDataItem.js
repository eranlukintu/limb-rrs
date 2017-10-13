import { MENUDATAITEMS } from '../../../../collections/menuCollections.js';
import { MENUDATAROWS } from '../../../../collections/menuCollections.js';
import { getHeadDrow } from '../../dRow-functions/getHeadDrow.js';
import { createInitialArgs } from '../update-menu-data-row/createInitialArgs.js';
import { attributePhrases } from '../../server-fixtures/attributePhrases.js';
import { createAttributeHierarchyArray } from '../../dRow-functions/createAttributeHierarchyArray.js';
import { getDirectChildren } from '../../dRow-functions/getDirectChildren.js';
import { createMenuDataRowsArray } from '../..//dRow-functions/createMenuDataRowsArray';
import { getAttributeDrows } from '../../dRow-functions/getAttributeDrows.js';
import { createCategorisedDataRowsArray } from '../update-menu-data-row/createCategorisedDataRowsArray.js';
import { saveMenuDataRows } from '../update-menu-data-row/saveMenuDataRows.js';
import { getPendingAttributeDrows } from '../../dRow-functions/getPendingAttributeDrows.js';
import { getLastDescriptionWord } from '../../dRow-functions/getLastDescriptionWord.js';
import { updatePendingAttributeDrows } from '../../dRow-functions/updatePendingAttributeDrows.js';
import { createMenuDataRows } from '../createMenuDataRows.js';

export const updateMenuDataItem = function(menuDataItem) {
		
	const sourceDrowId = menuDataItem.sourceDrowId;
	// console.log("update started");

	createInitialArgs(MENUDATAITEMS, attributePhrases, getDirectChildren, MENUDATAROWS)
	.then(function(args) {
		// console.log(args);
		return getHeadDrow(args, sourceDrowId, menuDataItem);
	})
	.then(function(args) {
		// console.log(args.originalHeadDrow);
		return getAttributeDrows(args);
	})
	.then(function(args) {
		return getPendingAttributeDrows(args, getLastDescriptionWord);
	})
	.then(function(args) {
		updatePendingAttributeDrows(args, MENUDATAITEMS);
	})
	.then(function() {
		return createMenuDataRows();
	})
	.catch(function(err) {
		console.log(err);
	});
}
