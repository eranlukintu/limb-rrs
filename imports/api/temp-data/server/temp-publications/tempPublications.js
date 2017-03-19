import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { SARS } from '../../temp-collections/tempCollections.js';
import { STRUCTUREITEMS } from '../../temp-collections/tempCollections.js';
import { TESTDATA } from '../../temp-collections/tempCollections.js';

Meteor.publish('SARS.list', () => SARS.find());

Meteor.publish('StructureItems.list', () => STRUCTUREITEMS.find());

Meteor.publish("TestData.all", () => TESTDATA.find());
