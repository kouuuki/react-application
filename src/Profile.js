import React, { Component } from 'react';
import './profile.css';
import Image from './anime2.jpeg';

class Profile extends Component {
  render() {
    return(
      <div className="profile-description">
        <div className="runa">
          <div class="balloon1">
            <p className="buruburu">おきてええええええええ</p>
          </div>
          <img src={Image} className="runa-image"/>
        </div>
        <div className="profile-contents">
          <p>名前：<strong>さわ</strong></p>
          <p>※ 男です</p>
          <p>Twitter：<a href="https://twitter.com/Mark_Web8" target="_blank">Mark_Web8</a></p>
        </div>
      </div>
    );
  }
}

export default Profile;
