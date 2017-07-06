import { findLastTopLevelDstring } from './findLastTopLevelDstring.js';

export const createDstringSet = function() {
	const lastTopLevelDstring = findLastTopLevelDstring();
	const nextTopLevelDString = (Number(lastTopLevelDstring) + 1).toString();
	const principalLabelDstring = nextTopLevelDString + ".1";
	const itemTypeDstring = nextTopLevelDString + ".2";

	let dStringSetArgs = {};
	dStringSetArgs.nextTopLevelDString = nextTopLevelDString;
	dStringSetArgs.principalLabelDstring = principalLabelDstring;
	dStringSetArgs.itemTypeDstring = itemTypeDstring;

	return dStringSetArgs;
}