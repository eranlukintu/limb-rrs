import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import TempDataStructureItems from '../../containers/tempContainers/tempDataStructureItemContainer.js';

export const TempDataStructureItemsPage = props => (
  <Row>
    <Col xs={ 12 }>
      <div className="page-header clearfix">
        <h4 className="pull-left">SARS</h4>        
      </div>
      <TempDataStructureItems  { ...props } />
    </Col>
  </Row>
);

TempDataStructureItemsPage.propTypes = {
  setCurrentPage: React.PropTypes.func,
};