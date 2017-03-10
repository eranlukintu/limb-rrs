import React from "react";
import { ListGroup, ListGroupItem, Alert } from 'react-bootstrap';
import { TempDSI } from "./tempSAR.js";
import { createHierarchyArray } from "../../functions/createHierarchyArray.js";

export default class TempDataStructureItemsList extends React.Component{
  render() {

    const dsiList = this.props.dsiList;
    
    return <div>
        <h3>Temp data structure item list</h3>
        {dsiList.map((dsi, index) => (
            <TempSAR dataStructureItem = {dsi} key={index} />
        ))}
    </div>
  }
}