import React from 'react';
import {GoToBusinessModelingPage} from './goToBusinessModelingPage.js';
import {GoToIndex} from './goToIndex.js';
import {GoToMenuCentral} from './goToMenuCentral.js';

export const allMenuActions = function(actionName) {
	return {
		goToBusinessModelingPage: <GoToBusinessModelingPage />,
		goToIndex: <GoToIndex />,
		goToMenuCentral: <GoToMenuCentral />
	}[actionName];
}