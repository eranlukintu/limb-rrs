import React from "react";

export class TempSAR extends React.Component {
	render() {

		const stakeholder = this.props.stakeholder;
		const activity	= this.props.activity;

		return <div>
			{stakeholder} ----> {activity};
		</div>
	}
}