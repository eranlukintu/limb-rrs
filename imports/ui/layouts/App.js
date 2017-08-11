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
import { ModelingPage } from '../pages/ModelingPage.js';
import { ModelingWorkPage } from '../pages/modelingWorkPage.js';
import BusinessModelComponent from '../components/modeling-components/business-model/businessModelComponent.js';
import RawModelComponent from '../components/modeling-components/raw-model/rawModelComponent.js';
import ActorModelComponent from '../components/modeling-components/actor-model/actorModelComponent.js';
import { CreateNewActorComponent } from '../components/modeling-components/actor-model/createNewActorComponent.js';
import { calculateNextPage } from '../../functions/ui-functions/menu-functions/calculateNextPage.js';
import { calculateNextMenu } from '../../functions/ui-functions/menu-functions/calculateNextMenu.js';
import { calculateIndentLevel } from '../../functions/dot-functions/dotRowFunctions';
import { DOTROWS } from '../../api/collections/drows.js';
import { Loading } from '../components/Loading.js';

export default class App extends React.Component {
  constructor(props) {
    super(props);
        
    this.state = { 
      currentPage: 'index', 
      currentPageProps: null,
      menuName: 'indexMenu',
      isInitialised: false,
      controllingStaticDrowId: null,
      selectedItemType: null,
      controllingActorDrowId: null,
      newActorName: null,
    };

    this.setCurrentPage = this.setCurrentPage.bind(this);
    this.setMenuName = this.setMenuName.bind(this);
    this.calculateNextPageAndMenu = this.calculateNextPageAndMenu.bind(this);
    this.setControllingStaticDrowId = this.setControllingStaticDrowId.bind(this);
    this.setSelectedItemType = this.setSelectedItemType.bind(this);
    this.setControllingActorDrowId = this.setControllingActorDrowId.bind(this);
    this.setNewActorName = this.setNewActorName.bind(this);
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
      menuControlItemsRowsPage: <MenuControlItemsRowsPage />
    }[this.state.currentPage];
  }

  setInitialisationState() {

  }

  renderMenu() {
    let isEmpty = this.state.isInitialised;

    if(isEmpty === true) {
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
              controllingStaticDrowId: this.state.controllingStaticDrowId,
              calculateIndentLevel: calculateIndentLevel,
              setControllingStaticDrowId: this.setControllingStaticDrowId,
              setSelectedItemType: this.setSelectedItemType,
              setControllingActorDrowId: this.setControllingActorDrowId,
              setNewActorName: this.setNewActorName,
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
