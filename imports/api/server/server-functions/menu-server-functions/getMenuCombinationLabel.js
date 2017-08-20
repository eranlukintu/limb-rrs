export const getMenuCombinationLabel = function(id, menuCombinationCollection) {
	// console.log(id);
	const menuCombinationRow = menuCombinationCollection.findOne({_id: id});
	let menuCombinationLabel = "x";

	if(!menuCombinationRow) {
		menuCombinationLabel = "x";
	}else {
		menuCombinationLabel = menuCombinationRow.combinationString;
	}
	return menuCombinationLabel;
}