import { createSortStringAtServer } from "../createSortStringAtServer.js";
import { Random } from 'meteor/random';

export const create4RowItem = (controllingStaticDstring, 
                                 controllingStaticIndentLevel, 
                                 principalLabel,
                                 itemType,
                                 itemDescription,
                                 itemCategory) => {
   console.log(itemCategory);

      let fourRowItem = [];
      const controllingDrow = createControllingDrow(controllingStaticDstring, controllingStaticIndentLevel);
      const principalLabelDrow = createPrincipalLabelDrow(controllingDrow, principalLabel);
      const itemTypeDrow = createItemTypeDrow(controllingDrow, itemType);
      const descriptionDrow = createItemDescriptionDrow(controllingDrow, itemDescription);
      const categoryDrow = createItemCategoryDrow(controllingDrow, itemCategory);

      fourRowItem.push(controllingDrow);
      fourRowItem.push(principalLabelDrow);
      fourRowItem.push(itemTypeDrow);
      fourRowItem.push(descriptionDrow);
      fourRowItem.push(categoryDrow);

    return fourRowItem;
}

const createControllingDrow =(controllingStaticDstring, controllingStaticIndentLevel) => {
   const controllingDrow = {};
   controllingDrow.title = "NA";
   controllingDrow.dRowId = Random.id();
   controllingDrow.staticDstring = controllingStaticDstring;
   controllingDrow.staticIndentLevel = controllingStaticIndentLevel;
   controllingDrow.staticSortString = createSortStringAtServer(controllingStaticDstring);
   controllingDrow.primaryId = Random.id();
   controllingDrow.primaryLabel = "dRow";
   controllingDrow.secondaryId = Random.id();
   controllingDrow.secondaryLabel = "has auto label";
   controllingDrow.tertiaryId = Random.id();
   controllingDrow.tertiaryLabel = "controllingDrow";

   return controllingDrow;
}

const createPrincipalLabelDrow = (controllingDrow, principalLabel) => {
   const principalLabelDrow = {};
   principalLabelDrow.title = "NA";
   principalLabelDrow.dRowId = Random.id();
   principalLabelDrow.staticDstring = controllingDrow.staticDstring + ".1";
   principalLabelDrow.staticIndentLevel = (Number(controllingDrow.staticIndentLevel+1)).toString();
   principalLabelDrow.staticSortString = createSortStringAtServer(principalLabelDrow.staticDstring);
   principalLabelDrow.primaryId = controllingDrow.dRowId;
   principalLabelDrow.primaryLabel = "drow";
   principalLabelDrow.secondaryId = Random.id();
   principalLabelDrow.secondaryLabel = "has principal label";
   principalLabelDrow.tertiaryId = Random.id();
   principalLabelDrow.tertiaryLabel = principalLabel;

   return principalLabelDrow;
}

const createItemTypeDrow = (controllingDrow, itemType) => {
   const itemTypeDrow = {};
   itemTypeDrow.title = "NA";
   itemTypeDrow.dRowId = Random.id();
   itemTypeDrow.staticDstring = controllingDrow.staticDstring + ".2";
   itemTypeDrow.staticIndentLevel = (Number(controllingDrow.staticIndentLevel+1)).toString();;
   itemTypeDrow.staticSortString = createSortStringAtServer(itemTypeDrow.staticDstring);;
   itemTypeDrow.primaryId = controllingDrow.dRowId;
   itemTypeDrow.primaryLabel = "drow";
   itemTypeDrow.secondaryId = Random.id();
   itemTypeDrow.secondaryLabel = "has item type";
   itemTypeDrow.tertiaryId = Random.id();
   itemTypeDrow.tertiaryLabel = itemType;

   return itemTypeDrow;
}

const createItemDescriptionDrow = (controllingDrow, itemDescription) => {
   const itemDescriptionDrow = {};
   itemDescriptionDrow.title = "NA";
   itemDescriptionDrow.dRowId = Random.id();
   itemDescriptionDrow.staticDstring = controllingDrow.staticDstring + ".3";
   itemDescriptionDrow.staticIndentLevel = (Number(controllingDrow.staticIndentLevel+1)).toString();;
   itemDescriptionDrow.staticSortString = createSortStringAtServer(itemDescriptionDrow.staticDstring);;
   itemDescriptionDrow.primaryId = controllingDrow.dRowId;
   itemDescriptionDrow.primaryLabel = "drow";
   itemDescriptionDrow.secondaryId = Random.id();
   itemDescriptionDrow.secondaryLabel = "has description";
   itemDescriptionDrow.tertiaryId = Random.id();
   itemDescriptionDrow.tertiaryLabel = itemDescription;

   return itemDescriptionDrow;
}

const createItemCategoryDrow = (controllingDrow, itemCategory) => {
   const itemCategoryDrow = {};
   itemCategoryDrow.title = "NA";
   itemCategoryDrow.dRowId = Random.id();
   itemCategoryDrow.staticDstring = controllingDrow.staticDstring + ".3";
   itemCategoryDrow.staticIndentLevel = (Number(controllingDrow.staticIndentLevel+1)).toString();;
   itemCategoryDrow.staticSortString = createSortStringAtServer(itemCategoryDrow.staticDstring);;
   itemCategoryDrow.primaryId = controllingDrow.dRowId;
   itemCategoryDrow.primaryLabel = "drow";
   itemCategoryDrow.secondaryId = Random.id();
   itemCategoryDrow.secondaryLabel = "has category";
   itemCategoryDrow.tertiaryId = Random.id();
   itemCategoryDrow.tertiaryLabel = itemCategory;

   return itemCategoryDrow;
}