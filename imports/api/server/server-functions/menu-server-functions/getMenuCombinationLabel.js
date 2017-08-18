export const getMenuCombinationLabel = function(id, menuCombinationCollection) {
	const menuCombinationRow = menuCombinationCollection.findOne({_id: id});
	let menuCombinationLabel = "x";

	if(!menuCombinationRow) {
		menuCombinationLabel = "x";
	}else {
		menuCombinationLabel = menuCombinationRow.label;
	}
	return menuCombinationLabel;
}