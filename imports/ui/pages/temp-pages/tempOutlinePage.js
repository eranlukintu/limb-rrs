import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import TempOutlineComponent from '../../containers/tempContainers/tempOutlineContainer.js';

export class TempOutlinePage extends React.Component  {
	render() {

		return <Row>
	    <Col xs={ 12 }>
	      <div className="page-header clearfix">
	        <h4 className="pull-left">Outline</h4>        
	      </div>
	      <TempOutlineComponent  { ...this.props } />
	    </Col>
	  </Row>
	}  
}

TempOutlinePage.propTypes = {
  setCurrentPage: React.PropTypes.func,
};