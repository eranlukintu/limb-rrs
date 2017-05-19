import React from "react";
import { ListGroup, ListGroupItem, Alert, Button, ButtonToolbar, Table, thead, tbody, tr, td, th, Row, Col, Panel, Well } from 'react-bootstrap';
import { composeWithTracker } from 'react-komposer';
import { Meteor } from 'meteor/meteor';
import { SUMMARYDATA } from "../../../api/temp-data/temp-collections/tempCollections.js";
import { COMBINEDSUMMARYDATA } from "../../../api/temp-data/temp-collections/tempCollections.js";
import Loading from '../../components/Loading.js';
import { TempObservationSummaryItem } from "./tempObservationSummaryItem.js"; 
import { TempCombinedSummaryComponent } from "./tempCombinedSummaryComponent.js";

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

		console.log(this.props.combinedSummaryList);

		return <div>
			<Well><h3>Combined summary</h3></Well>
			{this.props.combinedSummaryList.map((obSumItem) => (
				<TempCombinedSummaryComponent
					key = {obSumItem._id}
					testSummaryItem = {obSumItem}
				 />
			))}			
		</div>
	}
}

const composer = (params, onData) => {
  const subscription = Meteor.subscribe('populateCombinedSummary');

  if (subscription.ready()) {
    const combinedSummaryList = COMBINEDSUMMARYDATA.find({}).fetch();
    onData(null, { combinedSummaryList });
  }
};

export default composeWithTracker(composer, Loading)(TempObservationsSummary);