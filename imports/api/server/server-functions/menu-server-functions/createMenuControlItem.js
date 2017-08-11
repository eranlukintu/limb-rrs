import { create4RowItem } from "../dRow-functions/create4RowItem.js";
import { Random } from 'meteor/random';

export const createMenuControlItem = function(controllingStaticDstring, 
			                                 controllingStaticIndentLevel, 
			                                 principalLabel,
			                                 itemType,
			                                 itemDescription,
                                       itemCategory) {
  const menuControlItem = create4RowItem(controllingStaticDstring, 
                                 controllingStaticIndentLevel, 
                                 principalLabel,
                                 itemType,
                                 itemDescription,
                                 itemCategory);

  return menuControlItem;

}