import { createBasicItem } from "../dRow-functions/createBasicItem.js";
import { Random } from 'meteor/random';

export const createMenuDataItem = function(controllingStaticDstring, 
			                                 controllingStaticIndentLevel, 
			                                 principalLabel,
			                                 itemType,
			                                 itemDescription) {
  const menuDataItem = createBasicItem(controllingStaticDstring, 
                                 controllingStaticIndentLevel, 
                                 principalLabel,
                                 itemType,
                                 itemDescription);
  return menuDataItem;
}