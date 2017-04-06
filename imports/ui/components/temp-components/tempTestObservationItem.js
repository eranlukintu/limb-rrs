import React from "react";
import { Random } from 'meteor/random';
import { HorizontalBarComponent } from "../supplementary-components/horizontal-bar-component/horizontalBarComponent.js";
import { ListGroup, ListGroupItem, Alert, Button } from 'react-bootstrap';

export class TempTestObservationItem extends React.Component {

	handleSelect(tdi) {
		// console.log(this.props);
		this.props.setControllingElement(tdi);
	}


	render() {
		const testDataItem = this.props.testDataItem;
		// console.log(this.props);
		return <ListGroupItem onClick={this.handleSelect.bind(this, testDataItem)} >
			{testDataItem.name} {testDataItem.itemType}
		</ListGroupItem>
	}
}