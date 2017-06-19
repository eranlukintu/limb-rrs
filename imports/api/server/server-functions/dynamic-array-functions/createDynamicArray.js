import { DYNAMICROWS } from '../../../collections/dynamicRows.js';
import { DOTROWS } from '../../../collections/drows.js';

export const createDynamicArray = function() {

    const staticArray = DOTROWS.find().fetch();

    return staticArray;
  




  // var dynamicFamilyItems = []
  // var familyHeadDrow = DRows.findOne({staticDstring: familyHeadDstring});
  // // console.log("Dynamic array activated");
  
  // if(familyHeadDrow) {
  //   var fItem = {};
  //   fItem.staticDstring = familyHeadDrow.staticDstring;
  //   fItem.dRowId = Random.id();
  //   fItem.sourceDrowId = familyHeadDrow.dRowId;
  //   fItem.pLabel = findPrincipalLabel(familyHeadDrow);
  //   fItem.dynamicDstring = "1";
  //   fItem.parentId = "null";
  //   fItem.dynamicSortString = createSortString(fItem.dynamicDstring);
  //   fItem.dynamicIndentLevel = calculateIndentLevel(fItem.dynamicDstring);
  //   fItem.elementType = getElementType(familyHeadDrow);
  //   fItem.indentLevelClass = "indentLevelClass_"+ fItem.dynamicIndentLevel;
  //   fItem.relationshipSubType = "NA";
  //   fItem.crossReferenceId = "xxx";
  //   fItem.observations = [];
  //   fItem.created = familyHeadDrow.created;
  //   fItem.selectionClass = "dynamicFamilyItem";
  //   fItem.linkClass = "link";
  //   var dynamicItem = createDynamicItem(fItem)
  //   dynamicFamilyItems.push(dynamicItem);

  //   createChildDynamicItems(familyHeadDrow, dynamicItem, dynamicFamilyItems);    
  // }
  //   Session.set('dynamicFamilyArray', dynamicFamilyItems);
  //   return dynamicFamilyItems;

}
