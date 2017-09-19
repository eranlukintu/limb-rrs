export const getHeadDrow = function(args) {
	return new Promise(function(resolve, reject) {
		// console.log(args);
		const menuDataItemsArray = args.menuDataItemsArray;
		const sourceDrowId = args.sourceDrowId;
		const headDrow = menuDataItemsArray.find(x => x.dRowId === sourceDrowId);

		if(headDrow) {
			// console.log(headDrow);
			const args2 = {}
			args2.menuDataItemsArray = menuDataItemsArray;
			args2.headDrow = headDrow;
			// console.log(args2);
			resolve(args2);
		}else {
			reject(console.log("No head dRow found"));
		}
	});
}