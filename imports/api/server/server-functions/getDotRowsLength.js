import { Meteor } from "meteor/meteor";
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { DOTROWS } from '../../collections/drows.js';


export const getDotRowsLength = new ValidatedMethod({
  name: "getDotRowsLength",
  validate: new SimpleSchema({ 

  }).validator(),
  run({}) {
  	const length = DOTROWS.find().count();
  	console.log(length);
    return DOTROWS.find().count();
  },
});