import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import TempTestDataList from '../../containers/tempContainers/tempTestDataContainer.js';

export class TempTestDataPage extends React.Component  {
	render() {

		return <Row>
	    <Col xs={ 12 }>
	      <div className="page-header clearfix">
	        <h4 className="pull-left">Test data items</h4>        
	      </div>
	      <TempTestDataList  { ...this.props } />
	    </Col>
	  </Row>
	}  
}

TempTestDataPage.propTypes = {
  setCurrentPage: React.PropTypes.func,
};