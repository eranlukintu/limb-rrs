import { createReferenceItem } from "../structureItemFunctions.js";
import { createRandomNumberWithinRange } from "../../../random-number-functions/randomNumberFunctions.js";
import { createSetOfUniqueRandomNumbers } from "../../../random-number-functions/randomNumberFunctions.js";

export const createReferenceValuesOfActivities = function(referenceActivities, referenceValues) {
	let referenceValuesOfActivities = [];
	referenceActivities.forEach(function(activity) {
		let referenceValuesOfSingleActivity = createReferenceValuesForSingleActivity(referenceValues);
		referenceValuesOfSingleActivity.forEach(function(referenceValue) {
			let referenceProperties = {};
			referenceProperties.itemType = "referenceValueOfActivity";
			referenceProperties.name = referenceValue.name;
			referenceProperties.crossReferenceId = activity.itemId;
			referenceProperties.itemSourceId = referenceValue.itemId;

			let referenceValueOfActivity = createReferenceItem(referenceProperties);
			referenceValuesOfActivities.push(referenceValueOfActivity);
		});
	});
	return referenceValuesOfActivities;
}

const createReferenceValuesForSingleActivity = function(referenceValues) {
	let referenceValuesOfsingleActivity = [];
	let numberOfReferenceValues = referenceValues.length;
	let numberOfValuesToBeAssigned = createRandomNumberWithinRange(8, 14);

	let setOfValueIndexes = createSetOfUniqueRandomNumbers(numberOfReferenceValues, numberOfValuesToBeAssigned);

	setOfValueIndexes.forEach(function(valueIndex) {
		let selectedValue = referenceValues[valueIndex];
		referenceValuesOfsingleActivity.push(selectedValue);
	});
	return referenceValuesOfsingleActivity;
}