import React from 'react'
import { Menu , Header } from 'semantic-ui-react'
import { menuStyle } from '../../resources/Styles'

class WarframeHeader extends React.Component{
	constructor(props){
		super(props);
		this.state={}
	}

	render(){
		return(
			<Menu size="tiny"
						fixed="top"
						borderless
						style={menuStyle()}
			>
				<Menu.Item>
					<Header size="medium" style={{color: this.props.textColor}}>
						Warframe Tracker
					</Header>
				</Menu.Item>
			</Menu>
		);
	}
}

export default WarframeHeader;
