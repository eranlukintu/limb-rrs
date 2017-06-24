import React from "react";
import { ListGroup, ListGroupItem} from 'react-bootstrap';
import { HorizontalBarsComponent } from '../../outline-components/horizontalBarsComponent.js';
import { CheckBoxUnselected } from '../../outline-components/checkBoxUnselected.js';
import { CheckBoxSelected } from '../../outline-components/checkBoxSelected.js';

export const GeneralDataRow = function(props) {

	// console.log(props);

	const generalDataRow = props.generalDataRow;
	console.log(generalDataRow);
	const indentLevel = props.calculateIndentLevel(generalDataRow.dynamicDstring);
	const spacer = "  ";

	handleOnSelect = function(event) {
		console.log(generalDataRow.sourceRowId, props.controllingStaticDrowId);

	}

	renderCheckBox = function() {
		if(generalDataRow.sourceRowId === props.controllingStaticDrowId) {
			return <CheckBoxSelected />
		} else {
			return <CheckBoxUnselected />
		}
	}

	return <ListGroupItem onClick={handleOnSelect.bind(this)}>
		{renderCheckBox()}
		{spacer}
		<HorizontalBarsComponent indentLevel={indentLevel}/> 
		{generalDataRow.dynamicDstring}
		{spacer}
		{generalDataRow.pLabel}
		{spacer}
		({generalDataRow.elementType})
		
	</ListGroupItem>
}