import { Meteor } from "meteor/meteor";
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { MENUASSOCIATIONS } from '../../collections/menuCollections.js';
import { MENUDATAROWS } from '../../collections/menuCollections.js';
import { MENUCOMBINATIONS } from '../../collections/menuCollections.js';
import { getMenuCombinationLabel } from '../server-functions/menu-server-functions/getMenuCombinationLabel.js';
import { getMenuDataRowLabel } from '../server-functions/menu-server-functions/getMenuDataRowLabel.js';
import { validateMenuAssociation } from '../server-functions/menu-server-functions/validateMenuAssociation';
import { checkForDuplicateMenuAssociation } from '../server-functions/menu-server-functions/checkForDuplicateMenuAssociation';
import { removeMenuAssociation } from '../server-functions/menu-server-functions/removeMenuAssociation.js';

export const updateMenuAssociationsMethod = new ValidatedMethod({
  name: "updateMenuAssociationsMethod",
  validate: new SimpleSchema({
  	menuCombinationId: {type: String},
  	menuDataRowId: {type: String},
    previousMenuDataRowId: {type: String} 
  }).validator(),
  run(associationIds) {
      const menuCombinationLabel = getMenuCombinationLabel(
      								associationIds.menuCombinationId, 
      								MENUCOMBINATIONS);

      const menuDataRowLabel = getMenuDataRowLabel(
      								associationIds.menuDataRowId,
      								MENUDATAROWS);

      const valid = validateMenuAssociation(
                      associationIds.menuCombinationId,
                      associationIds.menuDataRowId,
                      MENUASSOCIATIONS);

      // console.log(valid);
      const isThereDuplicate = checkForDuplicateMenuAssociation(
                      associationIds.menuCombinationId,
                      associationIds.menuDataRowId,
                      MENUASSOCIATIONS);

      if(valid===true && isThereDuplicate===false) {
          const menuAssociationItem = {};
          menuAssociationItem.menuCombinationId = associationIds.menuCombinationId;
          menuAssociationItem.menuCombinationLabel = menuCombinationLabel;
          menuAssociationItem.menuDataRowId = associationIds.menuDataRowId;
          menuAssociationItem.menuDataRowLabel = menuDataRowLabel;

          MENUASSOCIATIONS.insert(menuAssociationItem);
      } else if (isThereDuplicate === true) {
            const menuAssociationItemToBeRemoved = removeMenuAssociation(
                                associationIds.menuCombinationId,
                                associationIds.menuDataRowId,
                                MENUASSOCIATIONS);
            if(menuAssociationItemToBeRemoved !=="x") {
              const removalId = menuAssociationItemToBeRemoved._id;
              MENUASSOCIATIONS.remove(removalId);
            } else {
              console.log("Item not found");
            }
      } else {
        console.log("valid", valid);
        console.log("duplicate", isThereDuplicate);
      }      
  }
});