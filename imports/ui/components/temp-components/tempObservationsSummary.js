import React from "react";
import { ListGroup, ListGroupItem, Alert, Button, ButtonToolbar, Table, thead, tbody, tr, td, th, Row, Col, Panel } from 'react-bootstrap';
import { composeWithTracker } from 'react-komposer';
import { Meteor } from 'meteor/meteor';
import { SUMMARYDATA } from "../../../api/temp-data/temp-collections/tempCollections.js";
import Loading from '../../components/Loading.js';
import { TempObservationSummaryItem } from "./tempObservationSummaryItem.js";

class TempObservationsSummary extends React.Component {

	constructor(props) {
		super(props);
		this.state={availableHeight: 0, scrollTop: 0};
	}

	componentDidMount() {
	    this.setState({
	      availableHeight: 600
	    })
	  }

	handleScroll(event) {
		console.log(event);
	    // this.setState({
	    //   scrollTop: event.target.scrollTop
	    // })
	  }

	render() {

			return <div>
				{this.props.observationsSummaryList.map((obSumItem) => (
					<TempObservationSummaryItem
						key = {obSumItem._id}
						testSummaryItem = {obSumItem}
					 />
				))}			
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