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
 	
 });
}