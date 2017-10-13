import React from 'react';
import {MenuItem} from 'react-bootstrap';

export class GenericMenuActionComponent extends React.Component {
	constructor(props) {
		super(props);

		this.handleSelect = this.handleSelect.bind(this);
	}

	handleSelect(eventKey) {
		
		// console.log(this.props);
		const setCurrentPage = this.props.setCurrentPage;
		setCurrentPage("", {page: eventKey, props: this.props});
	}

	render() {
		console.log(this.props);
		const currentPage = this.props.currentPage;
		// console.log(currentPage);

		return <MenuItem eventKey={currentPage} onSelect={this.handleSelect}>
			{currentPage}
		</MenuItem>
	}
}