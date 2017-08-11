import { getDrowByAttribute } from '../dRow-functions/getDrowByAttribute.js';

export const getAttribute = function(dString, attributePhrase, originalStaticIndentLevel, collection) {

  let foundDrow = getDrowByAttribute(dString, attributePhrase, originalStaticIndentLevel, collection);
  // console.log(foundDrow);
  const attribute = foundDrow.tertiaryLabel;
  return attribute;

}