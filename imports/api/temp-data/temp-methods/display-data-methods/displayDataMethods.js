import { Meteor } from "meteor/meteor";
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { DISPLAYDATA } from "../../temp-collections/tempCollections.js";
import { TESTDATA } from "../../temp-collections/tempCollections.js";

export const loadActorsForDisplay = new ValidatedMethod({
  name: "DisplayData.actors",
  validate: new SimpleSchema({ 

  }).validator(),
  run({}) {
  	DISPLAYDATA.remove({});
    let  allTestData = TESTDATA.find({ userId:this.userId }, {sort: {staticSortString: 1}}).fetch();
    allTestData.forEach(function(DDI) {
      DISPLAYDATA.insert(DDI);
    });
  },
});