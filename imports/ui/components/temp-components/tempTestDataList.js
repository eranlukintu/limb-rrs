import React from "react";
import { ListGroup, ListGroupItem, Alert } from 'react-bootstrap';
import { TempTestDataItem } from "./tempTestDataItem.js";

export default class TempTestDataList extends React.Component{
  render() { 	

    const dsiList = this.props.dsiList;
    // console.log(dsiList);
    
    return 	<div>
        <h3>Temp data structure item list</h3>
        {dsiList.map((dsi, index) => (
            <TempTestDataItem dataStructureItem = {dsi} key={index} />
        ))}
    </div>
  }
}