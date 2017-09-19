export const getAttributeDrows = function(args2) {
 return new Promise(function(resolve, reject) {
 	const headDrow = args2.headDrow; 

 	if(headDrow) {
		// console.log(headDrow);
 		const originalStaticIndentLevel = args2.headDrow.staticIndentLevel;
 		const dString = args2.headDrow.staticDstring;
 		const staticIndentLevel = (Number(originalStaticIndentLevel) + 1).toString();
   		let dStringToBeMatched = "^" + dString + "\\.";


   		var attributeDrows = args2.menuDataItemsArray.filter(function(cItem) {
			var patternToBeMatched = dString + ".";
			var patternLength = patternToBeMatched.length;
			var patternBeingMatched = cItem.staticDstring.substring(0, patternLength);
			// console.log(cItem.staticIndentLevel, staticIndentLevel);
			
			if(patternToBeMatched === patternBeingMatched && cItem.staticIndentLevel === staticIndentLevel) {
				return cItem;
			}
		});

   		// const attributeDrows = args2.menuDataItemsArray.filter(function(mdi) {
   		// 	return mdi.match("2")
   		// });
   		// console.log(attributeDrows);
 		resolve(attributeDrows);
 	}else {
 		reject("Problem with head dRow");
 	}
 	
 });
}