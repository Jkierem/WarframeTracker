import React from 'react'
import WarAlert from '../WarAlert'
import * as Utils from '../../resources/Utils'

var Alert = WarAlert;

class WarContainer extends React.Component{
	constructor(props){
		super(props);
		this.state={
			xml: Utils.parseXML(this.props.xml),
			json: Utils.parseJSON(this.props.json)
		}
	}

	renderAlerts = () => {
		let alerts = Array.from(this.props.items);
		return alerts.map((item,key) => (<Alert key={key} item={item} />))
	}

	render(){
		console.log(this.props);
		console.log(this.state);
		return(
			<div>Hi oh</div>
		);
	}
}

export default WarContainer;
