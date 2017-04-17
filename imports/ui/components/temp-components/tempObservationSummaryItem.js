import React from "react";
import { HorizontalBarComponent } from "../supplementary-components/horizontal-bar-component/horizontalBarComponent.js";
import { ListGroup, ListGroupItem, Alert, Button } from 'react-bootstrap';

export class TempObservationSummaryItem extends React.Component {

	insertHorizontalBars() {
		let hbArray = [];
		
		let indentLevel = this.props.indentLevel;
		for(let i=0; i<indentLevel; i++) {
			let d = new Date();
			let key = d.getTime();
			hbArray.push(<span><HorizontalBarComponent key={key}/></span>);
		}
		return hbArray;
	}

	render() {
		const testSummaryItem = this.props.testSummaryItem;
		// console.log(this.props);
		return <ListGroupItem >
			{this.insertHorizontalBars()} {testSummaryItem.itemLabel} {testSummaryItem.itemValue}
		</ListGroupItem>
	}
}