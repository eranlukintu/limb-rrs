import { DOTROWS } from '../../collections/drows.js';
import { ACTORS } from '../../collections/actors.js';
import { createDynamicArray } from '../server-functions/dynamic-array-functions/createDynamicArray.js';


export const createActorList = new ValidatedMethod({
  name: "createActorList",
  validate: new SimpleSchema({ 

  }).validator(),
  run({}) {
    const length = DOTROWS.find().count();  
    const familyHeadDstring = "1";
    if(length > 0) {
      ACTORS.remove({});

     const actorElementTypes = DOTROWS.find({elementType: "actor"});
     if(actorElementTypes) {
        let actor = {};
        actor.dynamicDstring = "55";
        actor.pLabel = "Test Actor";
        actor.elementType = "actor";

        ACTORS.insert(actor);
     } else {
       let actor = {};
        actor.dynamicDstring = "66";
        actor.pLabel = "Null Actor";
        actor.elementType = "actor";

        ACTORS.insert(actor);
     }





      // var familyHeadDrow = DOTROWS.findOne({staticDstring: familyHeadDstring});
      // console.log(familyHeadDrow);

      // const dynamicArray = createDynamicArray(familyHeadDrow);
      // dynamicArray.forEach(function(si) {
      //   DYNAMICROWS.insert(si);
      // });

    }else {
      console.log("No static array");
    }    
  },
});