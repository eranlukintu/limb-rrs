import React from "react";
import { ListGroup, ListGroupItem, Alert } from 'react-bootstrap';
import { TempTestDataItem } from "./tempTestDataItem.js";

export default class TempTestDataList extends React.Component{
  render() { 	

    const testDataList = this.props.testDataList;
    // console.log(testDataList);
    
    return 	<div>
        <h3>Temp data structure item list</h3>
        {testDataList.map((tdi, index) => (
            <TempTestDataItem testDataItem = {tdi} key={index} />
        ))}
    </div>
  }
}