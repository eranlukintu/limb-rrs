import { MENUDATACONTROLVARIABLES } from '../../../collections/menuCollections.js';
import { MENUCONTROLVARIABLESROWS } from '../../../collections/menuCollections.js';
import { MENUCOMBINATIONS } from '../../../collections/menuCollections.js';

export const createMenuCombinations = function() {

	const menuControlVeriablesRows =MENUCONTROLVARIABLESROWS.find({}).fetch();
	const previousMenuCombinations = MENUCOMBINATIONS.find({}).fetch();
	console.log(previousMenuCombinations);

	const categoriesPipeline = [
		{$match: {secondaryLabel: "has category"}},
		{$group: {_id: "$tertiaryLabel"}}

	]	

	const categoryGroups = MENUDATACONTROLVARIABLES.aggregate(categoriesPipeline);
	let categories = [];
	categoryGroups.forEach(function(cg) {
		categories.push(cg._id);
	});

	let items = [];

	categories.forEach(function(c) {
		let arr = [];
		menuControlVeriablesRows.forEach(function(ci) {
			if (ci.category === c) {
				// console.log(ci.category, ci.label);
				arrItem = ci.label;
				arr.push(arrItem);
			}
		});
		items.push(arr);
		// console.log(arr);
	});

	// console.log(items);

	function getPermutation(array, prefix) {
	    prefix = prefix || '';
	    if (!array.length) {
	        return prefix;
	    }

	    let result = array[0].reduce(function (result, value) {
	    	// console.log(value);
	        return result.concat(getPermutation(array.slice(1), prefix + value));
	    }, []);
	    return result;
	}

	const combinations = getPermutation(items);
	let sCombinations = [];
	// console.log(combinations);
	combinations.forEach(function(comb) {
		sComb = JSON.stringify(comb);
		sCombinations.push(sComb);
	});

	// console.log(sCombinations);
	const test = ["abcede", "hjkmmen"];

	MENUCOMBINATIONS.remove({});
	combinations.forEach(function(combinationString) {
		MENUCOMBINATIONS.insert({combinationString});
	});
	// console.log(combinations);
}