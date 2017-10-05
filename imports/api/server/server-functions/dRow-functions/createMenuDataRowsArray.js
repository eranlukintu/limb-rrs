export const createMenuDataRowsArray = function(args) {
	return new Promise(function(resolve, reject) {
		const attributeHierarchyArray = args.attributeHierarchyArray;
		let pendingMenuDataRowsArray =[];

		if(attributeHierarchyArray) {
			attributeHierarchyArray.forEach(function(att) {
				const menuDataRow = {};
				menuDataRow.sourceDrowId = att.dRowId;
				menuDataRow.staticDstring = att.staticDstring;
				menuDataRow.staticIndentLevel = att.staticIndentLevel;
				menuDataRow.sortString = att.staticSortString;
				att.children.forEach(function(ac) {	
					const definitionString = ac.secondaryLabel;
					const definitionWords = definitionString.split(" ");
					const lastDefinitionWord = definitionWords[definitionWords.length-1];
					// console.log(lastDefinitionWord);
					
					menuDataRow[lastDefinitionWord] = ac.tertiaryLabel;					
				});
				pendingMenuDataRowsArray.push(menuDataRow);
			});

			const args1 = {};
			args1.pendingMenuDataRowsArray = pendingMenuDataRowsArray;
			args1.menuDataRowsArray = args.menuDataRowsArray;


			resolve(args1);
		}else {
			reject(console.log("Problem creating data rows array"));
		}

	});
}