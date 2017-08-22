import React from 'react';
import { ListGroup, ListGroupItem, Grid, Row, Col, Alert, Button, ButtonGroup,  FormGroup, FormControl, ControlLabel} from 'react-bootstrap';
import MenuStateCombinationsPage from './menuStateCombinationsPage.js';
import MenuDataRowsPage from '../menuDataRowsPage.js';
import MenuDataRowsComponent from '../../components/advanced-menu-system/menuDataRowsComponent.js';
import MenuAssociationsComponent from '../../components/advanced-menu-system/menuAssociationsComponent';

export default class MenuAssociationsPage extends React.Component {
	constructor(props) {
		super();
	}

	handleButtonClick() {
		this.props.setCurrentPage("", {page:"menuCentral", props: this.props});
	}

	render() {
		const props = this.props;
		// console.log(props);
		return <Grid>
			<Row>
				<span>
					<h3>Menu associations </h3>				
					<Button onClick={this.handleButtonClick.bind(this)}>Menu central</Button>
				</span>
			</Row>
			<Row>
				<Col md={4}>
					<MenuStateCombinationsPage props = {props} />
				</Col>
				<Col md={4}>
					<MenuAssociationsComponent props = {props} />
				</Col>
				<Col md={4}>
					<MenuDataRowsComponent props = {props}/>
				</Col>
			</Row>
		</Grid>
	}
}