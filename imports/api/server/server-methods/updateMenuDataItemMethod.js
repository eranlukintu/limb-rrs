import { Meteor } from "meteor/meteor";
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { MENUDATAITEMS } from '../../collections/menuCollections.js';
import { createMenuDataList } from '../server-functions/menu-server-functions/createMenuDataList.js';
import { getDrowByAttribute } from "../server-functions/dRow-functions/getDrowByAttribute.js";


export const updateMenuDataItemMethod = new ValidatedMethod({
  name: "updateMenuDataItemMethod",
  validate: new SimpleSchema({ 
    sourceDrowId: {type: String},
    name: {type: String},
    type: {type: String},
    description: {type: String}
  }).validator(),
  run(menuDataItem) {
	// console.log(menuDataItem);
		const foundMenuDataHeadDrow = MENUDATAITEMS.findOne({dRowId: menuDataItem.sourceDrowId});
		// console.log(foundMenuDataHeadDrow);
		const menuDataItemsCollection = MENUDATAITEMS;
		// console.log(menuDataItemsCollection);

		const controllingDstring = foundMenuDataHeadDrow.staticDstring;
		const controllingIndentLevel = foundMenuDataHeadDrow.staticIndentLevel;
		let foundLabelDrow = getDrowByAttribute(
							controllingDstring, "has principal label", 
							controllingIndentLevel,
							menuDataItemsCollection
							);
		let foundDescriptionDrow = getDrowByAttribute(
							controllingDstring, "has description", 
							controllingIndentLevel,
							menuDataItemsCollection);

		const foundLabelDrowId = foundLabelDrow._id;
		const newLabel = menuDataItem.name;
	
		MENUDATAITEMS.update(
			{_id: foundLabelDrowId},
			{$set: {tertiaryLabel: newLabel}}
		)

		const foundDescriptionDrowId = foundDescriptionDrow._id;
		// console.log(foundDescriptionDrow);
		const newDescription = menuDataItem.description;

		MENUDATAITEMS.update(
			{_id: foundDescriptionDrowId},
			{$set: {tertiaryLabel: newDescription}}
		)

	createMenuDataList();
	}
});
