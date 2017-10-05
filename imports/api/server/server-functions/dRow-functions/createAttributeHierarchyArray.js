export const createAttributeHierarchyArray = function(args) {
	return new Promise(function(resolve,reject) {
		const headDrows = args.headDrows;
		const attributePhrases = args.attributePhrases;
		const menuDataItemsArray = args.menuDataItemsArray;
		const getDirectChildren = args.getDirectChildren;
		const menuDataRowsArray = args.menuDataRowsArray;

		if(headDrows) {
			const args1 = {};
			args1.menuDataItemsArray = menuDataItemsArray;
			args1.attributePhrases = attributePhrases;
			args1.headDrows = headDrows;
			args1.menuDataRowsArray = menuDataRowsArray;
			// args1.getDirectChildren = getDirectChildren;

			let attributeHierarchyArray = [];

			headDrows.forEach(function(hdr) {
				const staticDstring = hdr.staticDstring;
				const staticIndentLevel = hdr.staticIndentLevel;

				attributeHierarchyArray.push(hdr);
				const length = attributeHierarchyArray.length;
				const hdrIndex = length - 1;
				attributeHierarchyArray[hdrIndex].children = [];

				const directChildren = getDirectChildren(staticDstring, staticIndentLevel, menuDataItemsArray);
				
				directChildren.forEach(function(dc) {
					const childPhrase = dc.secondaryLabel;
					const childPhraseIndexInAttributePhrases = attributePhrases.indexOf(childPhrase);
					if(childPhraseIndexInAttributePhrases !== -1) {
						attributeHierarchyArray[hdrIndex].children.push(dc);
					}					
				});
			});

			// console.log(args);
			args1.attributeHierarchyArray = attributeHierarchyArray;

			resolve(args1);

		}else {
			console.log("Problem with head drows");
		}
	});
}