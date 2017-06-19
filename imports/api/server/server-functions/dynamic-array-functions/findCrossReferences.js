export const findCrossReferences = function(item, referenceArray) {

  let allCrossReferences = [];
  let dStringPattern = item.staticDstring + ".";
  let dStringPatternLength = dStringPattern.length;

  referenceArray.forEach(function(rItem) {
    let comparisonDstring = rItem.staticDstring.substring(0, dStringPatternLength);
    
    if(dStringPattern === comparisonDstring && rItem.secondaryLabel === "controls relationship with") {
        allCrossReferences.push(rItem);
      }
  });
  
  // Check for exclusions
  let crossReferences = [];
  allCrossReferences.forEach(function(xItem) {
    let isExcluded = findIfIsExcluded(xItem);
    // console.log(isExcluded);
    if(isExcluded === false) {
      crossReferences.push(xItem);
    }
  });

  return crossReferences;
}
