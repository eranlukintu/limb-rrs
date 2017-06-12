import React from "react";
import {Tabs, Tab, Navbar } from "react-bootstrap";
import { BusinessModelComponent } from "../components/modeling-components/businessModelComponent.js";
import RawModelComponent from "../components/modeling-components/raw-model/rawModelComponent.js";
import { setMenuName } from "../../functions/ui-functions/menu-functions/menuFunctions.js";

export class ModelingWorkPage extends React.Component {

	constructor() {
		super();
		this.state = {
			tabKey: 1
		}
	}

	handleSelect(tabKey) {
	    this.setState({tabKey});
	    let menuName=setMenuName(tabKey);
	    // this.props.setMenuName(menuName);
	    // console.log(this.props);
  }
	
	render() {

		return(
		      <Tabs activeKey={this.state.key} onSelect={this.handleSelect} id="modelingWorkPageTab">
		        <Tab eventKey={1} title="Business model">
		        	<BusinessModelComponent />
		        </Tab>
		        <Tab eventKey={2} title="Actors">Actors content

		        </Tab>
		        <Tab eventKey={3} title="Activities">Activities content

		        </Tab>
		        <Tab eventKey={4} title="Values">Values content

		        </Tab>
		        <Tab eventKey={5} title="Raw">
		        	<RawModelComponent coreProps={this.props} newMenuName="rawModelingMenu"/>
		        </Tab>
		      </Tabs>
	    );
	}
}