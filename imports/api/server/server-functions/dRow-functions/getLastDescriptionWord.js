export const getLastDescriptionWord = function(descriptionString) {
	const wordsArray = descriptionString.split(" ");
	const lastWord = wordsArray[wordsArray.length - 1];
	return lastWord;
}