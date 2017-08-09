import {MENUDATAITEMS} from '../../../collections/menuCollections.js';
import { getDrowByAttribute } from '../dRow-functions/getDrowByAttribute.js';

export const getAttribute = function(dString, attributePhrase, originalStaticIndentLevel) {

  let foundDrow = getDrowByAttribute(dString, attributePhrase, originalStaticIndentLevel);
  const attribute = foundDrow.tertiaryLabel;
  return attribute;

}