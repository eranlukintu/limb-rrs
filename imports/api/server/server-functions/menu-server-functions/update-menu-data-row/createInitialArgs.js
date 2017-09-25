export const createInitialArgs = function(menuDataItemsCollection, attributePhrases, getDirectChildren) {
	return new Promise(function(resolve, reject) {
		if(menuDataItemsCollection && attributePhrases) {
			const initialArgs = {};
			const menuDataItemsArray = menuDataItemsCollection.find({}).fetch();
			// console.log(menuDataItemsArray);
			initialArgs.menuDataItemsArray = menuDataItemsArray;
			initialArgs.attributePhrases = attributePhrases;
			initialArgs.getDirectChildren = getDirectChildren;


			resolve(initialArgs);
		}else {
			console.log("Could not create initial args")
		}
	});
}
