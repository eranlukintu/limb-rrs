

export const createHierarchyArray = function(arr, parent) { 
	var out = []
    for(var i in arr) {
    	console.log(arr[i]);
        if(arr[i].parent == parent) {
            var nodes = createHierarchyArray(arr, arr[i].id)

            if(nodes.length) {
                arr[i].nodes = nodes
            }
            out.push(arr[i])
        }
    }
    return out
}
	
