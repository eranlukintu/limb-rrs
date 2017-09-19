// import { MENUDATAITEMS } from '../../../../collections/menuCollections.js';

export const createMenuDataItemsArray = function(menuDataItemsCollection, sourceDrowId) {
	return new Promise(function(resolve, reject) {
		const menuDataItemsArray = menuDataItemsCollection.find().fetch();
		if(menuDataItemsArray) {
			// console.log(menuDataItemsArray);
			const args = {};
			args.menuDataItemsArray = menuDataItemsArray;
			args.sourceDrowId = sourceDrowId;
			resolve(args);
		}else {
			reject(console.log("Array could not be created"));
		}
	});
}