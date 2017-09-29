import React from 'react'
import { appContainerStyle as appStyle } from '../../resources/Styles';
import { WarWhite , WarBlack } from '../../resources/Colors';
import WarframeHeader from '../WarframeHeader';

class AppContainer extends React.Component{
	constructor(props){
		super(props);
		this.state={}
	}

	render(){
		return(
			<div style={appStyle()}>
				<WarframeHeader background={WarBlack} textColor={WarWhite} />
				{this.props.children}
			</div>
		);
	}
}

export default AppContainer;
