import {MENUDATAITEMS} from '../../../collections/menuCollections.js';

export const getAttribute = function(dString, attributePhrase, originalStaticIndentLevel) {

   // const staticArray = DOTROWS.find().fetch();
   // console.log(staticArray);

   const staticIndentLevel = (Number(originalStaticIndentLevel) + 1).toString();
   let dStringToBeMatched = "^" + dString + ".";

  // let pipeline = [
  //   {$match: {staticDstring: {$regex: new RegExp(dStringToBeMatched)}}},
  //   {$match: {secondaryLabel: "has principal label"}},
  //   {$match: {staticIndentLevel: staticIndentLevel}},
  // ];

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

  let foundDrow = MENUDATAITEMS.aggregate(pipeline);
  const attribute = foundDrow[0].tertiaryLabel;
  // console.log(attribute);
  return attribute;

}