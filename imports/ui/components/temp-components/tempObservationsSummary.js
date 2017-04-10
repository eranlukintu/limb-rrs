import React from "react";
import { ListGroup, ListGroupItem, Alert, Button, Row, Col, ButtonToolbar } from 'react-bootstrap';

export class TempObservationsSummary extends React.Component {

	handleViewSummary() {
		Meteor.call("SummaryData.create", {});
	}

	render() {
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