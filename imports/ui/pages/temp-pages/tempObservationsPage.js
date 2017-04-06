import React from "react";
import { Row, Col, Button } from 'react-bootstrap';
import TempObservationsComponent from '../../containers/tempContainers/tempObservationsContainer.js';

export class TempObservationsPage extends React.Component {

	handleAddActivityImportanceObservations() {
		Meteor.call("DisplayData.observations", {});
	}

	render() {
		return <div>
			<Row>
				<Col xs= {3}>
					<Button block bsStyle="success" onClick={this.handleAddActivityImportanceObservations.bind(this)}>
						Add activity importance observations
					</Button>
				</Col>

				<Col xs= {3}>
					<Button block>Button 2</Button>
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
		      <div className="page-header clearfix">
		        <h4 className="pull-left">Observations</h4> 
		      </div>
		      <TempObservationsComponent  { ...this.props } />
		    </Col>
		  </Row>
	  </div>
	}  
}

TempObservationsPage.propTypes = {
  setCurrentPage: React.PropTypes.func,
};