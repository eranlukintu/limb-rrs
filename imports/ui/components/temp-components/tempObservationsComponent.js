import React from "react";
import { ListGroup, ListGroupItem, Alert, Button } from 'react-bootstrap';
import { TempTestDataItem } from "./tempTestDataItem.js";
import { TempTestObservationItem } from "./tempTestObservationItem.js";
import { deleteTestDataItem } from "../../../api/temp-data/temp-methods/tempMethods.js";
import { calculateIndentLevel } from "../../functions/dot-string-functions/dotStringFunctions.js";

export default class TempObservationsComponent extends React.Component{

    handleCalculateIndentLevel(testDataItem) {
        let dString = testDataItem.staticDotString;
        return calculateIndentLevel(dString); 
    }

  render() { 	

    const testDataList = this.props.testDataList;
    // console.log(this.props);
    console.log(testDataList);
    
    return 	<div>
        
        <ListGroup>
            {testDataList.map((tdi, index) => ( 
            // console.log(index);       	
                <TempTestObservationItem 
                    testDataItem = {tdi} 
                    key={tdi._id} 
                    setControllingElement = {this.props.setControllingElement}
                    indentLevel={this.handleCalculateIndentLevel(tdi)} 
                />
            ))}
        </ListGroup>
    </div>
  }
}