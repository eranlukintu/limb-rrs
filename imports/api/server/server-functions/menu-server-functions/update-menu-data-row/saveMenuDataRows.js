export const saveMenuDataRows = function(categorisedMenuDataRowsArray, menuDataRowsCollection) {
	// console.log(categorisedMenuDataRowsArray);
	categorisedMenuDataRowsArray.forEach(function(mdr) {
		const propertyNames = Object.keys(mdr);

		if(mdr.category === "new") {
			console.log("new");
			menuDataRowsCollection.insert(mdr);
		}else {
			// console.log(propertyNames);
			console.log("update");
			// let updateString = "";
			let updateObject = {};

			propertyNames.forEach(function(pn) {
				// console.log("processing property name");
				const propertyName = pn;
				const propertyValue = mdr[propertyName];
				updateObject[propertyName] = propertyValue;
				console.log(updateObject);
			});
			// console.log(updateString);
			menuDataRowsCollection.update(
				{"sourceDrowId": mdr.sourceDrowId},
				updateObject
			);
		}
	});
	// const menuDataRowsArray = menuDataRowsCollection.find({}).fetch();
	// console.log(menuDataRowsArray);
}