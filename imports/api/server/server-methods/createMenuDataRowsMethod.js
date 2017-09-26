import { Meteor } from "meteor/meteor";
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { MENUDATAITEMS } from '../../collections/menuCollections.js';
import { getHeadDrow } from '../server-functions/dRow-functions/getHeadDrow.js';
import { createMenuDataItemsArray } from '../server-functions/menu-server-functions/update-menu-data-item/createMenuDataItemsArray.js';
import { getHeadDrows } from '../server-functions/dRow-functions/getHeadDrows.js';
import { createInitialArgs } from '../server-functions/menu-server-functions/update-menu-data-row/createInitialArgs.js';
import { attributePhrases } from '../server-functions/server-fixtures/attributePhrases.js';
import { createAttributeHierarchyArray } from '../server-functions/dRow-functions/createAttributeHierarchyArray.js';
import { getDirectChildren } from '../server-functions/dRow-functions/getDirectChildren.js';
import { createMenuDataRowsArray } from '../server-functions/dRow-functions/createMenuDataRowsArray';

export const createMenuDataRows = new ValidatedMethod({
  name: "createMenuDataRows",
  validate: new SimpleSchema({ 

  }).validator(),
  run({}) {

        createInitialArgs(MENUDATAITEMS, attributePhrases, getDirectChildren)
        .then(function(initialArgs) {
          // console.log(initialArgs)
          return getHeadDrows(initialArgs);
        })
        .then(function(args) {
          return createAttributeHierarchyArray(args);
        })
        .then(function(args) {
          return createMenuDataRowsArray(args);
        })
        .then(function(args) {
          console.log(args);
        })
        .catch(function(error) {
          console.log(error);
        }); 

    }     

});