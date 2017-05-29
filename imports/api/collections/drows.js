import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

export const DRows = new Mongo.Collection('DRows');

DRows.allow({
  insert: () => false,
  update: () => false,
  remove: () => false,
});

DRows.deny({
  insert: () => true,
  update: () => true,
  remove: () => true,
});

DRows.schema = new SimpleSchema({
  title: {
    type: String,
    label: 'The title of the item.',
  },
  batchId: {
    type: String,
    label: 'The batch id of the item.',
  },
  sequenceId: {
    type: String,
    label: 'The sequence id of the item.',
  },
  "dRowId": {
    type: String,
    label: "DRow ID"
  },
  "staticDstring": {
    type: String,
    label: "Static DString"
  },
  "staticIndentLevel": {
    type: String,
    label: "Static indent level"
  },
  "staticSortString": {
    type: String,
    label: "Static sort string"
  },
  "author": {
    type: String,
    label: "Author",
    autoValue: function() {
      return this.userId;
    }
  },
  "created": {
    type: Date,
    label: "Created on",
    autoValue: function() {
      return new Date;
    }
  },
  "primaryId": {
    type: String,
    label: "Primary ID"
  },
  "primaryLabel": {
    type: String,
    label: "Primary label"
  },
  "secondaryId": {
    type: String,
    label: "Secondary ID"
  },
  "secondaryLabel": {
    type: String,
    label: "Secondary label"
  },
  "tertiaryId": {
    type: String,
    label: "Tertiary ID"
  },
  "tertiaryLabel": {
    type: String,
    label: "Tertiary label"
  }
});

DRows.attachSchema(DRows.schema);
