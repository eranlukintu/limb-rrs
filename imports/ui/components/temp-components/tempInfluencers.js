import React from "react";
import { Random } from 'meteor/random';
import { HorizontalBarComponent } from "../supplementary-components/horizontal-bar-component/horizontalBarComponent.js";
import { Table, thead, tbody, tr, td, th, Row, Col, Panel } from 'react-bootstrap';

export class TempInfluencers extends React.Component {

	render() {

		const influencer = this.props.influencer

		return <tr>
			<td>{influencer}</td>
		</tr>
	}
}