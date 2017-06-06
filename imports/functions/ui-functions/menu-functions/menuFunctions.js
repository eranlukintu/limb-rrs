export const setMenuName = function(tabKey) {
  	switch(tabKey) {
  		case 1: return "businessModelingMenu";
  			break;

  		case 2: return "actorsModelingMenu";
  			break;

  		case 3: return "activitiesModelingMenu";
  			break;

  		case 4: return "valuesModelingMenu";
  			break;

  		case 5: return "rawModelingMenu";

  		default: return this.props.menuName;
  	}
}