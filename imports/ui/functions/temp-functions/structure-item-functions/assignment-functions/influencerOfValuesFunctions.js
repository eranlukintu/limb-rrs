import { createReferenceItem } from "../structureItemFunctions.js";
import { createRandomNumberWithinRange } from "../../../random-number-functions/randomNumberFunctions.js";
import { createSetOfUniqueRandomNumbers } from "../../../random-number-functions/randomNumberFunctions.js";
import { calculateParentDotString} from "../../../dot-string-functions/dotStringFunctions.js";

export const createReferenceInfluencersOfValues = function(referenceValues, referenceActivities, referenceValuesOfActivities) {
	// console.log(referenceValuesOfActivities);
	referenceInfluencersOfValues = [];
	referenceValues.forEach(function(referenceValue) {
		let referenceInfluencersOfValue = createReferenceInfluencersOfSingleValue(referenceValue, referenceActivities, referenceValuesOfActivities);
		referenceInfluencersOfValue.forEach(function(referenceInfluencer) {
			let referenceProperties = {};
			referenceProperties.itemType = "referenceInfluencerOfValue";
			referenceProperties.name = referenceInfluencer.name;
			referenceProperties.crossReferenceId = referenceValue.itemId;
			referenceProperties.itemSourceId = referenceInfluencer.itemId;

			let referenceInfluencerOfValue = createReferenceItem(referenceProperties);
			referenceInfluencersOfValues.push(referenceInfluencerOfValue);
		});
	});
	console.log(referenceInfluencersOfValues)
	return referenceInfluencersOfValues;
}

const createReferenceInfluencersOfSingleValue = function(currentValue, referenceActivities, referenceValuesOfActivities) {
	
	//Create a set of random numbers that will represent the indexes of reference activities
	let referenceInfluencersOfSingleValue = [];
	let maxNumberOfInfluencers = referenceActivities.length;
	let numberOfInfluencersToBeAssigned = createRandomNumberWithinRange(3, 8);
	let setOfInfluencerIndexes = createSetOfUniqueRandomNumbers(maxNumberOfInfluencers, numberOfInfluencersToBeAssigned);
	// console.log(setOfInfluencerIndexes);
	let instancesOfValueInReferenceValuesOfActivities = referenceValuesOfActivities.filter(x => x.itemSourceId === currentValue.itemId);
	// console.log(instancesOfValueInReferenceValuesOfActivities);
	let lengthOfInstances = instancesOfValueInReferenceValuesOfActivities.length;
	let activityIdsAssociatedWithInstances = [];

	instancesOfValueInReferenceValuesOfActivities.forEach(function(valueInstance) {
		activityIdsAssociatedWithInstances.push(valueInstance.crossReferenceId);
	});
	
	let lengthOfActivityIdsToBeMatched = activityIdsAssociatedWithInstances.length;

	setOfInfluencerIndexes.forEach(function(influencerIndex) {

		//Select an activity based on the current "index"
		let interimInfluencerActivity = referenceActivities[influencerIndex];		
		
		if(lengthOfActivityIdsToBeMatched > 0) {
			let match = activityIdsAssociatedWithInstances.find(x => x === interimInfluencerActivity.itemId);
			let matchStatus;
			if(match) {
				matchStatus=1;
			}else {
				matchStatus=0
				referenceInfluencersOfSingleValue.push(interimInfluencerActivity);
			}
		}
		
	});
	return referenceInfluencersOfSingleValue;
}