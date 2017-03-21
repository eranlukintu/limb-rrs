import React from "react";

export class TempTestDataItem extends React.Component {
	render() {

		const testDataItem = this.props.testDataItem;

		return <div>
			{testDataItem.itemId} {testDataItem.name} {testDataItem.itemType}
		</div>
	}
}