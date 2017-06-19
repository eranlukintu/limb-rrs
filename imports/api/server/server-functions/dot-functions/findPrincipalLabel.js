export const findPrincipalLabel = function(item, staticArray) {
let label;

    if(item) {
      let itemDstring = item.staticDstring;
      let itemDstringLength = itemDstring.length;
      let itemDstringPattern = itemDstring + "."
      let level = item.staticIndentLevel;    
      let foundItems = [];

      staticArray.forEach(function(sItem) {
        let dStringBeingMatched = sItem.staticDstring;
        let dStringMatchPattern = dStringBeingMatched.slice(0, itemDstringLength + 1);
  
        if(itemDstringPattern === dStringMatchPattern && sItem.secondaryLabel === "has principal label") {

          foundItems.push(sItem);
        }
      });
    
      let foundItem = foundItems[0];
      
    if(foundItem) {
      label = foundItem.tertiaryLabel;
    } else {
      label = "Not found";
    }
  }
    
    return label;
  }