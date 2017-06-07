import React from "react";
import { composeWithTracker } from 'react-komposer';
import { DOTROWS } from "../../../api/collections/drows.js";
import Loading from "../Loading.js";

const RawModelComponent = function(props) {
	// console.log(props);
	return <h3>Raw model</h3>
}

let rawList;

const composer = (params, onData) => {
  const subscription = Meteor.subscribe('populateRawModel');

  if (subscription.ready()) {
    rawList = DOTROWS.find().fetch();
    onData(null, { rawList });
  }
};

export default composeWithTracker(composer, Loading)(RawModelComponent);