export const createSortStringAtServer = function(dotString) {

    let expansionAmount = 1000000;
    let splitDotString = dotString.split(".");
    let separatedDotString = [];
    splitDotString.forEach(function(c) {
    	let newC = (Number(c) + expansionAmount).toString();
    	separatedDotString.push(newC);
    });
    let adjustedDotString = separatedDotString.join(".");
    return adjustedDotString;
  }