import React from 'react';
import { ListGroup, ListGroupItem, Grid, Row, Col, Alert, Button, ButtonGroup,  FormGroup, FormControl, ControlLabel} from 'react-bootstrap';
import { composeWithTracker } from 'react-komposer';
import { MENUDATAITEMS } from "../../api/collections/menuCollections.js";
import { MENUDATAROWS } from "../../api/collections/menuCollections.js";
import Loading from "../components/Loading.js";
import { RawDataRow } from "../components/modeling-components/raw-model/rawDataRow.js";
import { MenuDataRow } from "../components/advanced-menu-system/menuDataRow.js";

class MenuDataRowsPage extends React.Component {
	constructor(props) {
		super();

		this.state = {
			selectedMenuDataItem: {},
		}

		this.handleButtonClick = this.handleButtonClick.bind(this);
		this.renderMenuDataItems = this.renderMenuDataItems.bind(this);
		this.setSelectedMenuDataRow = this.setSelectedMenuDataRow.bind(this);
	}

	setSelectedMenuDataRow(sourceDrowId) {
		selectedMenuDataItem = menuDataItemList.find(x => x.sourceDrowId === sourceDrowId);

		if(selectedMenuDataItem) {
			this.setState({selectedMenuDataItem: selectedMenuDataItem});
		} else {
			console.log("selected menu data item not found");
		}

	}

	handleButtonClick(e) {
		const originalProps = this.props;
		const selectedMenuDataItem = this.state.selectedMenuDataItem
		const testData = "test data";
		const setSelectedMenuDataRow = this.setSelectedMenuDataRow;
		const props=[...originalProps, selectedMenuDataItem, setSelectedMenuDataRow];
		const setCurrentPage = this.props.setCurrentPage;
		const id=e.target.id;
		const menuDataItem = {};
		// menuDataItem.name = this.state.menuDataItemName;
		// menuDataItem.type = this.state.menuDataItemType;
		// menuDataItem.description = this.state.menuDataItemDescription;		
		
		switch(id) {
			case "1": setCurrentPage("", {page:"editMenuDataItemPage", props: props});
			break;

			case "2": setCurrentPage("", {page: "menuCentral", props: props});
			break;
		}
	}

	renderMenuDataItems(menuDataItemList) {
		// console.log(menuDataItemList);
		if(menuDataItemList.length>0) {
			return (<ListGroup>
		        {menuDataItemList.map((rr) => (
		            <MenuDataRow menuDataRow = {rr} 
		            key = {rr._id} 
		            setSelectedMenuDataRow={this.setSelectedMenuDataRow}/>
		          ))};    
		    </ListGroup>)
		}else {
			<Alert bsStyle="warning">No menu items yet.</Alert>
		}
	}

	render() {
		return <div>
			<h3>Menu data row</h3>	
			<ButtonGroup>
				<Button
					id="1" bsStyle="info" bsSize="small" onClick={this.handleButtonClick}>
		  			Edit menu data item
				</Button>
				<Button
					id="2" bsStyle="info" bsSize="small" onClick={this.handleButtonClick}>
		  			Menu central
				</Button>
			</ButtonGroup>		
			{this.renderMenuDataItems(menuDataItemList)}
		</div>
	}
}

let menuDataItemList;

const composer = (params, onData) => {
  const subscription = Meteor.subscribe('populateMenuDataRows');

  if (subscription.ready()) {
    menuDataItemList = MENUDATAROWS.find().fetch();
    onData(null, { menuDataItemList });
  }
};

export default composeWithTracker(composer, Loading)(MenuDataRowsPage);