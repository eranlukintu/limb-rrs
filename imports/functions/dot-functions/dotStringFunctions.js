export const createSortString = function(dotString) {

    let expansionAmount = 1000000;
    let splitDotString = dotString.split(".");

    let adjustedDotString = splitDotString.forEach(function(c) {
        let ac = c + expansionAmount;
    });

    let sortString = adjustedDotString.join(".");
    return sortString;
  }
