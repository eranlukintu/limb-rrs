import React from "react";
import { ListGroup, ListGroupItem, Alert } from 'react-bootstrap';
import { TempSAR } from "./tempSAR.js";
import { createHierarchyArray } from "../../functions/createHierarchyArray.js";

export default class TempSARSList extends React.Component{
  render() {

    const sars = this.props.sarsList;
    const sarsH = createHierarchyArray(sars);
    console.log(sars);
    console.log(sarsH);

    return <div>
        <h3>Temp SARS list</h3>
        {sars.map((sar, index) => (
            <TempSAR stakeholder={sar.stakeholder} activity={sar.activity} key={index} />
        ))}
    </div>
  }
}

