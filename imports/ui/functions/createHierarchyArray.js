

export const createHierarchyArray = function(arr, parentId) { 
	var out = []
    for(var i in arr) {
        if(arr[i].parentId == parentId) {
            var nodes = createHierarchyArray(arr, arr[i].itemId)

            if(nodes.length) {
                arr[i].nodes = nodes
            }
            out.push(arr[i])
        }
    }
    return out
}
	
