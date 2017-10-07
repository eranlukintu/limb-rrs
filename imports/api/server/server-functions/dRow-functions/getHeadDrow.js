export const getHeadDrow = function(args, sourceDrowId, menuDataRow) {
	return new Promise(function(resolve, reject) {
		// console.log(args);
		const menuDataItemsArray = args.menuDataItemsCollection.find({}).fetch();
		// const menuDataRowsArray = args.menuDataRowsArray;
		// const sourceDrowId = args.sourceDrowId;
		// console.log("source drow Id", sourceDrowId);
		// console.log(menuDataItemsArray);
		const originalHeadDrow = menuDataItemsArray.find(x => x.dRowId === sourceDrowId);

		if(originalHeadDrow) {
			// console.log(headDrow);
			const args1 = {}
			args1.menuDataItemsArray = menuDataItemsArray;
			// args1.menuDataRowsArray = menuDataRowsArray;
			args1.getDirectChildren = args.getDirectChildren;
			args1.menuDataRow = menuDataRow;
			args1.originalHeadDrow = originalHeadDrow;
			args1.sourceDrowId = sourceDrowId;
			args1.attributePhrases = args.attributePhrases;
			args1.menuDataItemsCollection = args.menuDataItemsCollection;

			// console.log(args1);
			resolve(args1);
		}else {
			reject(console.log("No head dRow found"));
		}
	});
}