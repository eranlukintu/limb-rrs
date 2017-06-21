import {DOTROWS} from '../../../collections/drows.js';

export const findAttribute = function(dString, attributePhrase, originalStaticIndentLevel) {

   // const staticArray = DOTROWS.find().fetch();
   // console.log(staticArray);
   let mostRecentInstanceOfAttribute;
   const staticIndentLevel = (Number(originalStaticIndentLevel) + 1).toString();

   let dStringToBeMatched = "^" + dString + ".";

  let pipeline = [
    {$match: {staticDstring: {$regex: new RegExp(dStringToBeMatched)}}},
    {$match: {secondaryLabel: attributePhrase}},
    {$match: {staticIndentLevel: staticIndentLevel}},
    {$sort: {staticSortString: -1}},
    {$group: {_id: null, first: {$first: "$$ROOT"}}}
  ];

  let groupArray = DOTROWS.aggregate(pipeline);

  if(groupArray.length>0) {
     mostRecentInstanceOfAttribute = groupArray[0].first.tertiaryLabel
      return mostRecentInstanceOfAttribute;
  } 

}