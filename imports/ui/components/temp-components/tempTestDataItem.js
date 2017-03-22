import React from "react";

export class TempTestDataItem extends React.Component {
	render() {

		const testDataItem = this.props.testDataItem;

		return <div>
			{testDataItem.dynamicDotString} {testDataItem.name} {testDataItem.itemType}
		</div>
	}
}