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

				case "businessModelComponent": return "businessModelingMenu";
				break;

				case "rawModelComponent": return "rawModelingMenu";
				break;
			}
			break;

		case "businessModelComponent":
			switch(key) {
				case "index": return "indexMenu";
				break;

				case "back": return "modelingMenu";
				break;
				}
			break;

		case "rawModelComponent":
			switch(key) {
				case "index": return "indexMenu";
				break;

				case "back": return "modelingMenu";
					break;
				}
			break;

		default: return "NA";
	}
}