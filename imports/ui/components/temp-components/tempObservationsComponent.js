import React from "react";
import { ListGroup, ListGroupItem, Alert, Button } from 'react-bootstrap';
import { TempTestDataItem } from "./tempTestDataItem.js";
import { TempTestObservationItem } from "./tempTestObservationItem.js";
import { deleteTestDataItem } from "../../../api/temp-data/temp-methods/tempMethods.js";
import { calculateIndentLevel } from "../../functions/dot-string-functions/dotStringFunctions.js";

export default class TempObservationsComponent extends React.Component{
   

  render() { 	

    const observationsList = this.props.observationsList;
    // console.log(this.props);
    // console.log(observationsList);
    
    return 	<div>
        
        <ListGroup>
            {observationsList.map((obItem, index) => ( 
            // console.log(index);       	
                <TempTestObservationItem 
                    observationItem = {obItem} 
                    key={obItem._id} 
                    setControllingElement = {this.props.setControllingElement}
                />
            ))}
        </ListGroup>
    </div>
  }
}