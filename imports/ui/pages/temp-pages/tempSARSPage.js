import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import TempSARSList from '../../containers/tempContainers/tempSARSContainer.js';
import PropTypes from 'prop-types';

export const TempSARSListPage = props => (
  <Row>
    <Col xs={ 12 }>
      <div className="page-header clearfix">
        <h4 className="pull-left">SARS</h4>        
      </div>
      <TempSARSList  { ...props } />
    </Col>
  </Row>
);

TempSARSListPage.propTypes = {
  setCurrentPage: React.PropTypes.func,
};
