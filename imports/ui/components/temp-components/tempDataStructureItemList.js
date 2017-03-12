import React from "react";
import { ListGroup, ListGroupItem, Alert } from 'react-bootstrap';
import { TempDSI } from "./tempDSI.js";
import { createHierarchyArray } from "../../functions/createHierarchyArray.js";

export default class TempDataStructureItemsList extends React.Component{
  render() { 	

    const dsiList = this.props.dsiList;
    
    return 	<div>
        <h3>Temp data structure item list</h3>
        {dsiList.map((dsi, index) => (
            <TempDSI dataStructureItem = {dsi} key={index} />
        ))}
    </div>
  }
}