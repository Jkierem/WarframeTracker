import React from 'react'
import worldstateData from 'warframe-worldstate-data'

class AlertContainer extends React.Component{
	constructor(props){
		super(props);
		const { Activation , Expiry , MissionInfo } = this.props.info;
		var i = new Date(parseFloat(Activation.$date.$numberLong))
		var f = new Date(parseFloat(Expiry.$date.$numberLong))
		const {location , maxEnemyLevel , minEnemyLevel , missionReward , missionType} = MissionInfo
		this.state = {
			activation: i,
			expiry: f,
			location: worldstateData.solNodes[location],
			minLvl: minEnemyLevel,
			maxLvl: maxEnemyLevel,
			missionReward : missionReward,
			missionType : worldstateData.missionTypes[missionType]
		}
	}

	render(){
		return(
			<div/>
		);
	}
}

export default AlertContainer;
