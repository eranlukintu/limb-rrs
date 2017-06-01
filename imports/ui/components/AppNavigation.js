import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router';
import PublicNavigation from './PublicNavigation.js';
import AuthenticatedNavigation from './AuthenticatedNavigation.js';

const renderNavigation = (hasUser, currentPage, setCurrentPage, menuName, setMenuName) => (
  hasUser ? <AuthenticatedNavigation
    currentPage={ currentPage }
    setCurrentPage={ setCurrentPage }
    menuName={menuName}
    setMenuName={ setMenuName }
  /> : <PublicNavigation />
);

const AppNavigation = ({ hasUser, currentPage, setCurrentPage, menuName, setMenuName }) => (
  <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <Link href="#" onClick={(event) => {
          setCurrentPage(event, { page: 'index' });
        }}>Look Into My Business</Link>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      { renderNavigation(hasUser, currentPage, setCurrentPage, menuName, setMenuName) }
    </Navbar.Collapse>
  </Navbar>
);

AppNavigation.propTypes = {
  hasUser: React.PropTypes.object,
  setCurrentPage: React.PropTypes.func,
};

export default AppNavigation;
