import { Meteor } from "meteor/meteor";
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { DOTROWS } from '../../collections/drows.js';
import { DYNAMICROWS } from '../../collections/dynamicRows.js';
import { createDynamicArray } from '../server-functions/dynamic-array-functions/createDynamicArray.js';


export const createDynamicList = new ValidatedMethod({
  name: "createDynamicList",
  validate: new SimpleSchema({ 

  }).validator(),
  run({}) {
    const length = DOTROWS.find().count();  
    const familyHeadDstring = "1";
    if(length > 0) {
      DYNAMICROWS.remove({});

      var familyHeadDrow = DOTROWS.findOne({staticDstring: familyHeadDstring});
      console.log(familyHeadDrow);

      const dynamicArray = createDynamicArray(familyHeadDrow);
      dynamicArray.forEach(function(si) {
        DYNAMICROWS.insert(si);
      });

    }else {
      console.log("No static array")
    }    
  },
});