import { Random } from 'meteor/random';
import { createSetOfUniqueRandomNumbers } from "../../random-number-functions/randomNumberFunctions.js";

const CFLI = function(label, parentId) {
	let FLI = {};
	FLI.fliId = Random.id();
	FLI.label = label;
	FLI.parentId = parentId;

	return FLI;
}

const CTLFLI = function(label) {
	let TLFLI=CFLI(label, "null");
	return TLFLI;
}

export const createStakeholderFLI_s = function(stakeholders) {
	let SFLI_s = [];
	stakeholders.forEach(function(stakeholder) {
		let TLFLI = CTLFLI(stakeholder, CFLI);
		SFLI_s.push(TLFLI);
	});
	console.log(SFLI_s);
	return SFLI_s;
}

export const createSLI_s = function(stakeholders) {
	let items = createStakeholderFLI_s(stakeholders);
	let secondaryItems = [];
	items.forEach(function(tli) {
		let numberOfSecondaryItems = Math.floor(Math.random() * 5)+1;
		let secondaryItemNumbers = createSetOfUniqueRandomNumbers(40, numberOfSecondaryItems);
		secondaryItemNumbers.forEach(function(num) {
			let tempLabel = "activity-" + num;
			let tempSi = CFLI(tempLabel, tli.fliId);
			secondaryItems.push(tempSi);
		});
	Array.prototype.push.apply(items, secondaryItems);
	console.log(items);
	});

}