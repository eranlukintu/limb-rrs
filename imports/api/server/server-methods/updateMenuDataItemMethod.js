import { Meteor } from "meteor/meteor";
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { updateMenuDataItem } from '../server-functions/menu-server-functions/update-menu-data-item/updateMenuDataItem.js';

export const updateMenuDataItemMethod = new ValidatedMethod({
  name: "updateMenuDataItemMethod",
  validate: new SimpleSchema({ 
    sourceDrowId: {type: String},
    label: {type: String},
    type: {type: String},
    description: {type: String}
  }).validator(),
  run(menuDataItem) {

  	updateMenuDataItem(menuDataItem);
	
	}
});
