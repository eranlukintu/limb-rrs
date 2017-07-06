export const calculateNextPage = function(key, currentPage) {

	let nextPage = "NA";
	console.log(currentPage);

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

				case "businessModelComponent": nextPage = "businessModelComponent";
				break;

				case "rawModelComponent": nextPage = "rawModelComponent";
				break;
			}

		case "businessModelComponent":
			switch(key) {
				case "index": nextPage = "index";
				break;

				case "back": nextPage = "modeling";
			  	break;

			  	case "actorModelComponent": nextPage = "actorModelComponent";
			  	break;
			}

		case "rawModelComponent":
			switch(key) {
				case "index": nextPage = "index";
				break;

				case "back": nextPage = "modeling";
			  	break;
			}

		case "actorModelComponent":
			switch(key) {
				case "index": nextPage = "index";
				break;

				case "back": nextPage = "businessModelComponent";
			  	break;

			  	case "createNewActor": nextPage = "createNewActorComponent";
			  	break;
			}

		case "createNewActorComponent":
			switch(key) {
				case "index": nextPage = "index";
				break;

				case "back": nextPage = "actorModelComponent";
			  	break;
			}
    }

    return nextPage;
}