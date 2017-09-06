import { MENUASSOCIATIONS } from "../../api/collections/menuCollections.js";
import { composeWithTracker } from 'react-komposer';
import Loading from "../components/Loading.js";

const getActiveMenuActionNames = function() {	
	console.log(menuAssociationItemList);
}

let menuAssociationItemList;

const composer = (params, onData) => {
	const subscription = Meteor.subscribe('populateMenuAssociationRows');

	if (subscription.ready()) {
	menuAssociationItemList = MENUASSOCIATIONS.find().fetch();
	onData(null, { menuAssociationItemList });
	}
};

export default composeWithTracker(composer, Loading)(getActiveMenuActionNames);