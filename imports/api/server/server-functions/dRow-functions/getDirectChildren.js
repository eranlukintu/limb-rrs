export const getDirectChildren = function(dString, indentLevel, menuDataItemsArray) {
	
		const directChildren = menuDataItemsArray.filter(function(mdi) {
			const patternToBeMatched = dString + ".";
			const patternLength = patternToBeMatched.length;
			const patternBeingMatched = mdi.staticDstring.substring(0, patternLength);
			const targetIndentLevel = (Number(indentLevel) + 1).toString();
			// console.log(mdi.targetIndentLevel, targetIndentLevel);
			
			if(patternToBeMatched === patternBeingMatched) {
				return mdi;
			}
		});
		return directChildren;
}