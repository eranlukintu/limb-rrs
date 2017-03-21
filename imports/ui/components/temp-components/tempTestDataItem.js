import React from "react";

export class TempTestDataItem extends React.Component {
	render() {

		const dataStructureItem = this.props.dataStructureItem;

		return <div>
			{dataStructureItem.name}
		</div>
	}
}