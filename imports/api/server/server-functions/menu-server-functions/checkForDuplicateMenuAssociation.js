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

	
	
	const associatedMenuDataRows = menuAssociationsCollection.find(
		{menuCombinationId: menuCombinationId}
		).fetch();

	const foundMenuDataRow = associatedMenuDataRows.find(x => x.menuDataRowId === menuDataRowId);
	console.log(foundMenuDataRow);

	if(foundMenuDataRow) {
		isThereDuplicate = true;
	}else {
		isThereDuplicate = false;
	}

	return isThereDuplicate;

}