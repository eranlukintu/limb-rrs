import React from 'react';
import { Grid } from 'react-bootstrap';
import { Meteor } from 'meteor/meteor';
import AppNavigation from '../containers/AppNavigation.js';
import Index from '../pages/Index.js';
import { ModelingPage } from '../pages/ModelingPage.js';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentPage: 'index', currentPageProps: null };
    this.setCurrentPage = this.setCurrentPage.bind(this);
  }

  setCurrentPage(event, { page, props }) {
    if (event) event.preventDefault();
    this.setState({ currentPage: page, currentPageProps: props });
  }

  currentPage() {
    return {
      index: <Index />,
      modeling: <ModelingPage />,
    }[this.state.currentPage];
  }

  render() {
    const { children } = this.props;
    return (
      <div>
        <AppNavigation
          currentPage={ this.state.currentPage }
          setCurrentPage={ this.setCurrentPage }
        />
        <Grid>
          {
            Meteor.userId() ?
            React.cloneElement(this.currentPage(), {
              setCurrentPage: this.setCurrentPage,
              currentPage: this.state.currentPage,
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
