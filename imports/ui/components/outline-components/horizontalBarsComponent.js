import React from 'react';
import { HorizontalBarComponent} from './horizontalBarComponent.js';

export const HorizontalBarsComponent = function(props) {

	const indentLevel = props.indentLevel
	let hbArray = [];

	const insertHorizontalBars = function() {		
	
		for(let i=0; i<indentLevel; i++) {
			hbArray.push(<HorizontalBarComponent key={i.toString()} />);
		}

		return hbArray;
	}

	return <span>{insertHorizontalBars()}</span>
}

	

	