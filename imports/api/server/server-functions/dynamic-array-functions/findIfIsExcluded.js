export const findIfIsExcluded = function(crossReferenceDrow) {
  let isExcluded;
  let exclusionArray = [];
  let crossReferenceChildren = createDirectChildrenArray(crossReferenceDrow.staticDstring, 
                                crossReferenceDrow.staticIndentLevel);
  crossReferenceChildren.forEach(function(cItem) {
    if(cItem.secondaryLabel === "is included" || cItem.secondaryLabel === "is excluded") {
      exclusionArray.push(cItem);
    }
  });

  exclusionArray.sort(function(a, b) {
    return a.staticSortString > b.staticSortString
  });

  if(exclusionArray.length === 0) {
    isExcluded = false;
  } else {
    let lastEntry = exclusionArray[exclusionArray.length-1];
      if(lastEntry.secondaryLabel === "is excluded") {
        isExcluded = true;
      } else {
        isExcluded = false;
      }
  }
  return isExcluded;
}
