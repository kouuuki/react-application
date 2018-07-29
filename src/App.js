import React, { Component } from 'react';
// import logo from './logo.svg';
import logo from './logo.png'
import Profile from './anime.jpeg'
import './App.css';

class Header extends Component {
  render() {
    return(
      <header>
        <Logo />
        <HeaderImage />
        <HeaderText />
      </header>
    );
  }
}

class Logo extends Component {
  render(){
    return(
      <img src={logo} id="logo"/>
    );
  }
}

class HeaderImage extends Component {
  render() {
    return(
      <div className="profile">
        <img src={Profile} id="profile-image"/>
      </div>
    );
  }
}

class HeaderText extends Component {
  render() {
    return(
      <div className="profile-text">
        <p>Reactで作成したポートフォリオ兼、遊び相手募集サイトです。</p>
      </div>
    );
  }
}

export default Header;
