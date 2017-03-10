export const createHierarchyArray = function(arr) { 
	var tree = [],
      mappedArr = {},
      arrElem,
      mappedElem; 

	  // First map the nodes of the array to an object -> create a hash table.
	  for(var i = 0, len = arr.length; i < len; i++) {
	    arrElem = arr[i];
	    mappedArr[arrElem.elementId] = arrElem;
	    mappedArr[arrElem.elementId]['children'] = [];
	  }

	  return tree;
	}
	
