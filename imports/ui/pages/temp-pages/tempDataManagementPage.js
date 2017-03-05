import React from "react";
import { Random } from 'meteor/random';
import { Button } from "react-bootstrap";

export class TempDataManagementPage extends React.Component {

	createDataRow() {
		let row = {};
		row.rowId=Random.id;
		row.ownerName = "Not yet ready";
		row.creationDate = "Not yet ready";
		row.segmentName = "Not yet ready";
		row.parentName = "Not yet ready";
		row.favourability = "Not yet ready";
		row.importance = "Not yet ready";
		row.helpNote = "Not yet ready";
	}

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

	createRelationships(stakeholders, CTAA, CSTAR, CRN, CRNS) {
		const STARs = this.createStakeholderToActivityRelationships(stakeholders, CTAA, CSTAR, CRN, CRNS);
		console.log(STARs);
	}

	createStakeholderToActivityRelationships(stakeholders, CTAA, CSTAR, CRN, CRNS) {
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

	createTempActivityArray(count, activities) {
		// Make a copy of the array
		  var tmp = activities;
		  var ret = [];
		  
		  for (var i = 0; i < count; i++) {
		    var index = Math.floor(Math.random() * tmp.length);
		    let addedActivity = tmp[index];
		    ret.push(addedActivity);
		  }
		  return ret;  
	}

	createStakeholderToActivityRelationship(stakeholder, num) {
		let STAR = {};
		STAR.STARid=Random.id;
		STAR.stakeholder = stakeholder;
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

		const activities = [
			"activity-1",
			"activity-2",
			"activity-3",
			"activity-4",
			"activity-5",
			"activity-6",
			"activity-7",
			"activity-8",
			"activity-9",
		]

		const values = [
			"value-1",
			"value-2",
			"value-3",
			"value-4",
			"value-5",
			"value-6",
			"value-7",
			"value-8",
			"value-9",
			"value-10",
			"value-11",
			"value-12",
			"value-13",
			"value-14",
			"value-15",
			"value-16",
			"value-17",
		]

		const ownerNames = [
			"eran",
			"michael",
			"maurie",
			"john"
		]

		const creationDates = [
			[2016, 0, 1],
			[2016, 3, 1],
			[2016, 6, 1],
			[2016, 9, 1],
			[2016, 12, 1],
		]

		const favourabilityCategories = [
			"unmarked",
			"favourable",
			"neutral",
			"unfavourable"
		]

		const importanceCategories = [
			"unmarked",
			"important",
			"neutral",
			"unimportant"
		]

		const CTAA = this.createTempActivityArray;
		const CSTAR = this.createStakeholderToActivityRelationship;
		const CRN = this.createRandomNumber;
		const CRNS= this.createRandomNumbers;
		
		return <div>
			<h3>Temp data Management</h3>
			<Button onClick={this.createRelationships.bind(this,stakeholders, CTAA, CSTAR, CRN, CRNS)}>Create STARs</Button>
			<Button onClick={this.createRandomNumbers.bind(this,3,30, CRNS)}>Random numbers</Button>
		</div>
	}
}