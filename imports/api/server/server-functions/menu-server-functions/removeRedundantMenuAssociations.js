import { MENUDATAROWS } from '../../../collections/menuCollections.js';
import { MENUASSOCIATIONS } from '../../../collections/menuCollections.js';


export const removeRedundantMenuAssociations = function() {

	const menuAssociationsCollection = MENUASSOCIATIONS.find({}).fetch();
	menuAssociationsCollection.forEach(function(ma) {
		foundMenuDataRow = MENUDATAROWS.findOne({_id: ma.menuDataRowId});
		if(!foundMenuDataRow) {
			MENUASSOCIATIONS.remove(ma._id);
		}
	});
}