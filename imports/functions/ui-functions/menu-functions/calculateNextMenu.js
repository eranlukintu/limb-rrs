export const calculateNextMenu = function(key, currentMenuName, currentPageName) {
	
	switch(currentPageName) {
		
		case "index":

			switch(key) {

				case "modeling": return "modelingMenu";
				break;

				default: return "indexMenu";
			}

			break;

		case "modeling":
			break;

		case "modelingWorkPage":
			break;

		default: return "NA";
	}
}