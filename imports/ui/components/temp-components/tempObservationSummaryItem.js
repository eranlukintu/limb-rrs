import React from "react";
import { HorizontalBarComponent } from "../supplementary-components/horizontal-bar-component/horizontalBarComponent.js";
import { ListGroup, ListGroupItem, Alert, Button, Table, thead, tbody, tr, td } from 'react-bootstrap';

export class TempObservationSummaryItem extends React.Component {

	render() {
		const testSummaryItem = this.props.testSummaryItem;
		// console.log(this.props);
		return <tr >
			<td>{testSummaryItem.itemCategory}</td>
			<td>{testSummaryItem.itemLabel}</td>
			<td>{testSummaryItem.itemValue}</td>			   
		</tr>
	}
}