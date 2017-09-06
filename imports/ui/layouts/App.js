import React from 'react';
import { Grid } from 'react-bootstrap';
import { Meteor } from 'meteor/meteor';
import AppNavigation from '../containers/AppNavigation.js';
import { PreInitialisedMenu } from '../components/menu-components/preInitialisedMenu.js';
import Index from '../pages/Index.js';
import MenuCentral from '../pages/menuCentral.js';
import MenuDataItemPage from '../pages/menuDataItemPage.js';
import MenuDataRowsPage from '../pages/menuDataRowsPage.js';
import MenuControlVariablesItemsPage from '../pages/menuControlVariablesItemsPage.js';
import MenuControlItemsRowsPage from '../pages/menu-pages/menuControlItemsRowsPage';
import EditMenuDataItemPage from '../pages/menu-pages/editMenuDataItemPage.js';
import MenuAssociationsPage from '../pages/menu-pages/menuAssociationsPage.js';
import { ModelingPage } from '../pages/ModelingPage.js';
import { ModelingWorkPage } from '../pages/modelingWorkPage.js';
import BusinessModelComponent from '../components/modeling-components/business-model/businessModelComponent.js';
import RawModelComponent from '../components/modeling-components/raw-model/rawModelComponent.js';
import ActorModelComponent from '../components/modeling-components/actor-model/actorModelComponent.js';
import { CreateNewActorComponent } from '../components/modeling-components/actor-model/createNewActorComponent.js';
import { calculateNextPage } from '../../functions/ui-functions/menu-functions/calculateNextPage.js';
import { calculateNextMenu } from '../../functions/ui-functions/menu-functions/calculateNextMenu.js';
import { calculateIndentLevel } from '../../functions/dot-functions/dotRowFunctions';
import { MENUASSOCIATIONS } from '../../api/collections/menuCollections.js';
import { Loading } from '../components/Loading.js';
import { getMenuControlStates } from "../ui-functions/getMenuControlStates.js";
import getActiveMenuActionNames from "../ui-functions/getActiveMenuActionNames.js";

export default class App extends React.Component {
  constructor(props) {
    super(props);
        
    this.state = { 
      currentPage: 'index', 
      currentPageProps: null,
      menuName: 'indexMenu',
      isInitialised: true,
      controllingStaticDrowId: null,
      selectedItemType: null,
      selectedMenuCombinationId: "x",
      selectedMenuDataRowId: "x",
      selectedMenuControlRowId: "x",
      controllingActorDrowId: null,
      newActorName: null,
      activeRole: "administrator",
      graphicalState: false,
    };

    this.setCurrentPage = this.setCurrentPage.bind(this);
    this.setMenuName = this.setMenuName.bind(this);
    this.calculateNextPageAndMenu = this.calculateNextPageAndMenu.bind(this);
    this.setControllingStaticDrowId = this.setControllingStaticDrowId.bind(this);
    this.setSelectedItemType = this.setSelectedItemType.bind(this);
    this.setControllingActorDrowId = this.setControllingActorDrowId.bind(this);
    this.setNewActorName = this.setNewActorName.bind(this);
    this.setSelectedMenuCombinationId = this.setSelectedMenuCombinationId.bind(this);
    this.setSelectedMenuDataRowId = this.setSelectedMenuDataRowId.bind(this);
    this.updateMenuAssociations = this.updateMenuAssociations.bind(this);
    this.setSelectedMenuControlRowId = this.setSelectedMenuControlRowId.bind(this);
    // this.setActiveRole = this.setActiveRole.bind(this);
  }

  setCurrentPage(event, { page, props }) {
    if (event) event.preventDefault();
    this.setState({ currentPage: page, currentPageProps: props });
  }

  calculateNextPageAndMenu(
                            key, 
                            currentPage, 
                            calculateNextPage, 
                            calculateNextMenu, 
                            setCurrentPage, 
                            props, 
                            setMenuName,
                            selectedItemType) {
    const nextPage = calculateNextPage(key, currentPage);
    const nextMenu = calculateNextMenu(key, currentPage, selectedItemType);
    setCurrentPage("", {page: nextPage, props: props});
    setMenuName(nextMenu);
  }

  setMenuName(menuName) {
    this.setState({menuName: menuName});
  }

  setControllingStaticDrowId(staticDrowId) {
    if(this.state.controllingStaticDrowId === staticDrowId) {
      this.setState({controllingStaticDrowId: null});
    }else {
      this.setState({controllingStaticDrowId: staticDrowId});
    }
  }

  setSelectedItemType(selectedItemType) {
    console.log(this.state.selectedItemType);
    if(this.state.selectedItemType === selectedItemType) {
      this.setState({selectedItemType: null});
    } else {
      this.setState({selectedItemType: selectedItemType});
    }
  }

  setControllingActorDrowId(staticActorDrowId) {
    if(this.state.controllingActorDrowId === staticActorDrowId) {
      this.setState({controllingActorDrowId: null});
    }else {
      this.setState({controllingActorDrowId: staticActorDrowId});
    }
  }

  setNewActorName(newActorName) {
    this.setState({newActorName: newActorName});
  }

  setSelectedMenuCombinationId(selectedMenuCombinationId) {
    const currentSelectedMenuCombinationId = this.state.selectedMenuCombinationId;
    // console.log(currentSelectedMenuCombinationId);
    if(selectedMenuCombinationId===currentSelectedMenuCombinationId) {
      this.setState({selectedMenuCombinationId: "x"});
    } else {
      this.setState({selectedMenuCombinationId: selectedMenuCombinationId});
    }
  }

  setSelectedMenuDataRowId(selectedMenuDataRowId) {
    const currentSelectedMenuDataRowId = this.state.selectedMenuDataRowId;
    console.log(currentSelectedMenuDataRowId);
    if(selectedMenuDataRowId === currentSelectedMenuDataRowId) {
      this.setState({selectedMenuDataRowId: "x"});
    }else {
      this.setState({selectedMenuDataRowId: selectedMenuDataRowId});
    }
  }

  setSelectedMenuControlRowId(selectedMenuControlRowId) {
    const currentSelectedMenuControlRowId = this.state.selectedMenuControlRowId;
    if(selectedMenuControlRowId === currentSelectedMenuControlRowId) {
      this.setState({selectedMenuControlRowId: "x"});
    }else {
      this.setState({selectedMenuControlRowId: selectedMenuControlRowId});
    }
    console.log(this.state.selectedMenuControlRowId);
  }

  updateMenuAssociations(menuCombinationId, menuDataRowId, previousMenuDataRowId) {
    const associationIds = {};
    // console.log(menuCombinationId, menuDataRowId, previousMenuDataRowId);
    associationIds.menuCombinationId = menuCombinationId;
    associationIds.menuDataRowId = menuDataRowId;
    associationIds.previousMenuDataRowId = previousMenuDataRowId;

    Meteor.call("updateMenuAssociationsMethod", associationIds);

    // Meteor.call("updateMenuAssociations", associationIds);
  }

  setActiveRole() {
    return "administrator";
  }

  currentPage() {
    return {
      index: <Index />,
      modeling: <ModelingPage />,
      businessModelComponent: <BusinessModelComponent />,
      rawModelComponent: <RawModelComponent />,
      actorModelComponent: <ActorModelComponent />,
      createNewActorComponent: <CreateNewActorComponent />,
      menuCentral: <MenuCentral />,
      menuDataItemPage: <MenuDataItemPage />,
      menuDataRowsPage: <MenuDataRowsPage />,
      editMenuDataItemPage: <EditMenuDataItemPage />,
      menuControlVariablesItemsPage: <MenuControlVariablesItemsPage />,
      menuControlItemsRowsPage: <MenuControlItemsRowsPage />,
      menuAssociationsPage: <MenuAssociationsPage />
    }[this.state.currentPage];
  }

  setInitialisationState() {

  }

  renderMenu() {

    const roleState = this.state.activeRole;
    const initialisationState = this.state.isInitialised;
    const graphicalState = this.state.graphicalState;
    const selectedState = this.state.selectedItemType;
    const pageState = this.state.currentPage;

    const navControlStates = [
        roleState,
        initialisationState,
        graphicalState,
        selectedState,
        pageState
    ]

    // const activeMenuNames = getActiveMenuActionNames();

    let isEmpty = this.state.isInitialised;

    if(isEmpty === false) {
      return (<PreInitialisedMenu />);
    } else {
        return(<AppNavigation
            currentPage={ this.state.currentPage }
            setCurrentPage={ this.setCurrentPage }
            calculateNextPageAndMenu={ this.calculateNextPageAndMenu}
            calculateNextPage={calculateNextPage}
            calculateNextMenu={calculateNextMenu}
            menuName={this.state.menuName}
            setMenuName={ this.setMenuName }
            isInitialised={ this.state.isInitialised}
            navControlStates = {navControlStates}
          />);
    }
  }

  render() {
    const { children } = this.props;
    
    return (
      <div>
        {this.renderMenu()}
        <Grid>
          {
            Meteor.userId() ?
            React.cloneElement(this.currentPage(), {
              setCurrentPage: this.setCurrentPage,
              currentPage: this.state.currentPage,
              selectedMenuCombinationId: this.state.selectedMenuCombinationId,
              selectedMenuDataRowId: this.state.selectedMenuDataRowId,
              controllingStaticDrowId: this.state.controllingStaticDrowId,
              calculateIndentLevel: calculateIndentLevel,
              setControllingStaticDrowId: this.setControllingStaticDrowId,
              setSelectedItemType: this.setSelectedItemType,
              setControllingActorDrowId: this.setControllingActorDrowId,
              setNewActorName: this.setNewActorName,
              setSelectedMenuCombinationId: this.setSelectedMenuCombinationId,
              setSelectedMenuDataRowId: this.setSelectedMenuDataRowId,
              setSelectedMenuControlRowId: this.setSelectedMenuControlRowId,
              updateMenuAssociations: this.updateMenuAssociations,
              ...this.state.currentPageProps,
            }) : children
          }
        </Grid>
      </div>
    );
  }
}

App.propTypes = {
  children: React.PropTypes.node,
};
