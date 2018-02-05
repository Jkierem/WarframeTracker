import $ from "jquery";
import React, { Component } from 'react';
import { WarContainer , WarHeader , WarLoading } from './components'

var rssUrl = "http://127.0.0.1:8000/rss/"
var stateUrl = "http://127.0.0.1:8000/state/"

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      readyXML: false,
      readyJSON: false,
      xml: undefined,
      json: undefined
    }
  }

  componentWillMount = () =>{
    $.ajax({
      type: 'GET',
      url: rssUrl,
      success: this.receiveXML
    });
  }

  receiveXML = (response) =>{
    this.setState({
      readyXML: true,
      xml: response
    })
    $.ajax({
      type: 'GET',
      url: stateUrl,
      success: this.receiveJSON
    })
  }

  receiveJSON = (response) =>{
    this.setState({
      readyJSON: true,
      json: response
    })
  }

  render() {
    let { readyXML , readyJSON , xml , json } = this.state
    const ready = readyXML && readyJSON;
    return (
      <React.Fragment>
        <WarHeader />
        { ready  && <WarContainer xml={xml} json={json} />}
        { !ready && <WarLoading />}
      </React.Fragment>
    );
  }
}

export default App;
