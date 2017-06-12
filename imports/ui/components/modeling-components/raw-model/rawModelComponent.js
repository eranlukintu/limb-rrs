import React from "react";
import { ListGroup, ListGroupItem} from 'react-bootstrap';
import { composeWithTracker } from 'react-komposer';
import { DOTROWS } from "../../../../api/collections/drows.js";
import Loading from "../../Loading.js";
import { RawDataRow } from "./rawDataRow.js";

const RawModelComponent = function(props) {
	return <div>
		<h3>Raw model</h3>
		<ListGroup>
        {rawList.map((rr) => (
            <RawDataRow rawDataRow = {rr} key = {rr._id}/>
          ))};    
    </ListGroup>
	</div>
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