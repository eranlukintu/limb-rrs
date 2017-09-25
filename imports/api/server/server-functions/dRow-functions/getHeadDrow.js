export const getHeadDrow = function(args) {
	return new Promise(function(resolve, reject) {
		// console.log(args);
		const menuDataItemsArray = args.menuDataItemsArray;
		// const menuDataRowsArray = args.menuDataRowsArray;
		const sourceDrowId = args.sourceDrowId;
		const headDrow = menuDataItemsArray.find(x => x.dRowId === sourceDrowId);

		if(headDrow) {
			// console.log(headDrow);
			const args2 = {}
			args2.menuDataItemsArray = menuDataItemsArray;
			// args2.menuDataRowsArray = menuDataRowsArray;
			args2.sourceDrowId =sourceDrowId;
			args2.headDrow = headDrow;
			// console.log(args2);
			resolve(args2);
		}else {
			reject(console.log("No head dRow found"));
		}
	});
}