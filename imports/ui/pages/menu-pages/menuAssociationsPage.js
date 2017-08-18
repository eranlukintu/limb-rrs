import React from 'react';
import { ListGroup, ListGroupItem, Grid, Row, Col, Alert, Button, ButtonGroup,  FormGroup, FormControl, ControlLabel} from 'react-bootstrap';
import MenuStateCombinationsPage from './menuStateCombinationsPage.js';
import MenuDataRowsPage from '../menuDataRowsPage.js';
import MenuDataRowsComponent from '../../components/advanced-menu-system/menuDataRowsComponent.js';
// import {MenuControlRow} from '../../components/advanced-menu-components/menuControlRow.js';

export default class MenuAssociationsPage extends React.Component {

	render() {
		const props = this.props;
		console.log(props);
		return <Grid>
			<Row>
				<h3>Menu associations </h3>
			</Row>
			<Row>
				<Col md={4}>
					<MenuStateCombinationsPage props = {props} />
				</Col>
				<Col md={4}>
					
				</Col>
				<Col md={4}>
					<MenuDataRowsComponent props = {props}/>
				</Col>
			</Row>
		</Grid>
	}
}