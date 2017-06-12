import { Meteor } from "meteor/meteor";
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { createRootItem } from '../server-functions/createRootItem.js';
import { DOTROWS } from '../../collections/drows.js';


export const addRootItem = new ValidatedMethod({
  name: "addRootItem",
  validate: new SimpleSchema({ 

  }).validator(),
  run({}) {
    const length = DOTROWS.find().count();
    if(length === 0) {
      const rootItem = createRootItem();
      rootItem.forEach(function(r) {
        DOTROWS.insert(r);
      });
    }else {
      console.log("Root already exists")
    }    
  },
});