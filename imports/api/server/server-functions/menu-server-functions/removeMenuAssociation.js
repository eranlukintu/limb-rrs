export const removeMenuAssociation = function(menuCombinationId,
												menuDataRowId,
												menuAssociationsCollection) {
	let foundAssociationItemRow = "x";
	const foundAssociationItem = menuAssociationsCollection.findOne({$and: [
												{menuCombinationId: menuCombinationId},
												{menuDataRowId: menuDataRowId}
											]
										});

	if(foundAssociationItem) {
		foundAssociationItemRow = foundAssociationItem;
	}

	return foundAssociationItemRow;

}