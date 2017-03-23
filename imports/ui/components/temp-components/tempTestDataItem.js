import React from "react";

export class TempTestDataItem extends React.Component {
	render() {

		const testDataItem = this.props.testDataItem;

		return <div>
			{testDataItem.staticDotString} {testDataItem.name} {testDataItem.itemType}
		</div>
	}
}