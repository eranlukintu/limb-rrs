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
    // console.log(segmentArray);
    let segmentArrayLength = segmentArray.length;
    // console.log(segmentArrayLength);
    let lastIndex = segmentArrayLength;
    let parentIndex = lastIndex-1;
    // console.log(parentIndex);
    let parentDotString = [];

    if(parentIndex > -1) {
        parentSegmentArray = segmentArray.slice(0, parentIndex);
        // console.log(parentSegmentArray);
        parentDotString = parentSegmentArray.join(".");
    }else {
        parentDotString = "NA";
    }
    // console.log(dString, parentDotString);
    return parentDotString;
  }

export const calculateGrandparentDotString = function(dString) {
    let segmentArray = dString.split(".");
    let segmentArrayLength = segmentArray.length;
    let lastIndex = segmentArrayLength;
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

  export const calculateGreatgrandparentDotString = function(dString) {
    let segmentArray = dString.split(".");
    let segmentArrayLength = segmentArray.length;
    let lastIndex = segmentArrayLength;
    let greatGrandparentIndex = lastIndex - 3;
    let greatGrandparentDotString = [];

    if(greatGrandparentIndex > -1) {
        greatGrandparentSegmentArray = segmentArray.slice(0, greatGrandparentIndex);
        greatGrandparentDotString = greatGrandparentSegmentArray.join(".");
    }else {
        greatGrandparentDotString = "NA";
    }
    return greatGrandparentDotString;
  }

  export const calculateIndentLevel = function(dString) {
    // console.log(dString);
    let dStringSegments = dString.split(".");
    let segmentNumber = dStringSegments.length;
    let indentLevelNumber = segmentNumber - 1;
    let indentLevel = indentLevelNumber.toString();
    return indentLevel;
  }