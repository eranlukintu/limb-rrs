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
import { assignValuesToActivities } from "../../functions/temp-functions/structure-item-functions/structureItemFunctions";
import { createHierarchyArray } from "../../functions/createHierarchyArray";
import { Random } from 'meteor/random';
import { Button, Panel, Row, Col } from "react-bootstrap";
import { createReferenceActors } from "../../functions/temp-functions/structure-item-functions/actor-functions/actorFunctions.js";
import { createReferenceActivities } from "../../functions/temp-functions/structure-item-functions/activity-functions/activityFunctions.js";
import { createReferenceValues } from "../../functions/temp-functions/structure-item-functions/value-functions/valueFunctions.js";

export class TempDataManagementPage extends React.Component {

	constructor(props) {
	    super(props);
	    this.state = { 
	    	referenceActors: [],
	    	referenceActivities: [],
	    	referenceValues: [],
	    	treeData: [],
	    	rootItem: {},
	    	actorArray: [],
	    	referenceActivitiesArray: [],
	    	referenceValuesArray: [],
	    	referenceActivitiesValuesArray: [],
	    	activitiesArray: [],
	    	valuesArray: [], 
	    };
	  }
	
	setReferenceActors() {
		let referenceActors = createReferenceActors(5);
		this.setState({referenceActors: referenceActors})
	}

	setReferenceActivities() {
		let referenceActivities = createReferenceActivities(10);
		this.setState({referenceActivities: referenceActivities});
	}

	setReferenceValues() {
		let referenceValues = createReferenceValues(15);
		this.setState({referenceValues: referenceValues});
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
		console.log(referenceActivitiesArray);
	}

	createReferenceValues() {
		let referenceValuesArray = createReferenceValueItems();
		this.setState({referenceValuesArray: referenceValuesArray});
	}

	createReferenceActivitiesValues(referenceActivities, referenceValues) {
		let referenceActivitiesValuesArray = createReferenceValuesForReferenceActivities(referenceActivities, referenceValues);
		this.setState({referenceActivitiesValuesArray: referenceActivitiesValuesArray});
	}

	createRoot() {
		let rootItem = createRootItem();
		this.setState({rootItem: rootItem});
	}

	createActorsArray(rootItem, actors) {
		let actorsArray = createActorDataItems(rootItem, actors);
		console.log(actorsArray);
		this.setState({actorsArray: actorsArray});
		
	}

	createActivitiesArray(actorsStructureArray, referenceActivitiesArray) {
		let activitiesArray = createActivitiesForActors(actorsStructureArray, referenceActivitiesArray);
		this.setState({activitiesArray: activitiesArray});
		console.log(activitiesArray);
		
	}

	createValuesArray(activitiesArray, referenceActivitiesValuesArray) {
		let valuesArray = assignValuesToActivities(activitiesArray, referenceActivitiesValuesArray);
		console.log(valuesArray);
		let HA = createHierarchyArray(valuesArray, "null");
		this.setState({treeData: HA});
	}

	render() {		

		const CSAR = this.createStakeholderToActivityRelationship;
		const CRN = this.createRandomNumber;
		const CRNS= this.createRandomNumbers;
		const setCurrentPage = this.props.setCurrentPage;
		
		return <div>
			<h3>Test data Management</h3>
			<Button onClick={(event) => { setCurrentPage(event, { page: 'viewSARS' }); }}>View SARs</Button>
			<Button onClick={(event) => { setCurrentPage(event, { page: 'viewStructureItems' }); }}>View Structure Items</Button>
			<Button onClick={(event) => { setCurrentPage(event, { page: 'viewTree', props: this.state}); }}>View Tree</Button>
			<Panel header="Structure actions">				
				<Button onClick={this.createRoot.bind(this)}>Create root</Button>				
			</Panel>
			<Panel>
				<Row >
					<Col xs={4}>
						<Panel header="Reference actions">
							<Button onClick={this.setReferenceActors.bind(this)}>Create reference actors</Button>
							<Button onClick={this.setReferenceActivities.bind(this)}>Create reference activities</Button>
							<Button onClick={this.setReferenceValues.bind(this)}>Create reference values</Button>
						</Panel>
					</Col>
					<Col xs={4}>
						<Panel header="Structure items actions">
							<Button>Button</Button>
						</Panel>
					</Col>
					<Col xs={4}>
						<Panel>
							<Button>Button</Button>
						</Panel>
					</Col>					
				</Row>
			</Panel>
		</div>
	}
}