import React from "react";
import { ListGroup, ListGroupItem} from 'react-bootstrap';
import { composeWithTracker } from 'react-komposer';
import { ACTORS } from "../../../../api/collections/actors.js";
import { GeneralDataRow } from '../general-modeling-components/generalDataRow.js';
import Loading from "../../Loading.js";


const ActorModelComponent = function(props){

	return <div>
		<h3>Actor model component</h3>
		<ListGroup>
	        {actorList.map((gdr) => (
	            <GeneralDataRow 
	            	generalDataRow = {gdr} 
	            	controllingStaticDrowId={props.controllingStaticDrowId}
	            	key = {gdr._id} 
	            	calculateIndentLevel={props.calculateIndentLevel}
	            	setControllingStaticDrowId={props.setControllingStaticDrowId}/>
	          ))};    
	    </ListGroup>
	</div>
}

let actorList;

const composer = (params, onData) => {
  const subscription = Meteor.subscribe('populateActorModel');

  if (subscription.ready()) {
    actorList = ACTORS.find().fetch();
    onData(null, { actorList });
  }
};

export default composeWithTracker(composer, Loading)(ActorModelComponent);