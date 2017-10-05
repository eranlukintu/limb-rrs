export const getHeadDrows = function(initialArgs) {
	return new Promise(function(resolve,reject) {

		const menuDataItemsArray = initialArgs.menuDataItemsArray;
		const attributePhrases = initialArgs.attributePhrases;
		const getDirectChildren = initialArgs.getDirectChildren;
		const menuDataRowsArray = initialArgs.menuDataRowsArray;

		const headDrows = menuDataItemsArray.filter(function(ai) {
			// console.log(headDrows);
			if(ai.staticIndentLevel === "0") {
				return ai;
			}
		});

		if(headDrows) {
			// console.log(headDrows);
			const args = {};
			args.menuDataItemsArray = menuDataItemsArray;
			args.attributePhrases = attributePhrases;
			args.getDirectChildren = getDirectChildren;
			args.headDrows = headDrows;
			args.menuDataRowsArray = menuDataRowsArray;			
			resolve(args);
		}else {
			console.log("Couldn't create head dRows");
		}
	});
}