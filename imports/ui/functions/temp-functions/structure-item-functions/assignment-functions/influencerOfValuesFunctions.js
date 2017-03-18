import { createReferenceItem } from "../structureItemFunctions.js";
import { createRandomNumberWithinRange } from "../../../random-number-functions/randomNumberFunctions.js";
import { createSetOfUniqueRandomNumbers } from "../../../random-number-functions/randomNumberFunctions.js";

export const createReferenceInfluencersOfValues = function(referenceValues, referenceActivities, referenceValuesOfActivities) {
	referenceInfluencersOfActivities = [];
	referenceValues.forEach(function(referenceValue) {
		let referenceInfluencersOfValue = createReferenceInfluencersOfSingleValue(referenceValue, referenceActivities, referenceValuesOfActivities);
		referenceInfluencersOfValue.forEach(function(referenceInfluencer) {
			let referenceProperties = {};
			referenceProperties.itemType = "referenceInfluencerOfValue";
			referenceProperties.itemName = referenceInfluencer.itemName;
			referenceProperties.itemParentId = referenceValue.itemId;
			referenceProperties.itemSourceId = referenceInfluencer.itemId;

			let referenceInfluencerOfValue = createReferenceItem(referenceProperties);
			referenceInfluencersOfActivities.push(referenceInfluencerOfValue);
		});
	});
	return referenceInfluencersOfActivities;
}

const createReferenceInfluencersOfSingleValue = function(referenceValue, referenceActivities, referenceValuesOfActivities) {
	let referenceInfluencersOfSingleValue = [];
	let maxNumberOfInfluencers = referenceActivities.length;
	let numberOfInfluencersToBeAssigned = createRandomNumberWithinRange(3, 8);
	let setOfInfluencerIndexes = createSetOfUniqueRandomNumbers(maxNumberOfInfluencers, numberOfInfluencersToBeAssigned);

	setOfInfluencerIndexes.forEach(function(influencerIndex) {
		let interimInfluencer = referenceActivities[influencerIndex];
		let idOfActivityAssociatedWithValue = referenceValue.parentId;
		let idOfInterimInfluencer = interimInfluencer.itemId;

		//check that the influencing activity is not the same as the parent activity
		if(idOfInterimInfluencer !== idOfActivityAssociatedWithValue) {
			referenceInfluencersOfSingleValue.push(interimInfluencer);
		}
	});
	return referenceInfluencersOfSingleValue;
}