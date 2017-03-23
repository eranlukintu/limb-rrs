export const createSortString = function(dString) {
    // console.log(dString);
    let splitDstring = dString.split(".");
    let counter = splitDstring.length;
    for(i=0; i<counter; i++){
      splitDstring[i] = (Number(splitDstring[i]) + 10000).toString();
    }
    let sortString = splitDstring.join(".");
    // let sortString = "10001";
    return sortString;
  }


export const calculateParentDotString = function(dString) {
    let segmentArray = dString.split(".");
    let segmentArrayLength = segmentArray.length;
    let lastIndex = segmentArrayLength - 1;
    let parentIndex = lastIndex - 1;
    let parentDotString = [];

    if(parentIndex > -1) {
        parentSegmentArray = segmentArray.slice(0, parentIndex);
        parentDotString = parentSegmentArray.join(".");
    }else {
        parentDotString = "NA";
    }
    return parentDotString;
  }

export const calculateGrandparentDotString = function(dString) {
    let segmentArray = dString.split(".");
    let segmentArrayLength = segmentArray.length;
    let lastIndex = segmentArrayLength - 1;
    let grandparentIndex = lastIndex - 2;
    let grandparentDotString = [];

    if(grandparentIndex > -1) {
        grandparentSegmentArray = segmentArray.slice(0, grandparentIndex);
        grandparentDotString = grandparentSegmentArray.join(".");
    }else {
        grandparentDotString = "NA";
    }
    return grandparentDotString;
  }