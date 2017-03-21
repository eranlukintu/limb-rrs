import React from 'react';
import SortableTree from 'react-sortable-tree';

export class TempSortableTreePage extends React.Component {
	render() {

		const originalTreeData = this.props.treeData;

		return <div>
			<SortableTree treeData = {treeData}/>
		</div>
	}
}