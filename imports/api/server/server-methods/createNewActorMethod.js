import { Meteor } from "meteor/meteor";
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { DOTROWS } from '../../collections/drows.js';
import { createDstringSet } from '../server-functions/dot-functions/createDstringSet.js';


export const createNewActor = new ValidatedMethod({
  name: "createNewActor",
  validate: new SimpleSchema({ 
    actorName: {type: String},
  }).validator(),
  run({actorName}) {
     console.log(actorName);
     
  },
});