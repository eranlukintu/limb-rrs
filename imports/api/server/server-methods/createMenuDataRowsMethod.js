import { Meteor } from "meteor/meteor";
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { createMenuDataRows } from '../server-functions/menu-server-functions/createMenuDataRows.js'

export const createMenuDataRowsMethod = new ValidatedMethod({
  name: "createMenuDataRowsMethod",
  validate: new SimpleSchema({ 

  }).validator(),
  run({}) {
    createMenuDataRows();       

    }     

});