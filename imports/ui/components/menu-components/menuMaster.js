import React from "react";
import IndexMenu from "./indexMenu.js";
import { ModelingMenu} from "./modelingMenu.js";
import { ModelingWorkPageMenu } from "./modelingWorkPageMenu.js";
import { RawModelingMenu } from "./rawModelingMenu.js";
import { BusinessModelingMenu } from "./businessModelingMenu.js";

export const MenuMaster = (props) => {

	switch(props.menuName) {
		case "indexMenu": 
			return <IndexMenu 
				currentPage={props.currentPage}
				setCurrentPage={props.setCurrentPage} 
				menuName={props.menuName} 
				setMenuName={props.setMenuName}
				calculateNextPageAndMenu={props.calculateNextPageAndMenu}
				calculateNextPage={props.calculateNextPage}
				calculateNextMenu={props.calculateNextMenu}
				isInitialised={props.isInitialised}/>
			break;

		case "modelingMenu": 
			return <ModelingMenu 
				currentPage={props.currentPage}
				setCurrentPage={props.setCurrentPage} 
				menuName={props.menuName} 
				setMenuName={props.setMenuName}
				calculateNextPageAndMenu={props.calculateNextPageAndMenu}
				calculateNextPage={props.calculateNextPage}
				calculateNextMenu={props.calculateNextMenu}
				isInitialised={props.isInitialised}/>
			break;

		case "modelingWorkPageMenu": 
			return <ModelingWorkPageMenu 
				currentPage={props.currentPage}
				setCurrentPage={props.setCurrentPage} 
				menuName={props.menuName} 
				setMenuName={props.setMenuName}
				calculateNextPageAndMenu={props.calculateNextPageAndMenu}
				calculateNextPage={props.calculateNextPage}
				calculateNextMenu={props.calculateNextMenu}
				isInitialised={props.isInitialised}/>
			break;

		case "businessModelingMenu": 
			return <BusinessModelingMenu 
				currentPage={props.currentPage}
				setCurrentPage={props.setCurrentPage} 
				menuName={props.menuName} 
				setMenuName={props.setMenuName}
				calculateNextPageAndMenu={props.calculateNextPageAndMenu}
				calculateNextPage={props.calculateNextPage}
				calculateNextMenu={props.calculateNextMenu}
				isInitialised={props.isInitialised}/>
			break;

		case "rawModelingMenu": 
			return <RawModelingMenu 
				currentPage={props.currentPage}
				setCurrentPage={props.setCurrentPage} 
				menuName={props.menuName} 
				setMenuName={props.setMenuName}
				calculateNextPageAndMenu={props.calculateNextPageAndMenu}
				calculateNextPage={props.calculateNextPage}
				calculateNextMenu={props.calculateNextMenu}
				isInitialised={props.isInitialised}/>
			break;

		default: 
			return <IndexMenu 
				currentPage={props.currentPage}
				setCurrentPage={props.setCurrentPage} 
				menuName={props.menuName} 
				setMenuName={props.setMenuName}
				calculateNextPageAndMenu={props.calculateNextPageAndMenu}
				calculateNextPage={props.calculateNextPage}
				calculateNextMenu={props.calculateNextMenu}
				isInitialised={props.isInitialised}/>
	}
}