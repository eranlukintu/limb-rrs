import { Meteor } from "meteor/meteor";
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { createMenuDataItem } from '../server-functions/menu-server-functions/createMenuDataItem.js';
import { findLastTopLevelMenuDataItemDstring } from '../server-functions/menu-server-functions/findLastToplevelMenuItemDstring.js';
import { calculateIndentLevelAtServer } from '../server-functions/dot-functions/calculateIndentLevelAtServer.js';
import { MENUDATAITEMS } from '../../collections/menuCollections.js';
import { createMenuDataList } from '../server-functions/menu-server-functions/createMenuDataList.js';

export const createMenuDataItemMethod = new ValidatedMethod({
  name: "createMenuDataItemMethod",
  validate: new SimpleSchema({ 
    name: {type: String},
    type: {type: String},
    description: {type: String}
  }).validator(),
  run(menuDataItem) {
	const controllingStaticDstring = (Number(findLastTopLevelMenuDataItemDstring())+1).toString();
	const controllingStaticIndentLevel = calculateIndentLevelAtServer(controllingStaticDstring);	
	const principalLabel = menuDataItem.name;
	const itemType = menuDataItem.type;
	const itemDescription = menuDataItem.description;

	const menuDataItemArray = createMenuDataItem(controllingStaticDstring, 
				                                 controllingStaticIndentLevel, 
				                                 principalLabel,
				                                 itemType,
				                                 itemDescription);
	menuDataItemArray.forEach(function(mdi) {
		MENUDATAITEMS.insert(mdi);
	});

	createMenuDataList();
  },
});