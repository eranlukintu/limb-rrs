import React from 'react';
import { Grid } from 'react-bootstrap';
import { Meteor } from 'meteor/meteor';
import AppNavigation from '../containers/AppNavigation.js';
import Index from '../pages/Index.js';
import { ModelingPage } from '../pages/ModelingPage.js';
import { ModelingWorkPage } from '../pages/modelingWorkPage.js';
// import { calculateNextPage } from '../../functions/ui-functions/menu-functions/calculateNextPage.js';
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
    this.setState({ currentPage: page, currentPageProps: props });
  }

  calculateNextPage(key, currentPage) {

    let nextPage = "NA";

    switch(currentPage) {
      case "index":
        switch(key) {
          case "modeling": nextPage = "modeling";
          break;
        }
    }

    return nextPage;
  }

  calculateNextPageName(key, currentPage, calculateNextPage) {
    const nextPage = calculateNextPage(key, currentPage);
    console.log(key, currentPage, nextPage);
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
          calculateNextPageName={ this.calculateNextPageName}
          calculateNextPage={this.calculateNextPage}
          menuName={this.state.menuName}
          setMenuName={ this.setMenuName }
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
