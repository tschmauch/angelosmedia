import React, { Component } from 'react';
import NavBar from './NavBar';
import MainPageVideo from './MainPageVideo';
import MainPageAbout from './MainPageAbout';
import MainPagePhoto from './MainPagePhoto';

class App extends Component {
  render() {
    return (
      <div>
          <NavBar />
          <div className="row spacer"></div>
        <div className="row">
          <MainPageVideo />
          <MainPageAbout />
          <MainPagePhoto />
        </div>
      </div>
    );
  }
}

export default App;
