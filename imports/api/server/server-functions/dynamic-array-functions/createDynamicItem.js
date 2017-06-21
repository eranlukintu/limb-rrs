export const createDynamicItem = function(sourceItem) {
  var dynamicItem = {};
  dynamicItem.staticDstring = sourceItem.staticDstring;
  dynamicItem.sourceRowId = sourceItem.sourceDrowId;
  dynamicItem.dRowId = Random.id();
  dynamicItem.dynamicDstring = sourceItem.dynamicDstring;
  dynamicItem.dynamicSortString = sourceItem.dynamicSortString;
  dynamicItem.dynamicIndentLevel = sourceItem.dynamicIndentLevel;
  dynamicItem.pLabel = sourceItem.pLabel;
  dynamicItem.parentId = sourceItem.parentId;
  // dynamicItem.indentLevelClass = sourceItem.indentLevelClass;
  dynamicItem.elementType = sourceItem.elementType;
  // dynamicItem.relationshipSubType = sourceItem.relationshipSubType;
  dynamicItem.crossReferenceId = sourceItem.crossReferenceId;
  dynamicItem.observations = sourceItem.observations;
  dynamicItem.created = sourceItem.created;
  // dynamicItem.selectionClass = sourceItem.selectionClass;
  // dynamicItem.linkClass = sourceItem.linkClass;
  // console.log(dynamicItem);
  return dynamicItem;
}