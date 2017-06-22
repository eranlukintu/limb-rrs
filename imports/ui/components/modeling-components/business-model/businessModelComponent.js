import React from "react";
import { ListGroup, ListGroupItem} from 'react-bootstrap';
import { composeWithTracker } from 'react-komposer';
import { DYNAMICROWS } from "../../../../api/collections/dynamicRows.js";
import { BusinessDataRow } from './businessDataRow.js';
import Loading from "../../Loading.js";


const BusinessModelComponent = function(props){

	return <div>
		<h3>Business model component</h3>
		<ListGroup>
	        {dynamicList.map((br) => (
	            <BusinessDataRow 
	            	businessDataRow = {br} 
	            	controllingStaticDrowId={props.controllingStaticDrowId}
	            	key = {br._id} 
	            	calculateIndentLevel={props.calculateIndentLevel}
	            	setControllingStaticDrowId={props.setControllingStaticDrowId}/>
	          ))};    
	    </ListGroup>
	</div>
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