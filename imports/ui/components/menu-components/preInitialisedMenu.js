import React from 'react';
import { Nav, NavDropdown, Navbar, MenuItem} from "react-bootstrap";

export const PreInitialisedMenu = function(props) {	

	return <Navbar>
	    <Navbar.Header>
	      <Navbar.Brand>
	        Look Into My Business
	      </Navbar.Brand>
	    </Navbar.Header>
	    <Nav>
		    <NavDropdown title="Actions" id="preInitialisedMenuDropdown">
				<MenuItem eventKey="NA">...please wait</MenuItem>
			</NavDropdown>
		</Nav>
	  </Navbar>
}