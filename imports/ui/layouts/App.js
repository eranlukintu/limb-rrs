import React from 'react';
import { Grid } from 'react-bootstrap';
import { Meteor } from 'meteor/meteor';
import AppNavigation from '../containers/AppNavigation.js';
import { PreInitialisedMenu } from '../components/menu-components/preInitialisedMenu.js';
import Index from '../pages/Index.js';
import { ModelingPage } from '../pages/ModelingPage.js';
import { ModelingWorkPage } from '../pages/modelingWorkPage.js';
import BusinessModelComponent from '../components/modeling-components/business-model/businessModelComponent.js';
import RawModelComponent from '../components/modeling-components/raw-model/rawModelComponent.js';
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
    };

    this.setCurrentPage = this.setCurrentPage.bind(this);
    this.setMenuName = this.setMenuName.bind(this);
    this.calculateNextPageAndMenu = this.calculateNextPageAndMenu.bind(this);
  }

  setCurrentPage(event, { page, props }) {
    if (event) event.preventDefault();
    this.setState({ currentPage: page, currentPageProps: props });
  }

  calculateNextPageAndMenu(key, currentPage, calculateNextPage, calculateNextMenu, setCurrentPage, props, setMenuName) {
    const nextPage = calculateNextPage(key, currentPage);
    const nextMenu = calculateNextMenu(key, currentPage);
    setCurrentPage("", {page: nextPage, props: props});
    setMenuName(nextMenu);
  }

  setMenuName(menuName) {
    this.setState({menuName: menuName});
  }

  currentPage() {
    return {
      index: <Index />,
      modeling: <ModelingPage />,
      businessModelComponent: <BusinessModelComponent />,
      rawModelComponent: <RawModelComponent />,
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
              calculateIndentLevel: calculateIndentLevel,
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
