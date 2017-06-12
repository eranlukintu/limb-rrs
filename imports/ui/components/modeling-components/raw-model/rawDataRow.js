import React from "react";
import { ListGroup, ListGroupItem} from 'react-bootstrap';

export const RawDataRow = function(props) {

	const rawDataRow = props.rawDataRow;

	return <ListGroupItem >
		{rawDataRow.staticDstring} {rawDataRow.primaryLabel} {rawDataRow.secondaryLabel} {rawDataRow.tertiaryLabel}
	</ListGroupItem>
}