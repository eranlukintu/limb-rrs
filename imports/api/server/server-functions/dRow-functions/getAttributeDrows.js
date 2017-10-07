export const getAttributeDrows = function(args) {
 return new Promise(function(resolve, reject) {
 	const originalHeadDrow = args.originalHeadDrow; 
 	const dString = originalHeadDrow.staticDstring;
 	const indentLevel = originalHeadDrow.staticIndentLevel;
 	// const menuDataItemsArray = args.menuDataItemsArray;
 	const menuDataRow = args.menuDataRow;
 	const getDirectChildren = args.getDirectChildren;
 	const attributePhrases = args.attributePhrases;
 	const menuDataItemsCollection = args.menuDataItemsCollection;

 	// console.log(args);
 	const menuDataItemsArray = menuDataItemsCollection.find().fetch();

 	const directChildren = getDirectChildren(dString, indentLevel, menuDataItemsArray)

 	const attributeDrowsArray = [];
 	directChildren.forEach(function(dc) {
		const childPhrase = dc.secondaryLabel;
		const childPhraseIndexInAttributePhrases = attributePhrases.indexOf(childPhrase);
		if(childPhraseIndexInAttributePhrases !== -1) {
			attributeDrowsArray.push(dc);
		}					
	});

 	const args1 = {};
 	args1.sourceDrowId =args.sourceDrowId;
 	args1.attributeDrowsArray = attributeDrowsArray;
	// args1.originalHeadDrow = originalHeadDrow;
	args1.pendingMenuDataRow = menuDataRow;
	// args1.attributePhrases = attributePhrases;
	// args1.getDirectChildren = getDirectChildren;
	args1.menuDataItemsCollection = args.menuDataItemsCollection

 	resolve(args1);
 	
 	// if(originalHeadDrow) {
		// // console.log(originalHeadDrow);
 	// 	const originalStaticIndentLevel = args.originalHeadDrow.staticIndentLevel;
 	// 	const dString = args.originalHeadDrow.staticDstring;
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