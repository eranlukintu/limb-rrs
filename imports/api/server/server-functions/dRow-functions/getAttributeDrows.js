export const getAttributeDrows = function(args2) {
 return new Promise(function(resolve, reject) {
 	const headDrow = args2.headDrow; 
 	
 	if(headDrow) {
		// console.log(headDrow);
 		const originalStaticIndentLevel = args2.headDrow.staticIndentLevel;
 		const dString = args2.headDrow.staticDstring;
 		const staticIndentLevel = (Number(originalStaticIndentLevel) + 1).toString();

   		const attributeDrows = args2.menuDataItemsArray.filter(function(mdi) {
			const patternToBeMatched = dString + ".";
			const patternLength = patternToBeMatched.length;
			const patternBeingMatched = mdi.staticDstring.substring(0, patternLength);
			// console.log(mdi.staticIndentLevel, staticIndentLevel);
			
			if(patternToBeMatched === patternBeingMatched && mdi.staticIndentLevel === staticIndentLevel) {
				return mdi;
			}
		});

   		// const attributeDrows = args2.menuDataItemsArray.filter(function(mdi) {
   		// 	return mdi.match("2")
   		// });
   		// console.log(attributeDrows);
   		if(attributeDrows) {
   			let args3 = {};
	   		args3.menuDataItemsArray = args2.menuDataItemsArray;
	   		args3.menuDataRowsArray = args2.menuDataRowsArray;
	   		args3.sourceDrowId = args2.sourceDrowId;
	   		args3.attributeDrows = attributeDrows;
	 		resolve(args3);
   		}
   		
 	}else {
 		reject("Problem with head dRow");
 	}
 	
 });
}