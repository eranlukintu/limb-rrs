import { Meteor } from "meteor/meteor";
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { SARS } from "../temp-collections/tempCollections.js";
import { STRUCTUREITEMS } from "../temp-collections/tempCollections.js";
import { TESTDATA } from "../temp-collections/tempCollections.js";

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
    userId: { type: String, optional: false},
    itemId: { type: String, optional: false },
    name: { type: String, optional: false },
    itemType: { type: String, optional: false },
    parentId: { type: String, optional: false },
    relationshipToParent: { type: String, optional: false },
    helpNote: { type: String, optional: false },
  }).validator(),
  run(SI) {
    STRUCTUREITEMS.insert(SI);
  },
});

export const insertTestDataItem = new ValidatedMethod({
  name: 'testDataItem.insert',
  validate: new SimpleSchema({ 
    userId: { type: String, optional: false},
    itemId: { type: String, optional: false },
    staticDotString: { type: String, optional: false},
    staticSortString: { type: String, optional: false},
    name: { type: String, optional: false },
    text: { type: String, optional: false },
    sourceId: { type: String, optional: false },
    itemType: { type: String, optional: false },
    // crossReferenceId: { type: String, optional: false },
    relationshipToParent: { type: String, optional: false },
    helpNote: { type: String, optional: false },
  }).validator(),
  run(TDI) {
    TESTDATA.insert(TDI);
  },
});

export const deleteTestDataItem = new ValidatedMethod({
  name: 'testDataItem.delete',
  validate: new SimpleSchema({ 
    _id: {type: String},
    userId: { type: String, optional: false},
    itemId: { type: String, optional: false },
    staticDotString: { type: String, optional: false},
    staticSortString: { type: String, optional: false},
    name: { type: String, optional: false },
    text: { type: String, optional: false },
    sourceId: { type: String, optional: false },
    itemType: { type: String, optional: false },
    // crossReferenceId: { type: String, optional: false },
    relationshipToParent: { type: String, optional: false },
    helpNote: { type: String, optional: false },
  }).validator(),
  run({item}) {
    // console.log(itemId);
    TESTDATA.remove({item});
  },
});
