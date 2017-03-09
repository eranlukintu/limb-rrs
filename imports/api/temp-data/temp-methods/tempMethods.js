import { Meteor } from "meteor/meteor";
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { SARS } from "../temp-collections/tempCollections.js";

export const insertSAR = new ValidatedMethod({
  name: 'SAR.insert',
  validate: new SimpleSchema({ 
    stakeholder: { type: String, optional: true },
    activity: { type: String, optional: true },
    parent: { type: String, optional: true },
  }).validator(),
  run(SAR) {
    SARS.insert(SAR);
  },
});

export const insertStructureItem = new ValidatedMethod({
  name: 'structureItem.insert',
  validate: new SimpleSchema({ 
    stakeholder: { type: String, optional: true },
    activity: { type: String, optional: true },
    parent: { type: String, optional: true },
  }).validator(),
  run(SAR) {
    SARS.insert(SAR);
  },
});