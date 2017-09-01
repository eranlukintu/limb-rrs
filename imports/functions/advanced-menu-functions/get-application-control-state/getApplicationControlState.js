export const getApplicationControlState = function(roleState,
													initialisationState,
													graphicalState,
													selectedState,
													pageState) {
	let applicationControlStates = [];

	const applicationRoleState = getRoleState(roleState);
	const applicationInitialisationState = getInitialisationState(initialisationState);
	const applicationGraphicalState = getGraphicalState(graphicalState);
	const applicationSelectedState = getSelectedState(selectedState);
	const applicationPageState = getPageState(pageState);

	applicationControlStates.push(applicationRoleState);
	applicationControlStates.push(applicationInitialisationState);
	applicationControlStates.push(applicationGraphicalState);	
	applicationControlStates.push(applicationPageState);
	applicationControlStates.push(applicationSelectedState);

	const applicationControlState = applicationControlStates.reduce(function(combinedString, currentString) {
		return combinedString + currentString;
	}, "");

	console.log(applicationControlState);

}

const getRoleState = function(roleState) {
	return roleState;
}

const getInitialisationState = function(initialisationState) {
	if(initialisationState === true) {
		return "true";
	}else {
		return "false";
	}
}

const getGraphicalState = function(graphicalState) {
	if(graphicalState === true) {
		return "graphical";
	}else {
		return "textual";
	}
}

const getSelectedState = function(selectedState) {
	return selectedState;
}

const getPageState = function(pageState) {
	return pageState;
}