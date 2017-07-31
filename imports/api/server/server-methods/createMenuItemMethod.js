import { Meteor } from "meteor/meteor";
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { createMenuItem } from '../server-functions/menu-server-functions/createMenuItem.js';
import { findLastTopLevelMenuDstring } from '../server-functions/menu-server-functions/findLastToplevelMenuItemDstring.js';
import { calculateIndentLevelAtServer } from '../server-functions/dot-functions/calculateIndentLevelAtServer.js';

export const createMenuItemMethod = new ValidatedMethod({
  name: "createMenuItemMethod",
  validate: new SimpleSchema({ 
    // menuDataItemName: {type: String},
    name: {type: String},
    type: {type: String}
  }).validator(),
  run(menuDataItem) {
	const controllingDstring = findLastTopLevelMenuDstring();
	const controllingIndentLevel = calculateIndentLevelAtServer(controllingDstring);
	const menuItem = createMenuItem();
	console.log(controllingDstring, controllingIndentLevel);
	console.log(menuDataItem.name, menuDataItem.type);
// console.log(menuItem);     
  },
});