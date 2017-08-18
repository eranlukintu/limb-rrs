export const getMenuDataRowLabel = function(id, menuDataRowCollection) {
	const menuDataRowRow = menuDataRowCollection.findOne({_id: id});
	let menuDataRowLabel = "x";

	if(!menuDataRowRow) {
		menuDataRowLabel = "x";
	}else {
		menuDataRowLabel = menuDataRowRow.label;
	}
	return menuDataRowLabel;
}