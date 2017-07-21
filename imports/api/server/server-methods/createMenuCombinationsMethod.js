import { Meteor } from "meteor/meteor";
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { MENUCOMBINATIONS } from '../../collections/menuCollections.js';
import { createMenuCombinations } from '../server-functions/menu-server-functions/createMenuCombinations.js';


export const composeMenuCombinations = new ValidatedMethod({
  name: "composeMenuCombinations",
  validate: new SimpleSchema({ 
  }).validator(),
  run({}) {
     const menuCombinations = createMenuCombinations();
     console.log(menuCombinations);     
  },
});