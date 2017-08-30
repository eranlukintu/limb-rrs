import {MENUDATAITEMS} from '../../../collections/menuCollections.js';

export const getDrowByAttribute = function(dString, attributePhrase, originalStaticIndentLevel, collection) {

   // const staticArray = DOTROWS.find().fetch();
   // console.log(staticArray);

   // console.log("collection", collection);
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

  const foundDrows = collection.aggregate(pipeline);
  // console.log(foundDrows);
  const foundDrow = foundDrows[0];

  return foundDrow;

}