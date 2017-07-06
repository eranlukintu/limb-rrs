import React from 'react';
import { FormGroup, FormControl } from 'react-bootstrap';
import { Bert } from 'meteor/themeteorchef:bert';

export class CreateNewActorComponent extends React.Component {

	handleNewActor(e) {
		const keyCode = e.keyCode;
		const actorName = e.target.value;

		if(actorName !=="" && keyCode ===13) {
			Meteor.call("createNewActor", {actorName});
		}


	}

	render() {
		return (<div>
				<h3>Create new actor</h3>
				<FormGroup>
					<FormControl
					type="text"	
					onKeyUp={this.handleNewActor.bind(this)}				
					placeholder="Type an actor name and press enter..."
					/>
				</FormGroup>
			</div>
		)
	}
	
}