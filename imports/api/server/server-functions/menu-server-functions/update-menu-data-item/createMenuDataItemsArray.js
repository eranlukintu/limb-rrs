// import { MENUDATAITEMS } from '../../../../collections/menuCollections.js';

export const createMenuDataItemsArray = function(menuDataItemsCollection) {
	return new Promise(function(resolve, reject) {
		const menuDataItemsArray = menuDataItemsCollection.find().fetch();

		if(menuDataItemsArray) {
			// console.log(menuDataItemsArray);
			resolve(menuDataItemsArray);
		}else {
			reject(console.log("Menu data array could not be created"));
		}
	});
}