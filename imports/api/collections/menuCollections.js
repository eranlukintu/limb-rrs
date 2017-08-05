import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

export const MENUCOMBINATIONS = new Mongo.Collection('MENUCOMBINATIONS');
export const MENUDATAITEMS = new Mongo.Collection('MENUDATAITEMS');
export const MENUDATAROWS = new Mongo.Collection('MENUDATAROWS');
