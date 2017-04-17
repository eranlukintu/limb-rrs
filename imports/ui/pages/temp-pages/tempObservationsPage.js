import React from "react";
import { Row, Col, Button } from 'react-bootstrap';
import TempObservationsComponent from '../../components/temp-components/tempObservationsComponent.js';

export class TempObservationsPage extends React.Component {

	handleRefreshSummaryObservations() {
		Meteor.call("DisplayData.observations", {});
	}

	handleCreateObservationsSummary() {
		
	}

	render() {
		return <div>
			<Row>
				<Col xs= {3}>
					<Button block bsStyle="success" onClick={this.handleRefreshSummaryObservations.bind(this)}>
						Refresh summary observations
					</Button>
				</Col>

				<Col xs= {3}>
					<Button block>Create summary 2</Button>
				</Col>

				<Col xs= {3}>
					<Button block>Button 3</Button>
				</Col>

				<Col xs= {3}>
					<Button block>Button 4</Button>
				</Col>
			</Row>
			<Row>
		    <Col xs={ 12 }>
		      <TempObservationsComponent  { ...this.props } />
		    </Col>
		  </Row>
	  </div>
	}  
}

TempObservationsPage.propTypes = {
  setCurrentPage: React.PropTypes.func,
};