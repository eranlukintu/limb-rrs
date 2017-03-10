import React from "react";
import Meteor from "meteor/meteor";
import { insertSAR } from "../../../api/temp-data/temp-methods/tempMethods.js";
import { createStakeholderFLI_s } from "../../functions/temp-functions/fli-functions/fliFunctions.js";
import { createSLI_s } from "../../functions/temp-functions/fli-functions/fliFunctions.js";
import { createSetOfUniqueRandomNumbers } from "../../functions/random-number-functions/randomNumberFunctions.js";
import { createStructureItems } from "../../functions/temp-functions/structure-item-functions/structureItemFunctions";
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

	createRelationships(actors, CSAR, CRN, CRNS) {
		const SARs = this.createStakeholderToActivityRelationships(actors, CSAR, CRN, CRNS);
		console.log(SARs);
	}

	createStakeholderToActivityRelationships(actors, CSAR, CRN, CRNS) {
		let actorToActivityRelationships = [];
		actors.forEach(function(actor) {
			let randomNumbers = CRNS(4, 30, CRN);
			randomNumbers.forEach(function(rn) {
				let SAR = CSAR(actor, rn);
				actorToActivityRelationships.push(SAR);
			});

		});
		return actorToActivityRelationships;
	}

	createStakeholderToActivityRelationship(actor, num) {
		let SAR = {};
		SAR.actor = actor;
		SAR.parent = actor;
		SAR.activity = "activity-" + num;

		return SAR;
	}

	createFirstLevelItem() {
		let FLI = {};

		FLI.fliId = (Random.id).toString();
		FLI.primaryLabel = primaryLabel;
		FLI.parentId
	}

	saveSARS(actors, CSAR, CRN, CRNS) {
		let SARS = this.createStakeholderToActivityRelationships(actors, CSAR, CRN, CRNS);
		SARS.forEach(function(SAR) {
			insertSAR.call(SAR);
		});
		console.log("Save completed");
	}

	saveStructureItems(actors) {
		let structureItems = createStructureItems(actors);
		console.log(structureItems);
	}

	showTopLevelFLI_s(actors) {
		createStructureItems(actors);
	}


	render() {

		const actors = [
			"actor-1",
			"actor-2",
			"actor-3",
			"actor-4",
			"actor-5",
		]

		const CSAR = this.createStakeholderToActivityRelationship;
		const CRN = this.createRandomNumber;
		const CRNS= this.createRandomNumbers;
		const setCurrentPage = this.props.setCurrentPage;
		
		return <div>
			<h3>Temp data Management</h3>
			<Button onClick={this.createRelationships.bind(this,actors, CSAR, CRN, CRNS)}>Create SARs</Button>
			<Button onClick={this.saveSARS.bind(this,actors, CSAR, CRN, CRNS)}>Save SARs</Button>
			<Button onClick={this.saveStructureItems.bind(this,actors)}>Save structure items</Button>
			<Button onClick={(event) => { setCurrentPage(event, { page: 'viewSARS' }); }}>View SARs</Button>
			<Button onClick = {this.showTopLevelFLI_s.bind(this, actors)}>Create TLFI_s</Button>
		</div>
	}
}