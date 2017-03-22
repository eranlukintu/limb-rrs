import React from "react";
import { ListGroup, ListGroupItem, Alert, Button } from 'react-bootstrap';
import { TempTestDataItem } from "./tempTestDataItem.js";
import { deleteTestDataItem } from "../../../api/temp-data/temp-methods/tempMethods.js";

export default class TempTestDataList extends React.Component{

	handleDeleteAllTestData(testData) {
		testData.forEach(function(TDI) {
			deleteTestDataItem.call(TDI);
		});
		console.log("All deleted");
	}

  render() { 	
    const testDataList = this.props.testDataList;
    // console.log(testDataList);
    
    return 	<div>
        <h3>Temp data structure item list</h3>
        <Button bsStyle="danger" onClick={this.handleDeleteAllTestData.bind(this, testDataList)}>Delete all test data</Button>
        {testDataList.map((tdi, index) => (
            <TempTestDataItem testDataItem = {tdi} key={index} />
        ))}
    </div>
  }
}