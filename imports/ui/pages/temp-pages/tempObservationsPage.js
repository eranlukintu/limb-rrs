import React from "react";
import { Row, Col, Button } from 'react-bootstrap';
import TempObservationsComponent from '../../components/temp-components/tempObservationsComponent.js';
import TempObservationsSummary from '../../components/temp-components/tempObservationsSummary.js';
import TempObservationsList from '../../components/temp-components/tempObservationsList.js';
import PropTypes from 'prop-types';
import { Meteor } from "meteor/meteor";

export class TempObservationsPage extends React.Component {

	constructor(props) {
        super(props);
        this.state = {
            viewCase: 0
        }
    }

    handleSelectViewList() {
        this.setState({viewCase: 1});
    }

    handleSelectSummary() {
        this.setState({viewCase: 2});
    }

    displayObservations(obList) {
        // console.log(obList);
        let viewCase = this.state.viewCase;

        switch(viewCase) {
            case 1: return <TempObservationsList  />;
            break;

            case 2: return <TempObservationsSummary />;
            break;

            default: return <h4>Please select viewing option</h4>;
        }
    }

	handleRefreshAllObservations() {
		Meteor.call("DisplayData.observations", {});
	}

	handleRefreshSummaryObservations() {
		Meteor.call("SummaryData.create", {});
	}

	render() {
		return <div>
			<Row>
				<Col xs= {3}>
					<Button block bsStyle="success" onClick={this.handleRefreshAllObservations.bind(this)}>
						Refresh all observations
					</Button>
				</Col>

				<Col xs= {3}>
					<Button block bsStyle="success" onClick={this.handleRefreshSummaryObservations.bind(this)}>Refresh summary observations</Button>
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
		      <TempObservationsSummary  { ...this.props } />
		    </Col>
		  </Row>
	  </div>
	}  
}

TempObservationsPage.propTypes = {
  setCurrentPage: React.PropTypes.func,
};