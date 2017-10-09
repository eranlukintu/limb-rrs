export const updatePendingAttributeDrows = function(args, menuDataItemsCollection) {
	// console.log(args);

	const pendingMenuDataRowKeys = args.pendingMenuDataRowKeys;
	const pendingAttributeDrowsArray = args.pendingAttributeDrowsArray;
	const getLastDescriptionWord = args.getLastDescriptionWord;
	const pendingMenuDataRow = args.pendingMenuDataRow;

	pendingAttributeDrowsArray.forEach(function(pad) {
		const phrase = pad.secondaryLabel;
		const lastWord = getLastDescriptionWord(phrase);
		const correspondingValueInPendingMenuDataRow = pendingMenuDataRow[lastWord];

			if(correspondingValueInPendingMenuDataRow) {
				menuDataItemsCollection.update(
				{_id: pad._id},
				{
					$set:
						{
							tertiaryLabel: correspondingValueInPendingMenuDataRow
						}
				}
			)
		}
		
	});

	// console.log(args);


}