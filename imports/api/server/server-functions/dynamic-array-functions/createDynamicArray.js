import { DYNAMICROWS } from '../../../collections/dynamicRows.js';
import { DOTROWS } from '../../../collections/drows.js';
import { Random } from 'meteor/random';
import { findAttribute } from '../dot-functions/findAttribute.js';
import { createSortStringAtServer } from '../createSortStringAtServer.js';
import { calculateIndentLevelAtServer } from '../dot-functions/calculateIndentLevelAtServer.js';
import { createDynamicItem } from './createDynamicItem.js';
import { createChildDynamicItems } from './createChildDynamicItems.js';

export const createDynamicArray = function(familyHeadDrow) {

    // const staticArray = DOTROWS.find().fetch();
    
  let dynamicFamilyItems = []
  // // console.log("Dynamic array activated");
  
  if(familyHeadDrow) {
    let fItem = {};
    fItem.staticDstring = familyHeadDrow.staticDstring;
    fItem.dRowId = Random.id();
    fItem.sourceDrowId = familyHeadDrow.dRowId;

    fItem.pLabel = findAttribute(familyHeadDrow.staticDstring, "has principal label", familyHeadDrow.staticIndentLevel);
    fItem.dynamicDstring = "1";
    fItem.parentId = "null";
    fItem.dynamicSortString = createSortStringAtServer(fItem.dynamicDstring);
    fItem.dynamicIndentLevel = calculateIndentLevelAtServer(fItem.dynamicDstring);
    fItem.elementType = findAttribute(familyHeadDrow.staticDstring, "has item type", familyHeadDrow.staticIndentLevel)
    // // fItem.indentLevelClass = "indentLevelClass_"+ fItem.dynamicIndentLevel;
    // fItem.relationshipSubType = "NA";
    fItem.crossReferenceId = "xxx";
    fItem.observations = [];
    fItem.created = familyHeadDrow.created;
    // // fItem.selectionClass = "dynamicFamilyItem";
    // // fItem.linkClass = "link";
    let dynamicItem = createDynamicItem(fItem)
    dynamicFamilyItems.push(dynamicItem);

    // console.log(fItem);

    createChildDynamicItems(familyHeadDrow, dynamicItem, dynamicFamilyItems);    
  }
    // Session.set('dynamicFamilyArray', dynamicFamilyItems);
    console.log(dynamicFamilyItems);
    return dynamicFamilyItems;

}
