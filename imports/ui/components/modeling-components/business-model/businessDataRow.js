import React from "react";
import { ListGroup, ListGroupItem} from 'react-bootstrap';
import { HorizontalBarsComponent } from '../../outline-components/horizontalBarsComponent.js';
import { CheckBoxUnselected } from '../../outline-components/checkBoxUnselected.js';
import { CheckBoxSelected } from '../../outline-components/checkBoxSelected.js';

export const BusinessDataRow = function(props) {

	const businessDataRow = props.businessDataRow;
	const indentLevel = props.calculateIndentLevel(businessDataRow.staticDstring);
	const spacer = "  ";

	handleOnSelect = function(event) {
		// console.log(businessDataRow.sourceRowId, props.controllingStaticDrowId);
		// console.log(businessDataRow.elementType);
		props.setControllingStaticDrowId(businessDataRow.sourceRowId);
		props.setSelectedItemType(businessDataRow.elementType);
	}

	renderCheckBox = function() {
		if(businessDataRow.sourceRowId === props.controllingStaticDrowId) {
			return <CheckBoxSelected />
		} else {
			return <CheckBoxUnselected />
		}
	}

	return <ListGroupItem onClick={handleOnSelect.bind(this)}>
		{renderCheckBox()}
		{spacer}
		<HorizontalBarsComponent indentLevel={indentLevel}/> 
		{businessDataRow.dynamicDstring}
		{spacer}
		{businessDataRow.pLabel}
		{spacer}
		({businessDataRow.elementType})
		
	</ListGroupItem>
}