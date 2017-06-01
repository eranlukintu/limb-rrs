import React from "react";
import { IndexMenu } from "./indexMenu.js";
import { ModelingMenu} from "./modelingMenu.js";

export const MenuMaster = (props) => {

	switch(props.menuName) {
		case "indexMenu": 
			return <IndexMenu 
				setCurrentPage={props.setCurrentPage} 
				menuName={props.menuName} 
				setMenuName={props.setMenuName}/>
			break;

		case "modelingMenu": 
			return <ModelingMenu 
				setCurrentPage={props.setCurrentPage} 
				menuName={props.menuName} 
				setMenuName={props.setMenuName}/>
			break;

		default: 
			return <IndexMenu 
				setCurrentPage={props.setCurrentPage} 
				menuName={props.menuName} 
				setMenuName={props.setMenuName}/>
	}
}