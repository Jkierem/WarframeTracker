import React from 'react'
import AlertContainer from '../AlertContainer'

//let dev = "../../php/warframe.php"
let local = "http://localhost:80"

class WarframeContainer extends React.Component{
	constructor(props){
		super(props);
		this.state={
			available: false
		}
	}

	componentWillMount(){
		this.ajaxRequest()
	}

	ajaxRequest = () => {
		var me = this;
		var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function() {
			if (this.readyState === 4 && this.status === 200) {
				var r = JSON.parse(this.responseText);
				//console.log(r);
				me.setState({
					ActiveMissions: r.ActiveMissions,
					Alerts : r.Alerts,
					Invasions : r.Invasions,
					Sorties : r.Sorties,
					available: true
				})
			}
		};
		xhttp.open("GET", local, true);
		xhttp.send();
	}

	renderAlerts = () =>{
		if( this.state.available ){
			let alerts = []
			for( var i = 0 ; i < this.state.Alerts.length ; i++ ){
				alerts.push(<AlertContainer key={i} info={this.state.Alerts[i]} />)
			}
			return alerts;
		}
	}

	render(){
		return(
			<div>
			</div>
		);
	}
}

export default WarframeContainer;
