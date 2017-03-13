import React from "react";
import Meteor from "meteor/meteor";
import { insertSAR } from "../../../api/temp-data/temp-methods/tempMethods.js";
import { insertStructureItem } from "../../../api/temp-data/temp-methods/tempMethods.js";
import { createStakeholderFLI_s } from "../../functions/temp-functions/fli-functions/fliFunctions.js";
import { createSLI_s } from "../../functions/temp-functions/fli-functions/fliFunctions.js";
import { createSetOfUniqueRandomNumbers } from "../../functions/random-number-functions/randomNumberFunctions.js";
import { createStructureItems } from "../../functions/temp-functions/structure-item-functions/structureItemFunctions";
import { createRootItem } from "../../functions/temp-functions/structure-item-functions/structureItemFunctions";
import { createActorDataItems } from "../../functions/temp-functions/structure-item-functions/structureItemFunctions";
import { createActivitiesForActors } from "../../functions/temp-functions/structure-item-functions/structureItemFunctions";
import { createReferenceActivityItems } from "../../functions/temp-functions/structure-item-functions/structureItemFunctions";
import { createReferenceValueItems } from "../../functions/temp-functions/structure-item-functions/structureItemFunctions";
import { createReferenceValuesForReferenceActivities } from "../../functions/temp-functions/structure-item-functions/structureItemFunctions";
import { createHierarchyArray } from "../../functions/createHierarchyArray";
import { Random } from 'meteor/random';
import { Button, Panel } from "react-bootstrap";

export class TempDataManagementPage extends React.Component {

	constructor(props) {
	    super(props);
	    this.state = { 
	    	treeData: [],
	    	rootItem: {},
	    	actorArray: [],
	    	referenceActivitiesArray: [],
	    	referenceValuesArray: [],
	    	activitiesArray: [],
	    	valuesArray: [], 
	    };
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
		let HA = createHierarchyArray(structureItems, "null");
		this.setState({treeData: HA});
		console.log(this.state.treeData);
	}

	createTree(arr) {
		let HA = createHierarchyArray(arr, "null");
		this.setState({treeData: HA});
		console.log("Tree data state set");
	}

	createReferenceActivities() {
		let referenceActivitiesArray = createReferenceActivityItems();
		this.setState({referenceActivitiesArray: referenceActivitiesArray});
	}

	createReferenceValues() {
		let referenceValuesArray = createReferenceValueItems();
		this.setState({referenceValuesArray: referenceValuesArray});
	}

	createReferenceActivitiesValues(referenceActivities, referenceValues) {
		let referenceActivitiesValuesArray = createReferenceValuesForReferenceActivities(referenceActivities, referenceValues);
		console.log(referenceActivitiesValuesArray);
	}

	createRoot() {
		let rootItem = createRootItem();
		console.log(rootItem);
		this.setState({rootItem: rootItem});
	}

	createActorsArray(rootItem, actors) {
		let actorsArray = createActorDataItems(rootItem, actors);
		console.log(actorsArray);
		this.setState({actorsArray: actorsArray});
		
	}

	createActivitiesArray(actorsStructureArray) {
		let activitiesArray = createActivitiesForActors(actorsStructureArray);
		this.setState({activitiesArray: activitiesArray});
		let HA = createHierarchyArray(activitiesArray, "null");
		this.setState({treeData: HA});
	}

	render() {

		const actors = [
			"actor-1",
			"actor-2",
			"actor-3",
			"actor-4",
			"actor-5",
		]

		const arrOriginal = [
		    {id: 1, text: 'hello', parent: 0},
		    {id: 2, text: 'hello', parent: 1},
		    {id: 3, text: 'hello', parent: 1},
		    {id: 4, text: 'hello', parent: 3},
		    {id: 5, text: 'hello', parent: 4},
		    {id: 6, text: 'hello', parent: 4},
		    {id: 7, text: 'hello', parent: 3},
		    {id: 8, text: 'hello', parent: 2}
		]

		const arr = [
		    {itemId: "A", text: 'hello', parentId: "null"},
		    {itemId: "B", text: 'hello', parentId: "A"},
		    {itemId: "C", text: 'hello', parentId: "A"},
		    {itemId: "D", text: 'hello', parentId: "C"},
		    {itemId: "E", text: 'hello', parentId: "D"},
		    {itemId: "F", text: 'hello', parentId: "D"},
		    {itemId: "G", text: 'hello', parentId: "C"},
		    {itemId: "H", text: 'hello', parentId: "B"}
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
			<Button onClick={(event) => { setCurrentPage(event, { page: 'viewStructureItems' }); }}>View Structure Items</Button>
			<Button onClick={this.createTree.bind(this,arr)}>Create tree</Button>
			<Button onClick={(event) => { setCurrentPage(event, { page: 'viewTree', props: this.state}); }}>View Tree</Button>
			<Panel header="Structure actions">
				<Button onClick={this.createReferenceActivities.bind(this)}>Create reference activities</Button>
				<Button onClick={this.createReferenceValues.bind(this)}>Create reference values</Button>
				<Button onClick={this.createReferenceActivitiesValues.bind(this, this.state.referenceActivitiesArray, this.state.referenceValuesArray)}>Create reference activities values</Button>
				<Button onClick={this.createRoot.bind(this)}>Create root</Button>
				<Button onClick={this.createActorsArray.bind(this, this.state.rootItem, actors)}>Create actor array</Button>
				<Button onClick={this.createActivitiesArray.bind(this, this.state.actorsArray)}>Create activities array</Button>
				<Button>Create values array</Button>
			</Panel>
		</div>
	}
}