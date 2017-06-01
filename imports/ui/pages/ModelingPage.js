import React from 'react';
import { Jumbotron, Media } from 'react-bootstrap';

export const ModelingPage = (props) => (

  <div>
	  <Jumbotron className="text-center">
	    <h3>Business Model Page</h3>
	  </Jumbotron>
	  <Media>
	  	<Media.Body>
		  <p>
		  	This section provides you will options to develop and refine your business model. You can add new actors (such as a specific type of customer), as well as new activities and values. You can also exclude any of these. You can also add or modify relationships between different parts of the business. In short, you can customise the business model to represent your business so that all the observations you record and analyse are relevant.
		  </p>
	  	</Media.Body>
	  </Media>
  </div>
);
