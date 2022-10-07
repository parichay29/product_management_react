import React, { Component } from 'react';
//import { Menu } from 'antd';
//const SubMenu = Menu.SubMenu;
//const MenuItemGroup = Menu.ItemGroup;
import {  Space,Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';


class RightMenu extends Component {
  render() {
    return (
      <Space>
        <Avatar style={{color:'white',marginBottom:'10px'}} icon={<UserOutlined />} />
      <h1 style={{marginRight:'75%',color:'white',padding:"20px"}}>Admin</h1>
      
      </Space>
    );
  }
}export default RightMenu;