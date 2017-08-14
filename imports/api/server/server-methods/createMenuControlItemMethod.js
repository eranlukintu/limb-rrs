import { Meteor } from "meteor/meteor";
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { createMenuControlItem } from '../server-functions/menu-server-functions/createMenuControlItem.js';
import { findLastTopLevelMenuControlItemDstring } from '../server-functions/menu-server-functions/findLastTopLevelMenuControlItemDstring.js';
import { calculateIndentLevelAtServer } from '../server-functions/dot-functions/calculateIndentLevelAtServer.js';
import { MENUDATACONTROLVARIABLES } from '../../collections/menuCollections.js';
import { createMenuControlItemList } from '../server-functions/menu-server-functions/createMenuControlItemList.js';
import { createMenuCombinations } from '../server-functions/menu-server-functions/createMenuCombinations.js';

export const createMenuControlItemMethod = new ValidatedMethod({
  name: "createMenuControlItemMethod",
  validate: new SimpleSchema({ 
    name: {type: String},
    type: {type: String},
    description: {type: String},
    category: {type: String}

  }).validator(),
  run(menuControlItem) {

  	// console.log(menuControlItem);

	const controllingStaticDstring = (Number(findLastTopLevelMenuControlItemDstring())+1).toString();
	const controllingStaticIndentLevel = calculateIndentLevelAtServer(controllingStaticDstring);	
	const principalLabel = menuControlItem.name;
	const itemType = menuControlItem.type;
	const itemDescription = menuControlItem.description;
	const itemCategory = menuControlItem.category;

	const menuControlItemArray = createMenuControlItem(controllingStaticDstring, 
				                                 controllingStaticIndentLevel, 
				                                 principalLabel,
				                                 itemType,
				                                 itemDescription,
				                                 itemCategory);
	menuControlItemArray.forEach(function(mdi) {
		MENUDATACONTROLVARIABLES.insert(mdi);
	});

	// createMenuCombinations();
	createMenuControlItemList();
  },
});