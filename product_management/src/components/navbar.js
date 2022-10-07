import React, { Component } from 'react';
import "antd/dist/antd.min.css"
import "../App.css";
//import { NavLink } from 'react-router-dom';
//import LeftMenu from './LeftMenu'
import RightMenu from './RightMenu';


class Navbar extends Component {
  state = {
    current: 'mail',
    visible: false
  }
  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };onClose = () => {
    this.setState({
      visible: false,
    });
  };
    render() {
    return (
       <>
     
      <nav className="menuBar">
          <div className="logo">
            <a color='white' style={{padding:'20px'}} href="/#">Rubick.ai</a>
          </div>
          <div className="menuCon">
            <div className="leftMenu">

            </div>
            <div className="rightMenu">
              <RightMenu />

            </div>
            </div>
        </nav></>
    );
  }
}export default Navbar;