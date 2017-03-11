import React from "react";

export class TempDSI extends React.Component {
	render() {

		const dataStructureItem = this.props.dataStructureItem;

		return <div>
			{dataStructureItem.name}
		</div>
	}
}