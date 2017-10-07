export const createInitialArgs = function(
											menuDataItemsCollection, 
											attributePhrases, 
											getDirectChildren,
											menuDataRowsCollection) {
	return new Promise(function(resolve, reject) {
		if(menuDataItemsCollection && attributePhrases) {
			const initialArgs = {};
			const menuDataItemsArray = menuDataItemsCollection.find({}).fetch();
			const menuDataRowsArray = menuDataRowsCollection.find({}).fetch();
			// console.log(menuDataRowsArray);
			// console.log(menuDataItemsArray);
			initialArgs.menuDataItemsCollection = menuDataItemsCollection;
			initialArgs.menuDataItemsArray = menuDataItemsArray;
			initialArgs.attributePhrases = attributePhrases;
			initialArgs.getDirectChildren = getDirectChildren;
			initialArgs.menuDataRowsArray = menuDataRowsArray;

			resolve(initialArgs);
		}else {
			console.log("Could not create initial args")
		}
	});
}
