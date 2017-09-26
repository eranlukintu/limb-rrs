export const createMenuDataRowsArray = function(args) {
	return new Promise(function(resolve, reject) {
		const attributeHierarchyArray = args.attributeHierarchyArray;
		let menuDataRowsArray =[];

		if(attributeHierarchyArray) {
			attributeHierarchyArray.forEach(function(att) {
				const menuDataRow = {};
				menuDataRow.sourceDrowId = att.dRowId;
				att.children.forEach(function(ac) {	
					const definitionString = ac.secondaryLabel;
					const definitionWords = definitionString.split(" ");
					const lastDefinitionWord = definitionWords[definitionWords.length-1];
					console.log(lastDefinitionWord);
					
					menuDataRow[lastDefinitionWord] = ac.tertiaryLabel;					
				});
				menuDataRowsArray.push(menuDataRow);
			});
			resolve(menuDataRowsArray);
		}else {
			reject(console.log("Problem creating data rows array"));
		}

	});
}