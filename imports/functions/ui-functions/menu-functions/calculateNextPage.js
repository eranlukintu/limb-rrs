export const calculateNextPage = function(key, currentPage) {

	let nextPage = "NA";

    switch(currentPage) {
		case "index":
			switch(key) {
			  case "modeling": nextPage = "modeling";
			  break;
			}

		case "modeling":
			switch(key) {
				case "index": nextPage = "index";
				break;

				case "modelingWorkPage": nextPage = "modelingWorkPage";
				break;
			}

		case "modelingWorkPage":
			switch(key) {
				case "index": nextPage = "index";
				break;

				case "modeling": nextPage = "modeling";
			  	break;
			}
    }

    return nextPage;
}