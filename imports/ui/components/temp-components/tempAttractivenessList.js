import React from "react";
import { ListGroup, ListGroupItem, Alert, Button, ButtonToolbar, Table, thead, tbody, tr, td, th, Row, Col, Panel } from 'react-bootstrap';
import { composeWithTracker } from 'react-komposer';
import { Meteor } from 'meteor/meteor';
import { ATTRACTIVENESSDATA } from "../../../api/temp-data/temp-collections/tempCollections.js";
import Loading from '../../components/Loading.js';
import { TempTestObservationItem } from "./tempTestObservationItem.js";


class TempAttractivenessList extends React.Component {
	
	render() {

		const attractivenessList = this.props.attractivenessList;
		// console.log(attractivenessList);

		return <ListGroup> 
                {attractivenessList.map((obItem) => (        	
                    <TempTestObservationItem 
                        observationItem = {obItem} 
                        key={obItem._id} 
                    />
                ))}
    </ListGroup>
	}
}

const composer = (params, onData) => {
  const subscription = Meteor.subscribe('refreshAttractivenessList');

  if (subscription.ready()) {
    const attractivenessList = ATTRACTIVENESSDATA.find().fetch();
    onData(null, { attractivenessList });
  }
};

export default composeWithTracker(composer, Loading)(TempAttractivenessList);