import React from 'react';
import {MenuItem} from 'react-bootstrap';

export class GoToMenuCentral extends React.Component {
	constructor(props) {
		super(props);

		this.handleSelect = this.handleSelect.bind(this);
	}

	handleSelect(eventKey) {
		
		// console.log(eventKey);
		const setCurrentPage = this.props.setCurrentPage;
		setCurrentPage("", {page: eventKey, props: this.props});
	}

	render() {
		console.log(this.props);

		return <MenuItem eventKey="menuCentral" onSelect={this.handleSelect}>
			Go to menu central
		</MenuItem>
	}
}