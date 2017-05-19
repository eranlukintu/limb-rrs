import React from "react";
import { ListGroup, ListGroupItem, Alert, Button, Table, thead, tbody, tr, td, th, Well } from 'react-bootstrap';
import "../../../../client/stylesheets/main.css";

export class TempCombinedSummaryComponent extends React.Component  {
	
	render() {

		const item = this.props.testSummaryItem;

		return <div>
			<Table bordered striped responsive>
				<thead>
					<th>{item._id}</th>
					<th>Percentage</th>
				</thead>
				<tbody>
					<tr>
						<td>Low</td>
						<td>{(item.lowImpactPercentage).toFixed(1) + "%"}</td>
					</tr>
						<td>Medium</td>
						<td>{(item.mediumImpactPercentage).toFixed(1) + "%"}</td>
					<tr>
						<td>High</td>
						<td>{(item.highImpactPercentage).toFixed(1) + "%"}</td>
					</tr>
				</tbody>
			</Table>
			<h3></h3>
		</div>
	}
}