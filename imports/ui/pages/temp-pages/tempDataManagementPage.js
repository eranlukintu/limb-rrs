import React from "react";
import Meteor from "meteor/meteor";
import { insertSAR } from "../../../api/temp-data/temp-methods/tempMethods.js";
import { Random } from 'meteor/random';
import { Button } from "react-bootstrap";

export class TempDataManagementPage extends React.Component {

	createRandomNumber(setSize) {
		const randomNumber = Math.floor(Math.random() * setSize);
		return randomNumber;
	}

	createRandomNumbers(size, setSize, CRN) {
		let randomNumbers=[];

		for(var i=0; i<size+1; i++) {
			randomNumbers.push(-1);
		}

		const addUniqueNumberToArray = function() {
			let randomNumber=CRN(setSize);
			let check = randomNumbers.indexOf(randomNumber);
			if(check === -1) {
				return randomNumber + 1;
			} else {
				return addUniqueNumberToArray();
			}
		}

		randomNumbers.forEach(function(r, index) {
			const uniqueNumber = addUniqueNumberToArray();
			randomNumbers[index] = uniqueNumber;
		});
		return randomNumbers;
	}

	createRelationships(stakeholders, CSAR, CRN, CRNS) {
		const SARs = this.createStakeholderToActivityRelationships(stakeholders, CSAR, CRN, CRNS);
		console.log(SARs);
	}

	createStakeholderToActivityRelationships(stakeholders, CSAR, CRN, CRNS) {
		let stakeholderToActivityRelationships = [];
		stakeholders.forEach(function(stakeholder) {
			let randomNumbers = CRNS(4, 30, CRN);
			randomNumbers.forEach(function(rn) {
				let SAR = CSAR(stakeholder, rn);
				stakeholderToActivityRelationships.push(SAR);
			});

		});
		return stakeholderToActivityRelationships;
	}

	createStakeholderToActivityRelationship(stakeholder, num) {
		let SAR = {};
		SAR.stakeholder = stakeholder;
		SAR.parent = stakeholder;
		SAR.activity = "activity-" + num;

		return SAR;
	}

	saveSARS(stakeholders, CSAR, CRN, CRNS) {
		let SARS = this.createStakeholderToActivityRelationships(stakeholders, CSAR, CRN, CRNS);
		SARS.forEach(function(SAR) {
			insertSAR.call(SAR);
		});
		console.log("Save completed");
	}


	render() {

		const stakeholders = [
			"stakeholder-1",
			"stakeholder-2",
			"stakeholder-3",
			"stakeholder-4",
			"stakeholder-5",
		]

		const CSAR = this.createStakeholderToActivityRelationship;
		const CRN = this.createRandomNumber;
		const CRNS= this.createRandomNumbers;
		const setCurrentPage = this.props.setCurrentPage;
		
		return <div>
			<h3>Temp data Management</h3>
			<Button onClick={this.createRelationships.bind(this,stakeholders, CSAR, CRN, CRNS)}>Create SARs</Button>
			<Button onClick={this.saveSARS.bind(this,stakeholders, CSAR, CRN, CRNS)}>Save SARs</Button>
			<Button onClick={(event) => { setCurrentPage(event, { page: 'viewSARS' }); }}>View SARs</Button>
		</div>
	}
}