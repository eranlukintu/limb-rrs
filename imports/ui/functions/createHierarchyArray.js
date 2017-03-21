

export const createHierarchyArray = function(arr, crossReferenceId) { 
	var out = []
    for(var i in arr) {
        if(arr[i].crossReferenceId == crossReferenceId) {
            var nodes = createHierarchyArray(arr, arr[i].itemId)

            if(nodes.length) {
                arr[i].nodes = nodes
            }
            out.push(arr[i])
        }
    }
    return out
}
	
