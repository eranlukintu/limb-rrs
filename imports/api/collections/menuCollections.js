import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

export const MENUCOMBINATIONS = new Mongo.Collection('MENUCOMBINATIONS');
export const MENUDATAITEMS = new Mongo.Collection('MENUDATAITEMS');
export const MENUDATAROWS = new Mongo.Collection('MENUDATAROWS');
export const MENUDATACONTROLVARIABLES = new Mongo.Collection('MENUDATACONTROLVARIABLES');
export const MENUCONTROLVARIABLESROWS = new Mongo.Collection('MENUCONTROLVARIABLESROWS');
export const MENUASSOCIATIONS = new Mongo.Collection('MENUASSOCIATIONS');
