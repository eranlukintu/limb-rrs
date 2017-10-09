import { MENUDATAITEMS } from '../../../collections/menuCollections.js';
import { MENUDATAROWS } from '../../../collections/menuCollections.js';
import { getHeadDrow } from '../dRow-functions/getHeadDrow.js';
import { createMenuDataItemsArray } from '../menu-server-functions/update-menu-data-item/createMenuDataItemsArray.js';
import { getHeadDrows } from '../dRow-functions/getHeadDrows.js';
import { createInitialArgs } from '../menu-server-functions/update-menu-data-row/createInitialArgs.js';
import { attributePhrases } from '../server-fixtures/attributePhrases.js';
import { createAttributeHierarchyArray } from '../dRow-functions/createAttributeHierarchyArray.js';
import { getDirectChildren } from '../dRow-functions/getDirectChildren.js';
import { createMenuDataRowsArray } from '../dRow-functions/createMenuDataRowsArray';
import { createCategorisedDataRowsArray } from '../menu-server-functions/update-menu-data-row/createCategorisedDataRowsArray.js';
import { saveMenuDataRows } from '../menu-server-functions/update-menu-data-row/saveMenuDataRows.js';

export const createMenuDataRows = function() {
  createInitialArgs(MENUDATAITEMS, attributePhrases, getDirectChildren, MENUDATAROWS)
  .then(function(initialArgs) {
    // console.log("Initial args", initialArgs)
    return getHeadDrows(initialArgs);
  })
  .then(function(args) {
    // console.log(args);
    return createAttributeHierarchyArray(args);
  })
  .then(function(args) {
    // console.log(args);
    return createMenuDataRowsArray(args);
  })
  .then(function(args) {
    // console.log(args);
    return createCategorisedDataRowsArray(args)
  })
  .then(function(args) {
    // console.log(args);
    return saveMenuDataRows(args, MENUDATAROWS);
  })
  .catch(function(error) {
    console.log(error);
  }); 
}

        
  
