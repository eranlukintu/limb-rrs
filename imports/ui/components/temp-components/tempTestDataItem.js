import React from "react";
import { Random } from 'meteor/random';
import { HorizontalBarComponent } from "../supplementary-components/horizontal-bar-component/horizontalBarComponent.js";
import { ListGroup, ListGroupItem, Alert, Button } from 'react-bootstrap';

export class TempTestDataItem extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			divStyle: "null",
		};
	}

	insertHorizontalBars() {
		let hbArray = [];
		
		let indentLevel = this.props.indentLevel;
		for(let i=0; i<indentLevel; i++) {
			// let d = new Date();
			// let key = d.getTime();
			hbArray.push(<span><HorizontalBarComponent key={i}/></span>);
		}
		return hbArray;
	}

	handleSelect(tdi) {
		// console.log(this.props);
		this.props.setControllingElement(tdi);
	}


	render() {
		const testDataItem = this.props.testDataItem;
		// console.log(this.props);
		return <ListGroupItem onClick={this.handleSelect.bind(this, testDataItem)} >
			{this.insertHorizontalBars()} {testDataItem.staticDotString} {testDataItem.name} {testDataItem.itemType}
		</ListGroupItem>
	}
}