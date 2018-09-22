import React, { Component } from 'react';
import logo from './logo.svg';
import Ads from '../Ads';
import './App.css';

class App extends Component {
  state = { adSelected: undefined }

  selectAd = (adId) => {
    const adSelected = adId.toString();
    this.setState({
      adSelected,
    });
  }

  render() {
    const { adSelected } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <Ads selectAd={this.selectAd} adSelected={adSelected} />
      </div>
    );
  }
}

export default App;
