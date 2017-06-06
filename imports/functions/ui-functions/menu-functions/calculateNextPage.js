export const calculateNextPage = function(key, currentPage) {

	let nextPage = "NA";

    switch(currentPage) {
      case "index":
        switch(key) {
          case "modeling": nextPage = "modeling";
          break;
        }
    }

    return nextPage;
}