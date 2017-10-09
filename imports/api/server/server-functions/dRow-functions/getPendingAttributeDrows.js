export const getPendingAttributeDrows = function(args, getLastDescriptionWord) {
	return new Promise(function(resolve, reject) {
		const attributeDrowsArray = args.attributeDrowsArray;
		const pendingMenuDataRow = args.pendingMenuDataRow;
		const pendingAttributeDrowsArray = [];
		// console.log(pendingMenuDataRow);
		const pendingMenuDataRowKeys = Object.keys(pendingMenuDataRow);
		if(attributeDrowsArray) {

			attributeDrowsArray.forEach(function(adr) {
				const lastDescriptionWord = getLastDescriptionWord(adr.secondaryLabel);
				const indexOfLastDescriptionWorkInPendingMenuDataRow = 
					pendingMenuDataRowKeys.indexOf(lastDescriptionWord);

				if(indexOfLastDescriptionWorkInPendingMenuDataRow) {
					pendingAttributeDrowsArray.push(adr);
				}

			});

			const args1 = {};
			args1.pendingMenuDataRowKeys = pendingMenuDataRowKeys;
			args1.pendingAttributeDrowsArray = pendingAttributeDrowsArray;
			args1.getLastDescriptionWord = getLastDescriptionWord;
			args1.pendingMenuDataRow = pendingMenuDataRow;

			resolve(args1);
		}else {
			console.log("Problem with attribute drow array");
		}
	});
	
}