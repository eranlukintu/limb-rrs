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