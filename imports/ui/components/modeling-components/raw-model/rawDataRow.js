import React from "react";
import { ListGroup, ListGroupItem} from 'react-bootstrap';
import { HorizontalBarsComponent } from '../../outline-components/horizontalBarsComponent.js';

export const RawDataRow = function(props) {

	const rawDataRow = props.rawDataRow;
	const indentLevel = props.calculateIndentLevel(rawDataRow.staticDstring);
	const spacer = "  ";

	return <ListGroupItem >
		<HorizontalBarsComponent indentLevel={indentLevel}/> 
		{rawDataRow.staticDstring}
		{spacer}
		{rawDataRow.primaryLabel}
		{spacer}
		{rawDataRow.secondaryLabel}
		{spacer}
		{rawDataRow.tertiaryLabel}
	</ListGroupItem>
}