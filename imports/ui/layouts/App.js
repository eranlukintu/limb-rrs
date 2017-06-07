import React from 'react';
import { Grid } from 'react-bootstrap';
import { Meteor } from 'meteor/meteor';
import AppNavigation from '../containers/AppNavigation.js';
import Index from '../pages/Index.js';
import { ModelingPage } from '../pages/ModelingPage.js';
import { ModelingWorkPage } from '../pages/modelingWorkPage.js';
import { calculateNextPage } from '../../functions/ui-functions/menu-functions/calculateNextPage.js';
import { calculateNextMenu } from '../../functions/ui-functions/menu-functions/calculateNextMenu.js';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      currentPage: 'index', 
      currentPageProps: null,
      menuName: 'indexMenu'
    };
    this.setCurrentPage = this.setCurrentPage.bind(this);
    this.setMenuName = this.setMenuName.bind(this);
  }

  setCurrentPage(event, { page, props }) {
    if (event) event.preventDefault();
    console.log(page);
    this.setState({ currentPage: page, currentPageProps: props });
  }

  calculateNextPageAndMenu(key, currentPage, calculateNextPage, calculateNextMenu, setCurrentPage, props, setMenuName) {
    const nextPage = calculateNextPage(key, currentPage);
    const nextMenu = calculateNextMenu(key, currentPage);
    console.log("Next page", nextPage);
    console.log("Next menu", nextMenu);
    // console.log(props);
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
      modelingWorkPage: <ModelingWorkPage />,
    }[this.state.currentPage];
  }

  render() {
    const { children } = this.props;
    
    return (
      <div>
        <AppNavigation
          currentPage={ this.state.currentPage }
          setCurrentPage={ this.setCurrentPage }
          calculateNextPageAndMenu={ this.calculateNextPageAndMenu}
          calculateNextPage={calculateNextPage}
          calculateNextMenu={calculateNextMenu}
          menuName={this.state.menuName}
          setMenuName={ this.setMenuName }
          modeling={ModelingPage}
        />
        <Grid>
          {
            Meteor.userId() ?
            React.cloneElement(this.currentPage(), {
              setCurrentPage: this.setCurrentPage,
              currentPage: this.state.currentPage,
              menuName: this.state.menuName,
              setMenuName: this.setMenuName,
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
