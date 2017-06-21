export const calculateIndentLevelAtServer = function(dString) {
    let dStringSegments = dString.split(".");
    let segmentNumber = dStringSegments.length;
    let indentLevelNumber = segmentNumber - 1;
    let indentLevel = indentLevelNumber.toString();
    return indentLevel;
  }