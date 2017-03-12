import React from "react";
import TreeView from 'treeview-react-bootstrap';

export class TempTreePage extends React.Component {
	render() {
		const data = this.props.treeData;

		return <div>
			<h3>Tree view</h3>
			<TreeView data={data} />
		</div>
	}
}