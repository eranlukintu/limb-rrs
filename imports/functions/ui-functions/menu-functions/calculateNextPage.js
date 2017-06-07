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

				case "rawModelComponent": nextPage = "rawModelComponent";
				break;
			}

		case "rawModelComponent":
			switch(key) {
				case "index": nextPage = "index";
				break;

				case "back": nextPage = "modeling";
			  	break;
			}
    }

    return nextPage;
}