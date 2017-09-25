export const getHeadDrows = function(initialArgs) {
	return new Promise(function(resolve,reject) {

		const menuDataItemsArray = initialArgs.menuDataItemsArray;
		const attributePhrases = initialArgs.attributePhrases;
		const getDirectChildren = initialArgs.getDirectChildren;

		const headDrows = menuDataItemsArray.filter(function(ai) {
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
			resolve(args);
		}else {
			console.log("Couldn't create head dRows");
		}
	});
}