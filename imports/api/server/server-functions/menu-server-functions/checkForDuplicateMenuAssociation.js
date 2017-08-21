export const checkForDuplicateMenuAssociation = function
	(
		menuCombinationId,
		menuDataRowId,
		menuAssociationsCollection
	)
{
	
	let isThereDuplicate = true;	
	
	const associatedMenuDataRows = menuAssociationsCollection.find(
		{menuCombinationId: menuCombinationId}
		).fetch();

	const foundMenuDataRow = associatedMenuDataRows.find(x => x.menuDataRowId === menuDataRowId);

	if(foundMenuDataRow) {
		isThereDuplicate = true;
	}else {
		isThereDuplicate = false;
	}

	return isThereDuplicate;

}