import React, { Component } from 'react';
import AppContainer from './components/AppContainer'
import WarframeContainer from './containers/WarframeContainer'

class App extends Component {
  render() {
    return (
      <AppContainer>
        <WarframeContainer/>
      </AppContainer>
    );
  }
}

export default App;
