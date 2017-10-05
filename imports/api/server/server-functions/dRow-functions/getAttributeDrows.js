export const getAttributeDrows = function(args) {
 return new Promise(function(resolve, reject) {
 	const headDrow = args.headDrow; 
 	const dString = headDrow.staticDstring;
 	const indentLevel = headDrow.staticIndentLevel;

 	resolve(headDrow);
 	
 	// if(headDrow) {
		// // console.log(headDrow);
 	// 	const originalStaticIndentLevel = args.headDrow.staticIndentLevel;
 	// 	const dString = args.headDrow.staticDstring;
 	// 	const staticIndentLevel = (Number(originalStaticIndentLevel) + 1).toString();

  //  		const attributeDrows = args.menuDataItemsArray.filter(function(mdi) {
  //  			// console.log(mdi);
		// 	const patternToBeMatched = dString + ".";
		// 	const patternLength = patternToBeMatched.length;
		// 	const patternBeingMatched = mdi.dString.substring(0, patternLength);
		// 	// console.log(mdi.staticIndentLevel, staticIndentLevel);
			
		// 	if(patternToBeMatched === patternBeingMatched && mdi.staticIndentLevel === staticIndentLevel) {
		// 		return mdi;
		// 	}
		// });

  //  		// const attributeDrows = args.menuDataItemsArray.filter(function(mdi) {
  //  		// 	return mdi.match("2")
  //  		// });
  //  		// console.log(attributeDrows);
  //  		if(attributeDrows) {
  //  			let args1 = {};
  //  			args1.menuDataItemsCollection = args.menuDataItemsCollection;
	 //   		args1.menuDataItemsArray = args.menuDataItemsArray;
	 //   		args1.menuDataRowsArray = args.menuDataRowsArray;
	 //   		args1.sourceDrowId = args.sourceDrowId;
	 //   		args1.attributeDrows = attributeDrows;
	 // 		resolve(args1);
  //  		}
   		
 	// }else {
 	// 	reject("Problem with head dRow");
 	// }
 	
 });
}