import React from "react";
import { ListGroup, ListGroupItem, Alert, Button, Row, Col, ButtonToolbar } from 'react-bootstrap';
import { composeWithTracker } from 'react-komposer';
import { Meteor } from 'meteor/meteor';
import { SUMMARYDATA } from "../../../api/temp-data/temp-collections/tempCollections.js";
import Loading from '../../components/Loading.js';

class TempObservationsSummary extends React.Component {

	handleViewSummary() {
		Meteor.call("SummaryData.create", {});
	}

	render() {
		console.log(this.props.observationsList);
		return <Row>
			<Col>
				<div>
					<h4>Observation Summary</h4>
					<span>
						<ButtonToolbar>
							<Button bsStyle="info" onClick={this.handleViewSummary.bind(this)}>
								View summary
							</Button>
						</ButtonToolbar>
					</span>
				</div>
			</Col>
		</Row>
	}
}

const composer = (params, onData) => {
  const subscription = Meteor.subscribe('observationsSummary');

  if (subscription.ready()) {
    const observationsList = SUMMARYDATA.find({}).fetch();
    onData(null, { observationsList });
  }
};

export default composeWithTracker(composer, Loading)(TempObservationsSummary);