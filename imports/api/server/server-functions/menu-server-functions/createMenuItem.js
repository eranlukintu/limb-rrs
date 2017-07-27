import { createBasicItem } from "../dRow-functions/createBasicItem.js";
import { Random } from 'meteor/random';

// export const createMenuItem = (controllingStaticDstring, 
//                               controllingStaticIndentLevel, 
//                               principalLabel,
//                               itemType) => {
//    const controllingDrow = createControllingDrow(controllingStaticDstring, controllingStaticIndentLevel);
//    const principalLabelDrow = createPrincipalLabelDrow(controllingDrow, principalLabel);
//    const itemTypeDrow = createItemTypeDrow(controllingDrow);
//     const dRows = [];
//     dRows.push(controllingDrow);
//     dRows.push(principalLabelDrow);
//     dRows.push(itemTypeDrow);
//     return dRows;
// }

export const createMenuItem = function() {
  const menuItem = createBasicItem("2", "0", "Test label", "Test type");
  return menuItem;
}