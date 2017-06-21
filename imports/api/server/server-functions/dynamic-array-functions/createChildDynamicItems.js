import { findAttribute } from '../dot-functions/findAttribute.js';
import { DOTROWS } from '../../../collections/drows.js';
import { createSortStringAtServer } from '../createSortStringAtServer.js';
import { calculateIndentLevelAtServer } from '../dot-functions/calculateIndentLevelAtServer.js';
import { createDynamicItem } from './createDynamicItem.js';

export const createChildDynamicItems = function(topItem, dynamicItem, dynamicItems) {  
      let crossReferences = findAttribute(topItem.staticDString, 
                            "controls relationship with", 
                            topItem.staticIndentLevel);
      // console.log(crossReferences.length);

      if(crossReferences) {  
        // console.log(crossReferences);      
        crossReferences.forEach(function(xItem, xIndex) {
          let crossReferencedTopRow = DOTROWS.findOne({dRowId: xItem.tertiaryId});
          // console.log(preCompositionItem);

          let sItem = {};
          sItem.sourceDrowId = crossReferencedTopRow.dRowId;
          sItem.staticDstring = crossReferencedTopRow.staticDstring;
          sItem.pLabel = findAttribute(crossReferencedTopRow.staticDstring, "has principal label", crossReferencedTopRow.staticIndentLevel);
          sItem.dynamicDstring = dynamicItem.dynamicDstring + "." + (xIndex + 1).toString();
          sItem.parentId = dynamicItem.dRowId;
          sItem.dynamicSortString = createSortStringAtServer(sItem.dynamicDstring);
          sItem.dynamicIndentLevel = calculateIndentLevelAtServer(sItem.dynamicDstring);
          // sItem.indentLevelClass = "indentLevelClass_"+ sItem.dynamicIndentLevel;
          sItem.elementType = findAttribute(crossReferencedTopRow.staticDstring, "has item type", crossReferencedTopRow.staticIndentLevel)
          // sItem.relationshipSubType = findRelationshipSubtype(xItem);
          sItem.crossReferenceId = xItem.dRowId;
          // sItem.observations = attachDrowObservations(xItem);
          sItem.created = crossReferencedTopRow.created;
          // sItem.selectionClass = "dynamicFamilyItem";
          // sItem.linkClass = "link";
          let subsidiaryItem = createDynamicItem(sItem)
          dynamicItems.push(subsidiaryItem);
          // console.log(sItem)

          createChildDynamicItems(crossReferencedTopRow, subsidiaryItem, dynamicItems);
        });
      }
    }