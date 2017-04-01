import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import TempOutlineComponent from '../../containers/tempContainers/tempOutlineContainer.js';

export class TempOutlinePage extends React.Component  {

	handleFocus(e) {
		console.log(this.props);
	}

	render() {

		return <Row>
	    <Col xs={ 12 }>
	      <div className="page-header clearfix">
	        <h4 className="pull-left">Outline</h4> 
	        <span>
	        	<Button bsStyle="success" onClick = {this.handleFocus.bind(this)}>Focus</Button>
	        </span>       
	      </div>
	      <TempOutlineComponent  { ...this.props } />
	    </Col>
	  </Row>
	}  
}

TempOutlinePage.propTypes = {
  setCurrentPage: React.PropTypes.func,
};