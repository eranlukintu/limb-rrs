import React from "react";
import Meteor from "meteor/meteor";
import { insertSAR } from "../../../api/temp-data/temp-methods/tempMethods.js";
import { insertStructureItem } from "../../../api/temp-data/temp-methods/tempMethods.js";
import { createStakeholderFLI_s } from "../../functions/temp-functions/fli-functions/fliFunctions.js";
import { createSLI_s } from "../../functions/temp-functions/fli-functions/fliFunctions.js";
import { createSetOfUniqueRandomNumbers } from "../../functions/random-number-functions/randomNumberFunctions.js";
import { createStructureItems } from "../../functions/temp-functions/structure-item-functions/structureItemFunctions";
import { createRootItem } from "../../functions/temp-functions/structure-item-functions/test-data-functions/testDataFunctions";
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
import { createReferenceActivitiesOfActors } from "../../functions/temp-functions/structure-item-functions/assignment-functions/activitiesOfActorsFunctions.js";
import { createReferenceValuesOfActivities } from "../../functions/temp-functions/structure-item-functions/assignment-functions/valuesOfActivitiesFunctions.js";
import { createReferenceInfluencersOfValues } from "../../functions/temp-functions/structure-item-functions/assignment-functions/influencerOfValuesFunctions.js";
import { createTestActorItems } from "../../functions/temp-functions/structure-item-functions/test-data-functions/testDataFunctions.js";
import { createTestActorsWithActivities } from "../../functions/temp-functions/structure-item-functions/test-data-functions/testDataFunctions.js";
import { createTestActorsWithActivityValues } from "../../functions/temp-functions/structure-item-functions/test-data-functions/testDataFunctions.js";
import { createTestActorsWithValueInfluencers } from "../../functions/temp-functions/structure-item-functions/test-data-functions/testDataFunctions.js";
import { insertTestDataItem } from "../../../api/temp-data/temp-methods/tempMethods.js";

export class TempDataManagementPage extends React.Component {

	constructor(props) {
	    super(props);
	    this.state = { 
	    	referenceActors: [],
	    	referenceActivities: [],
	    	referenceValues: [],
	    	referenceActivitiesOfActors: [],
	    	referenceValuesOfActivities: [],
	    	referenceInfluencersOfValues: [],
	    	rootItem: {},
	    	testActors: [],
	    	testActorsWithActivities: [],
	    	testActorsWithActivityValues: [],
	    	testActorsWithValueInfluencers: [],
	    	treeData: [],	    	
	    	actorArray: [],
	    	referenceActivitiesArray: [],
	    	referenceValuesArray: [],
	    	referenceActivitiesValuesArray: [],
	    	activitiesArray: [],
	    	valuesArray: [], 
	    };
	  }
	
	setReferenceActors() {
		let referenceActors = createReferenceActors(10);
		this.setState({referenceActors: referenceActors})
	}

	setReferenceActivities() {
		let referenceActivities = createReferenceActivities(50);
		this.setState({referenceActivities: referenceActivities});
	}

	setReferenceValues() {
		let referenceValues = createReferenceValues(70);
		this.setState({referenceValues: referenceValues});
	}

	setReferenceActivitiesOfActors() {
		let referenceActivitiesOfActors = createReferenceActivitiesOfActors(this.state.referenceActors, this.state.referenceActivities);
		this.setState({referenceActivitiesOfActors: referenceActivitiesOfActors});
	}

	setReferenceValuesOfActivities() {
		let referenceValuesOfActivities = createReferenceValuesOfActivities(this.state.referenceActivities, this.state.referenceValues);
		// console.log(referenceValuesOfActivities);
		this.setState({referenceValuesOfActivities: referenceValuesOfActivities});
	}

	setReferenceInfluencersOfValues() {
		let referenceInfluencersOfValues = createReferenceInfluencersOfValues(
				this.state.referenceValues, 
				this.state.referenceActivities, 
				this.state.referenceValuesOfActivities);
		this.setState({referenceInfluencersOfValues: referenceInfluencersOfValues});
	}

	setRootItem() {
		let rootItem = createRootItem();
		this.setState({rootItem: rootItem});
	}

	addTestActors(rootItem, referenceActors) {
		let testActors = createTestActorItems(rootItem, referenceActors);
		this.setState({testActors: testActors});
	}

	addActivitiesToTestActors(testActors, referenceActors, referenceActivitiesOfActors, referenceActivities) {
		let testActorsWithActivities = createTestActorsWithActivities(testActors, referenceActors, referenceActivitiesOfActors, referenceActivities);
		this.setState({testActorsWithActivities: testActorsWithActivities});
		let HA = createHierarchyArray(testActorsWithActivities, "null");
		this.setState({treeData: HA});
	}

	addValuesToTestActivities(testActorsWithActivities, referenceActivities, referenceValues, referenceValuesOfActivities) {
		// console.log(referenceValuesOfActivities);
		let testActorsWithActivityValues = createTestActorsWithActivityValues(testActorsWithActivities, referenceActivities, referenceValues, referenceValuesOfActivities);
		// console.log(testActorsWithActivityValues);
		this.setState({testActorsWithActivityValues: testActorsWithActivityValues});
		let HA = createHierarchyArray(testActorsWithActivityValues, "null");
		this.setState({treeData: HA});
	}

	addInfluencersToTestValues(testActorsWithActivityValues, referenceValues, referenceValuesOfActivities, referenceInfluencersOfValues) {
		let testActorsWithValueInfluencers = createTestActorsWithValueInfluencers(
					testActorsWithActivityValues, 
					referenceValues, 
					referenceValuesOfActivities,
					referenceInfluencersOfValues);
		this.setState({testActorsWithValueInfluencers: testActorsWithValueInfluencers})
		let HA = createHierarchyArray(testActorsWithValueInfluencers, "null");
		this.setState({treeData: HA});
	}

	saveTestData() {
		let testData = this.state.testActorsWithActivities;
		// console.log(testData);
		testData.forEach(function(TDI) {
			console.log(TDI);
			insertTestDataItem.call(TDI);
			// console.log("item saved");
		});
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

		const panelStyle = {
			displayFlex: "flex"
		};

		const CSAR = this.createStakeholderToActivityRelationship;
		const CRN = this.createRandomNumber;
		const CRNS= this.createRandomNumbers;
		const setCurrentPage = this.props.setCurrentPage;
		
		return <div>
			<h3>Test data Management</h3>
						
			<Panel bsStyle="primary">
				<Row >
					<Col xs={4}>
						<Panel header="Reference actions" bsStyle="primary" style={panelStyle}>
							<Button block onClick={this.setReferenceActors.bind(this)}>Create reference actors</Button>
							<Button block onClick={this.setReferenceActivities.bind(this)}>Create reference activities</Button>
							<Button block onClick={this.setReferenceValues.bind(this)}>Create reference values</Button>
							<Button block onClick={this.setReferenceActivitiesOfActors.bind(this)}>Create reference activities of actors</Button>
							<Button block onClick={this.setReferenceValuesOfActivities.bind(this)}>Create reference values of activities</Button>
							<Button block onClick={this.setReferenceInfluencersOfValues.bind(this)}>Create reference influencers of values</Button>
						</Panel>
					</Col>
					<Col xs={4}>
						<Panel header="Test data actions" bsStyle="primary" style={panelStyle}>
							<Button block onClick={this.setRootItem.bind(this)}>Create root item</Button>
							<Button block onClick={this.addTestActors.bind(this, this.state.rootItem, this.state.referenceActors)}>Add test actors</Button>
							<Button block 
								onClick={this.addActivitiesToTestActors.bind(
										this, 
										this.state.testActors, 
										this.state.referenceActors,
										this.state.referenceActivitiesOfActors,
										this.state.referenceActivities
									)}>
								Add activities to test actors
							</Button>
							<Button block 
								onClick={this.addValuesToTestActivities.bind(
										this, 
										this.state.testActorsWithActivities, 
										this.state.referenceActivities,
										this.state.referenceValues,
										this.state.referenceValuesOfActivities
									)}>
								Add values to test activities
							</Button>
							<Button block 
								onClick={this.addInfluencersToTestValues.bind(
										this, 
										this.state.testActorsWithActivityValues,
										this.state.referenceValues,
										this.state.referenceValuesOfActivities,
										this.state.referenceInfluencersOfValues,
									)}>
								Add influencers to test values
							</Button>
							<Button bsStyle="danger" block onClick={this.saveTestData.bind(this)}>Save test data</Button>
						</Panel>
					</Col>
					<Col xs={4}>
						<Panel header="Viewing actions" bsStyle="primary" style={panelStyle}>
							<Button block onClick={(event) => { setCurrentPage(event, { page: 'viewTree', props: this.state}); }}>View Tree</Button>
							<Button block onClick={(event) => { setCurrentPage(event, { page: 'viewRawTestData', props: this.state}); }}>View raw test data</Button>
						</Panel>
					</Col>					
				</Row>
			</Panel>
		</div>
	}
}