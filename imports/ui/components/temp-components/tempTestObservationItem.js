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
		const observationItem = this.props.observationItem;
		// console.log(observationItem);
		// console.log(this.props);
		return <ListGroupItem onClick={this.handleSelect.bind(this, observationItem)} >
			{observationItem._id} {observationItem.subTotal}
		</ListGroupItem>
	}
}