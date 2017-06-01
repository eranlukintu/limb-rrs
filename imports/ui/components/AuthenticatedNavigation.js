import React from 'react';
import { browserHistory } from 'react-router';
import { IndexLinkContainer, LinkContainer } from 'react-router-bootstrap';
import { Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { Meteor } from 'meteor/meteor';
import { MenuMaster } from "./menu-components/menuMaster.js";

const handleLogout = () => Meteor.logout(() => browserHistory.push('/login'));

const userName = () => {
  const user = Meteor.user();
  const name = user && user.profile ? user.profile.name : '';
  return user ? `${name.first} ${name.last}` : '';
};

const AuthenticatedNavigation = ({ currentPage, setCurrentPage, menuName, setMenuName }) => (
  <div>
    <Nav>
      <NavItem
        active={ currentPage === 'index' }
        eventKey={ 1 }
        onClick={(event) => { setCurrentPage(event, { page: 'index' }); }}
      >Index</NavItem>
    </Nav>
    <Nav>
      < MenuMaster setCurrentPage={setCurrentPage} menuName={menuName} setMenuName={setMenuName}/>
    </Nav>
    <Nav pullRight>
      <NavDropdown eventKey={ 3 } title={ userName() } id="account-dropdown">
        <MenuItem eventKey={ 3.1 } onClick={ handleLogout }>Logout</MenuItem>
      </NavDropdown>
    </Nav>
  </div>
);

AuthenticatedNavigation.propTypes = {
  currentPage: React.PropTypes.string,
  setCurrentPage: React.PropTypes.func,
};

export default AuthenticatedNavigation;
