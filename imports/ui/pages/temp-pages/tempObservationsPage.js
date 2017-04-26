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
            viewCase: 2
        }
    }

    handleSelectViewList() {
        this.setState({viewCase: 1});
    }

    handleSelectSummary() {
        this.setState({viewCase: 2});
    }

    displayObservations() {
        // console.log(obList);
        let viewCase = this.state.viewCase;

        switch(viewCase) {
            case 1: return <TempObservationsList { ...this.props } />;
            break;

            case 2: return <TempObservationsSummary { ...this.props } />;
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
					<Button block block bsStyle="success" onClick={this.handleSelectSummary.bind(this)}>View summary</Button>
				</Col>

				<Col xs= {3}>
					<Button block block bsStyle="success" onClick={this.handleSelectViewList.bind(this)}>View list</Button>
				</Col>

				<Col xs= {3}>
					<Button block bsStyle="danger" onClick={this.handleRefreshAllObservations.bind(this)}>
						Refresh all observations
					</Button>
				</Col>

				<Col xs= {3}>
					<Button block bsStyle="danger" onClick={this.handleRefreshSummaryObservations.bind(this)}>Refresh summary observations</Button>
				</Col>
			</Row>

			<Row>
			    <Col xs={ 12 }>
			      {this.displayObservations()};
			    </Col>
		  </Row>
	  </div>
	}  
}

TempObservationsPage.propTypes = {
  setCurrentPage: React.PropTypes.func,
};