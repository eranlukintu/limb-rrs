import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router';
import PublicNavigation from './PublicNavigation.js';
import AuthenticatedNavigation from './AuthenticatedNavigation.js';

const renderNavigation = (hasUser, 
                          currentPage, 
                          setCurrentPage, 
                          menuName, 
                          setMenuName, 
                          calculateNextPageAndMenu,
                          calculateNextPage,
                          calculateNextMenu,
                          isInitialised,
                          navControlStates) => (
  hasUser ? <AuthenticatedNavigation
    currentPage={ currentPage }
    setCurrentPage={ setCurrentPage }
    menuName={menuName}
    setMenuName={ setMenuName }
    calculateNextPageAndMenu = { calculateNextPageAndMenu }
    calculateNextPage = { calculateNextPage }
    calculateNextMenu = { calculateNextMenu }
    navControlStates = { navControlStates }
  /> : <PublicNavigation />
);

const AppNavigation = ({ hasUser, 
                        currentPage, 
                        setCurrentPage, 
                        menuName, 
                        setMenuName, 
                        calculateNextPageAndMenu, 
                        calculateNextPage,
                        calculateNextMenu,
                        isInitialised,
                        navControlStates}) => (
  <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        Look Into My Business
      </Navbar.Brand>
    </Navbar.Header>
    <Navbar.Collapse>
      { renderNavigation(hasUser, 
                        currentPage, 
                        setCurrentPage, 
                        menuName, 
                        setMenuName, 
                        calculateNextPageAndMenu, 
                        calculateNextPage,
                        calculateNextMenu,
                        isInitialised,
                        navControlStates) }
    </Navbar.Collapse>
  </Navbar>
);

AppNavigation.propTypes = {
  hasUser: React.PropTypes.object,
  setCurrentPage: React.PropTypes.func,
};

export default AppNavigation;
