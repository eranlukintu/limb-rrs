import React from "react";
import { ListGroup, ListGroupItem, Alert, Button, Table, thead, tbody, tr, td, th } from 'react-bootstrap';
import { Meteor } from 'meteor/meteor';
// import { TempTestDataItem } from "./tempTestDataItem.js";
import { TempTestObservationItem } from "./tempTestObservationItem.js";
// import { deleteTestDataItem } from "../../../api/temp-data/temp-methods/tempMethods.js";
// import { calculateIndentLevel } from "../../functions/dot-string-functions/dotStringFunctions.js";
import { OBSERVATIONDATA } from "../../../api/temp-data/temp-collections/tempCollections.js";
import Loading from '../../components/Loading.js';
import { composeWithTracker } from 'react-komposer';

class TempObservationsList extends React.Component{   

  render() { 	

    const observationsList = this.props.observationsList;
    // console.log(this.props);
    // console.log(observationsList);
    
    return 	<div>
        
        <Table>
            <thead>
                <tr>
                    <th>Category</th>
                    <th>Label</th>
                    <th>Value</th>
                </tr>
            </thead>
            <tbody>
                {observationsList.map((obItem) => ( 
                // console.log(index);       	
                    <TempTestObservationItem 
                        observationItem = {obItem} 
                        key={obItem._id} 
                    />
                ))}
            </tbody>
        </Table>
    </div>
  }
}

const composer = (params, onData) => {
  const subscription = Meteor.subscribe('DisplayData.observations');

  if (subscription.ready()) {
    const observationsList = OBSERVATIONDATA.find().fetch();
    onData(null, { observationsList });
  }
};

export default composeWithTracker(composer, Loading)(TempObservationsList);