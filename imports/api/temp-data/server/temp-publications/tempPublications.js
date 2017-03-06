import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { SARS } from '../../temp-collections/tempCollections.js';

Meteor.publish('SARS.list', () => SARS.find());
