export const function createChildDynamicItems (topItem, dynamicItem, dynamicItems) { 
      var sourceArray = DRows.find({}).fetch();    
      var crossReferences = findCrossReferences(topItem, sourceArray);
      // console.log(crossReferences.length);

      if(crossReferences.length > 0) {  
        // console.log(crossReferences);      
        crossReferences.forEach(function(xItem, xIndex) {
          var crossReferencedTopRow = DRows.findOne({dRowId: xItem.tertiaryId});
          // console.log(preCompositionItem);

          var sItem = {};
          sItem.sourceDrowId = crossReferencedTopRow.dRowId;
          sItem.staticDstring = crossReferencedTopRow.staticDstring;
          sItem.pLabel = findPrincipalLabel(crossReferencedTopRow);
          sItem.dynamicDstring = dynamicItem.dynamicDstring + "." + (xIndex + 1).toString();
          sItem.parentId = dynamicItem.dRowId;
          sItem.dynamicSortString = createSortString(sItem.dynamicDstring);
          sItem.dynamicIndentLevel = calculateIndentLevel(sItem.dynamicDstring);
          sItem.indentLevelClass = "indentLevelClass_"+ sItem.dynamicIndentLevel;
          sItem.elementType = getElementType(crossReferencedTopRow);
          sItem.relationshipSubType = findRelationshipSubtype(xItem);
          sItem.crossReferenceId = xItem.dRowId;
          sItem.observations = attachDrowObservations(xItem);
          sItem.created = crossReferencedTopRow.created;
          sItem.selectionClass = "dynamicFamilyItem";
          sItem.linkClass = "link";
          var subsidiaryItem = createDynamicItem(sItem)
          dynamicItems.push(subsidiaryItem);
          // console.log(sItem)

          createChildDynamicItems(crossReferencedTopRow, subsidiaryItem, dynamicItems);
        });
      }
    }