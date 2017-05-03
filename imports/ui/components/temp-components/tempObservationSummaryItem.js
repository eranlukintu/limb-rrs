import React from "react";
import { HorizontalBarComponent } from "../supplementary-components/horizontal-bar-component/horizontalBarComponent.js";
import { ListGroup, ListGroupItem, Alert, Button, Table, thead, tbody, tr, td } from 'react-bootstrap';

export class TempObservationSummaryItem extends React.Component {

	render() {
		const testSummaryItem = this.props.testSummaryItem;
		// const percentage = (((testSummaryItem.itemValue/this.props.total)*100).toFixed(1)).toString() + "%";
		const percentage = "NA";
		// console.log(this.props);
		return <ListGroupItem>
			{testSummaryItem.primaryName}  
			{testSummaryItem.secondaryName}						   
		</ListGroupItem>
	}
}