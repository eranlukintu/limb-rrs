import { Meteor } from "meteor/meteor";
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { MENUDATAITEMS } from '../../collections/menuCollections.js';
import { MENUDATAROWS } from '../../collections/menuCollections.js';
import { getHeadDrow } from '../server-functions/dRow-functions/getHeadDrow.js';
// import { createMenuDataItemsArray } from '../server-functions/menu-server-functions/update-menu-data-item/createMenuDataItemsArray.js';
// import { getHeadDrows } from '../server-functions/dRow-functions/getHeadDrows.js';
import { createInitialArgs } from '../server-functions/menu-server-functions/update-menu-data-row/createInitialArgs.js';
import { attributePhrases } from '../server-functions/server-fixtures/attributePhrases.js';
import { createAttributeHierarchyArray } from '../server-functions/dRow-functions/createAttributeHierarchyArray.js';
import { getDirectChildren } from '../server-functions/dRow-functions/getDirectChildren.js';
import { createMenuDataRowsArray } from '../server-functions/dRow-functions/createMenuDataRowsArray';
import { getAttributeDrows } from '../server-functions/dRow-functions/getAttributeDrows.js';
import { createCategorisedDataRowsArray } from '../server-functions/menu-server-functions/update-menu-data-row/createCategorisedDataRowsArray.js';
import { saveMenuDataRows } from '../server-functions/menu-server-functions/update-menu-data-row/saveMenuDataRows.js';
import { getPendingAttributeDrows } from '../server-functions/dRow-functions/getPendingAttributeDrows.js';
import { getLastDescriptionWord } from '../server-functions/dRow-functions/getLastDescriptionWord.js';
import { updatePendingAttributeDrows } from '../server-functions/dRow-functions/updatePendingAttributeDrows.js';

export const updateMenuDataItemMethod = new ValidatedMethod({
  name: "updateMenuDataItemMethod",
  validate: new SimpleSchema({ 
    sourceDrowId: {type: String},
    label: {type: String},
    type: {type: String},
    description: {type: String}
  }).validator(),
  run(menuDataItem) {
		
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
		.catch(function(err) {
			console.log(err);
		});
	
	}
});
