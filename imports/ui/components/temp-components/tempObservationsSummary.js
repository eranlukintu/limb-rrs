import React from "react";
import { ListGroup, ListGroupItem, Alert, Button, ButtonToolbar, Table, thead, tbody, tr, td, th, Row, Col, Panel } from 'react-bootstrap';
import { composeWithTracker } from 'react-komposer';
import { Meteor } from 'meteor/meteor';
import { SUMMARYDATA } from "../../../api/temp-data/temp-collections/tempCollections.js";
import Loading from '../../components/Loading.js';
import { TempObservationSummaryItem } from "./tempObservationSummaryItem.js";

class TempObservationsSummary extends React.Component {

	render() {
		// console.log(this.props.observationsList);
		return <div>
			<Row>
				<Col>
					<Panel header="Observations summary">
						<Table striped bordered condensed hover>
				            <thead>
				                <tr>
				                    <th>Category</th>
				                    <th>Label</th>
				                    <th>Value</th>
				                </tr>
				            </thead>
				            <tbody>
				                {this.props.observationsList.map((obSumItem) => (
									<TempObservationSummaryItem
										key = {obSumItem._id}
										testSummaryItem = {obSumItem}
									 />
								))}
				            </tbody>
				        </Table>
					</Panel>
				</Col>
			</Row>
		</div>
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