import React from 'react';
import {MenuItem} from 'react-bootstrap';

export class GoToBusinessModelingPage extends React.Component {
	constructor(props) {
		super();

		this.handleSelect = this.handleSelect.bind(this);
	}

	handleSelect(eventKey) {
		const setCurrentPage = this.props.setCurrentPage;
		setCurrentPage("", {page: eventKey, props: this.props});
	}

	render() {
		return <MenuItem eventKey="businessModelComponent" onClick={this.handleSelect}>
			Go to business modeling
		</MenuItem>
	}
}