export const checkForDuplicateMenuAssociation = function
	(
		menuCombinationId,
		menuDataRowId,
		menuAssociationsCollection
	)
{
	// console.log(menuCombinationId);
	// console.log(menuDataRowId);

	let isThereDuplicate = true;

	const foundMenuCombination = menuAssociationsCollection.findOne({menuCombinationId: menuCombinationId});
	const foundMenuDataRow = menuAssociationsCollection.findOne({menuDataRowId: menuDataRowId});

	if(foundMenuCombination && foundMenuDataRow) {
		isThereDuplicate = true;
	}else {
		isThereDuplicate = false;
	}

	return isThereDuplicate;

}