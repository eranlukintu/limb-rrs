import React from "react";
import { ListGroup, ListGroupItem, Alert, Button, ButtonToolbar, Table, thead, tbody, tr, td, th, Row, Col, Panel } from 'react-bootstrap';
import { composeWithTracker } from 'react-komposer';
import { Meteor } from 'meteor/meteor';
import { ALIGNMENTDATA } from "../../../api/temp-data/temp-collections/tempCollections.js";
import Loading from '../../components/Loading.js';
import { TempTestObservationItem } from "./tempTestObservationItem.js";


class TempAlignmentList extends React.Component {

	
	render() {

		const alignmentList = this.props.alignmentList;
		// console.log(alignmentList);

		return <div>
			<ListGroup> 
	                {alignmentList.map((obItem) => (        	
	                    <TempTestObservationItem 
	                        observationItem = {obItem} 
	                        key={obItem._id} 
	                    />
	                ))}
	    	</ListGroup>
    	</div>
	}
}

const composer = (params, onData) => {
  const subscription = Meteor.subscribe('refreshAlignmentList');

  if (subscription.ready()) {
    const alignmentList = ALIGNMENTDATA.find().fetch();
    onData(null, { alignmentList });
  }
};

export default composeWithTracker(composer, Loading)(TempAlignmentList);