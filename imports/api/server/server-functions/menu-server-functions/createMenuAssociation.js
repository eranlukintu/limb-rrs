export const createMenuAssociationItem = function(props) {

	const menuCombinationsCollection = props.menuCombinationsCollection;
	const selectedMenuCombinationId = props.selectedMenuCombinationId;
	const getMenuCombinationLabel = props.getMenuCombinationLabel;
	const menuDataRowsCollection = props.menuDataRowsCollection;
	const selectedMenuDataRowId = prps.selectedMenuDataRowId;
	const getMenuDataRowLabel = props.getMenuDataRowLabel;

	const menuCombinationLabel = getMenuCombinationLabel(
										selectedMenuCombinationId,
										menuCombinationsCollection
										);
	const menuDataRowLabel = getMenuDataRowLabel(
										selectedMenuDataRowId,
										menuDataRowsCollection
										);

	const menuAssociationItem = {};
	menuAssociationItem.menuCombinationId = selectedMenuCombinationId;
	menuAssociationItem.menuCombinationLabel = menuCombinationLabel;
	menuAssociationItem.menuDataRowId = selectedMenuDataRowId;
	menuAssociationItem.menuDataRowLabel = menuDataRowLabel;

	return menuAssociationItem;
}