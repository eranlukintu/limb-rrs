export const validateMenuAssociation = function
	(
		menuCombinationId,
		menuDataRowId,
		menuAssociationsCollection
	) 
	{
		let valid = false;
		if(menuCombinationId === "x" 
			||	menuDataRowId === "x"
			|| menuCombinationId === undefined
			|| menuDataRowId === undefined) {
			valid = false;
		} else {
			valid = true;
		}
		return valid;
	}