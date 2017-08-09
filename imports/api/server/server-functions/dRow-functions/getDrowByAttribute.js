import {MENUDATAITEMS} from '../../../collections/menuCollections.js';

export const getDrowByAttribute = function(dString, attributePhrase, originalStaticIndentLevel) {

   // const staticArray = DOTROWS.find().fetch();
   // console.log(staticArray);

   const staticIndentLevel = (Number(originalStaticIndentLevel) + 1).toString();
   let dStringToBeMatched = "^" + dString + "\\.";
   
  let pipeline = [
      {$match: {
        $and: [
          {staticDstring: {$regex: new RegExp(dStringToBeMatched)}},
          {secondaryLabel: attributePhrase},
          {staticIndentLevel: staticIndentLevel},
        ]
      }
    }
  ]

  const foundDrows = MENUDATAITEMS.aggregate(pipeline);
  const foundDrow = foundDrows[0];

  return foundDrow;

}