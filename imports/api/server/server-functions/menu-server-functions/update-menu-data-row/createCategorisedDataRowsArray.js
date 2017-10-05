export const createCategorisedDataRowsArray = function(args) {
	return new Promise(function(resolve, reject) {
		if(args) {
			const pendingMenuDataRowsArray = args.pendingMenuDataRowsArray;
			const menuDataRowsArray = args.menuDataRowsArray;

			pendingMenuDataRowsArray.forEach(function(pdr) {
				const correspondingDataRow = menuDataRowsArray.find(x => x.sourceDrowId === pdr.sourceDrowId);
				if(!correspondingDataRow) {
					pdr.category = "new";
				} else {
					pdr.category = "update";
				}
			});

			resolve(pendingMenuDataRowsArray);
		}else {
			console.log("Could not create categorised data rows array");
		}
		
	});
}