import React from "react";
import { ListGroup, ListGroupItem, Alert, Button, ButtonToolbar, Table, thead, tbody, tr, td, th, Row, Col, Panel } from 'react-bootstrap';
import { composeWithTracker } from 'react-komposer';
import { Meteor } from 'meteor/meteor';
import { SUMMARYDATA } from "../../../api/temp-data/temp-collections/tempCollections.js";
import Loading from '../../components/Loading.js';
import { TempObservationSummaryItem } from "./tempObservationSummaryItem.js";

class TempObservationsSummary extends React.Component {

	render() {
		// console.log(this.props.observationsSummaryList);
		const total = this.props.observationsSummaryList.reduce(function(runningTotal, item) {
			return runningTotal + item.itemValue;
		},0);

		let categories = [];
		const summaryObservations = this.props.observationsSummaryList;
		summaryObservations.forEach(function(ob) {
			if(categories.indexOf(ob.itemCategory) === -1) {
				categories.push(ob.itemCategory);
			}			
		});		


		return <div>
			<Row>
				<Col>
					<Panel header="Observations summary">
						<Table striped bordered condensed hover>
				            <thead>
				                <tr>
				                    <th>Category</th>
				                    <th>Impact</th>
				                    <th>Value</th>
				                    <th>Percentage</th>
				                </tr>
				            </thead>
				            <tbody>
				                {this.props.observationsSummaryList.map((obSumItem) => (
									<TempObservationSummaryItem
										key = {obSumItem._id}
										testSummaryItem = {obSumItem}
										total = {total}
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
    const observationsSummaryList = SUMMARYDATA.find({}).fetch();
    onData(null, { observationsSummaryList });
  }
};

export default composeWithTracker(composer, Loading)(TempObservationsSummary);