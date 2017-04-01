import React from 'react';
import { Grid } from 'react-bootstrap';
import { Meteor } from 'meteor/meteor';
import AppNavigation from '../containers/AppNavigation.js';
import Index from '../pages/Index.js';
import Documents from '../pages/Documents.js';
import NewDocument from '../pages/NewDocument.js';
import EditDocument from '../containers/EditDocument.js';
import ViewDocument from '../containers/ViewDocument.js';
import CombinedSummary from '../pages/summary-pages/combinedSummaryPage.js';
import { TempDataManagementPage } from '../pages/temp-pages/tempDataManagementPage.js';
import { TempSARSListPage } from '../pages/temp-pages/tempSARSPage.js';
import { TempDataStructureItemsPage } from '../pages/temp-pages/tempDataStructureItemsPage.js';
import { TempTreePage } from '../pages/temp-pages/tempTreePage.js';
import { TempTestDataPage } from '../pages/temp-pages/rawTestDataPage.js';
import { TempOutlinePage } from '../pages/temp-pages/tempOutlinePage.js';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      currentPage: 'index', 
      controllingElementId: "Null",
      currentPageProps: null 
    };
    this.setCurrentPage = this.setCurrentPage.bind(this);
    this.setControllingElementId = this.setControllingElementId.bind(this);
  }

  setCurrentPage(event, { page, props }) {
    if (event) event.preventDefault();
    this.setState({ currentPage: page, currentPageProps: props });
  }

  setControllingElementId(item) {
    console.log(item);
    this.setState({controllingElementId: item.itemId});
  }

  currentPage() {
    return {
      index: <Index />,
      documents: <Documents />,
      newDocument: <NewDocument />,
      editDocument: <EditDocument />,
      viewDocument: <ViewDocument />,
      combinedSummary: <CombinedSummary />,
      tempDataManagement: <TempDataManagementPage />,
      viewSARS: <TempSARSListPage />,
      viewStructureItems: <TempDataStructureItemsPage />,
      viewTree: <TempTreePage />,
      viewRawTestData: <TempTestDataPage />,
      viewTempOutline: <TempOutlinePage />
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
              setControllingElementId: this.setControllingElementId,
              currentPage: this.state.currentPage,
              controllingElementId: this.state.controllingElementId,
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
