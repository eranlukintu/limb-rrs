import React from "react";
import { ListGroup, ListGroupItem, Alert, Button, Row, Col, ButtonToolbar } from 'react-bootstrap';
import { TempTestDataItem } from "./tempTestDataItem.js";
import { TempTestObservationItem } from "./tempTestObservationItem.js";
import { deleteTestDataItem } from "../../../api/temp-data/temp-methods/tempMethods.js";
import { calculateIndentLevel } from "../../functions/dot-string-functions/dotStringFunctions.js";
import TempObservationsList from "./tempObservationsList.js";
import TempObservationsSummary from "./tempObservationsSummary.js";

export default class TempObservationsComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            viewCase: 0
        }
    }

    handleSelectViewList() {
        this.setState({viewCase: 1});
    }

    handleSelectSummary() {
        this.setState({viewCase: 2});
    }

    displayObservations(obList) {
        // console.log(obList);
        let viewCase = this.state.viewCase;

        switch(viewCase) {
            case 1: return <TempObservationsList  />;
            break;

            case 2: return <TempObservationsSummary />;
            break;

            default: return <h4>Please select viewing option</h4>;
        }
    }
   
  render() { 	

    const observationsList = this.props.observationsList;
      
    return <Row>
        <Col xs={ 12 }>
          <div className="page-header clearfix">
            <h4 className="pull-left">Observations</h4> 
            <span className="pull-right">
                <ButtonToolbar>
                    <Button bsStyle="success" onClick = {this.handleSelectViewList.bind(this)}>Observations list</Button>
                    <Button bsStyle="success" onClick = {this.handleSelectSummary.bind(this)}>Observations summary</Button>
                </ButtonToolbar>
            </span>        
          </div>
          {this.displayObservations(observationsList)}
        </Col>
      </Row>                

  }
}