import React from "react";
import { composeWithTracker } from 'react-komposer';
import { DYNAMICROWS } from "../../../../api/collections/dynamicRows.js";
import Loading from "../../Loading.js";


const BusinessModelComponent = function(props){

		return <h3>Business model component</h3>
}

let dynamicList;

const composer = (params, onData) => {
  const subscription = Meteor.subscribe('populateBusinessModel');

  if (subscription.ready()) {
    dynamicList = DYNAMICROWS.find().fetch();
    onData(null, { dynamicList });
  }
};

export default composeWithTracker(composer, Loading)(BusinessModelComponent);