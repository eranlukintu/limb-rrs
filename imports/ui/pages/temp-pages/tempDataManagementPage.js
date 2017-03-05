import React from "react";
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

	createRelationships(stakeholders, CSTAR, CRN, CRNS) {
		const STARs = this.createStakeholderToActivityRelationships(stakeholders, CSTAR, CRN, CRNS);
		console.log(STARs);
	}

	createStakeholderToActivityRelationships(stakeholders, CSTAR, CRN, CRNS) {
		let stakeholderToActivityRelationships = [];
		stakeholders.forEach(function(stakeholder) {
			let randomNumbers = CRNS(4, 30, CRN);
			randomNumbers.forEach(function(rn) {
				let STAR = CSTAR(stakeholder, rn);
				stakeholderToActivityRelationships.push(STAR);
			});

		});
		return stakeholderToActivityRelationships;
	}

	createStakeholderToActivityRelationship(stakeholder, num) {
		let STAR = {};
		STAR.STARid=Random.id;
		STAR.stakeholder = stakeholder;
		STAR.parent = stakeholder;
		STAR.activity = "activity-" + num;

		return STAR;
	}


	render() {

		const stakeholders = [
			"stakeholder-1",
			"stakeholder-2",
			"stakeholder-3",
			"stakeholder-4",
			"stakeholder-5",
		]

		const CSTAR = this.createStakeholderToActivityRelationship;
		const CRN = this.createRandomNumber;
		const CRNS= this.createRandomNumbers;
		
		return <div>
			<h3>Temp data Management</h3>
			<Button onClick={this.createRelationships.bind(this,stakeholders, CSTAR, CRN, CRNS)}>Create STARs</Button>
			<Button >Save SARs</Button>
		</div>
	}
}