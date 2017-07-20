export const createMenuCombinations = function() {

	const allArrays = new Array(
			['v', 'a','t', 'm1', 'm2', 'm3'], 
			['t', 'f'], 
			['t', 'f'],
			['n', 'a', 'c', 'v', 'i']
		);

	function getPermutation(array, prefix) {
	    prefix = prefix || '';
	    if (!array.length) {
	        return prefix;
	    }

	    let result = array[0].reduce(function (result, value) {
	        return result.concat(getPermutation(array.slice(1), prefix + value));
	    }, []);
	    return result;
	}

	console.log(getPermutation(allArrays));
}


