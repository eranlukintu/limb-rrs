import React from "react";
import { Row, Col, Button, Nav, NavDropdown, MenuItem } from 'react-bootstrap';
import TempObservationsComponent from '../../components/temp-components/tempObservationsComponent.js';
import TempObservationsSummary from '../../components/temp-components/tempObservationsSummary.js';
import TempObservationsList from '../../components/temp-components/tempObservationsList.js';
import TempAttractivenessList from '../../components/temp-components/tempAttractivenessList.js';
import TempAlignmentList from '../../components/temp-components/tempAlignmentList.js';
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

    handleViewAttractivenessList() {
    	this.setState({viewCase: 3});
    }

    handleViewAlignmentList() {
        this.setState({viewCase: 4});
    }

    handleDropdownSelect(eventKey) {
    	switch(eventKey) {
    		case "1": return this.handleSelectSummary(); break;
    		case "2": return this.handleSelectViewList(); break;
    		case "3": return this.handleRefreshAllObservations(); break;
    		case "4": return this.handleRefreshSummaryObservations(); break;
    		case "5": return this.handleRefreshAttractivenessObservations(); break;
    		case "6": return this.handleViewAttractivenessList(); break;
            case "7": return this.handleViewAlignmentList(); break;
            case "8": return this.handleRefreshAlignmentObservations(); break;
    		default: return console.log(eventKey);
    	}
    }

    displayObservations() {
        // console.log(obList);
        let viewCase = this.state.viewCase;

        switch(viewCase) {
            case 1: return <TempObservationsList { ...this.props } />;
            break;

            case 2: return <TempObservationsSummary { ...this.props } />;
            break;

            case 3: return <TempAttractivenessList { ...this.props } />;

            case 4: return <TempAlignmentList { ...this.props } />;

            default: return <h4>Please select viewing option</h4>;
        }
    }

	handleRefreshAllObservations() {
		Meteor.call("DisplayData.observations", {});
	}

	handleRefreshSummaryObservations() {
        console.log("Calling create combined summary");
		Meteor.call("createCombinedSummary", {});
	}

	handleRefreshAttractivenessObservations() {
		Meteor.call("refreshAttractivenessData", {});
	}

    handleRefreshAlignmentObservations() {
        Meteor.call("refreshAlignmentData", {});
    }

	render() {
		return <div>
			<Row>
				<Col >
					<Nav bsStyle="pills" pullRight>
						<NavDropdown eventKey="1" title="Actions" id="nav-dropdown" onSelect={this.handleDropdownSelect.bind(this)}>
							<MenuItem eventKey="1">View summary</MenuItem>
							<MenuItem eventKey="2">View all</MenuItem>
							<MenuItem eventKey="6">View attractiveness list</MenuItem>
                            <MenuItem eventKey="7">View alignment list</MenuItem>
							<MenuItem divider></MenuItem>
							<MenuItem eventKey="3">Refresh all</MenuItem>
							<MenuItem eventKey="4">Refresh summary</MenuItem>
							<MenuItem eventKey="5">Refresh attractiveness list</MenuItem>
                            <MenuItem eventKey="8">Refresh alignment list</MenuItem>
						</NavDropdown>
					</Nav>
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