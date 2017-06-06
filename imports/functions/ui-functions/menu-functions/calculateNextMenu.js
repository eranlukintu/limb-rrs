export const calculateNextMenu = function(key, currentPage) {
	
	switch(currentPage) {
		
		case "index":

			switch(key) {

				case "modeling": return "modelingMenu";
				break;

				default: return "indexMenu";
			}

			break;

		case "modeling":
			switch(key) {
				case "index": return "indexMenu";
				break;

				case "modelingWorkPage": return "modelingWorkPageMenu";
				break;
			}
			break;

		case "modelingWorkPage":
			switch(key) {
				case "index": return "indexMenu";
				break;

			case "modeling": return "modelingMenu";
				break;
			}
			break;

		default: return "NA";
	}
}