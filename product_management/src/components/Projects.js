import React from 'react'
import "antd/dist/antd.min.css";
//import { Carousel } from 'antd';
import {Table} from "antd";
import { useState,useEffect } from 'react';
import axios from 'axios';
import { Button,Menu,Space,Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';

import { useNavigate } from "react-router-dom";
//import { padding } from '@mui/system';
//import { param } from '../../../Routes/Product';
export default function Projectss() {
  <></>
  const navigate=useNavigate();
  const [product, setProduct] = useState([]);
  

  useEffect(() => {
    
    axios.get("/all")
      .then(res=>setProduct(res.data))
    .then(err=>console.log(err))
  },[])
  
  const handleMenuClick = (e) => {
  

   axios.get("/getMonth",  {params: {
    foo:e.key,
  },})
      .then(res=>setProduct(res.data))
      .then(err=>console.log(err))
};

const menu = (
  <Menu
    onClick={handleMenuClick}
    items={[
      {
        label: 'January',
        key: 'Jan',
      
      },
      {
        label: 'February',
        key: 'Feb',
        
      },
      {
        label: 'March',
        key: 'Mar',
        
      },
      {
        label: 'April',
        key: 'Apr',
      
      },
      {
        label: 'May',
        key: 'May',
      
      },
      {
        label: 'June',
        key: 'Jun',
        
      },
      {
        label: 'July',
        key: 'Jul',
    
      },
      {
        label: 'August',
        key: 'Aug',
        
      },
      {
        label: 'September',
        key: 'Sep',
      
      },
      {
        label: 'October',
        key: 'Oct',
        
      },
      {
        label: 'November',
        key: 'Nov',
      
      },
      {
        label: 'December',
        key: 'Dec',
        
      },

    ]}
  />
);

  
    const columns = [
      {
        title: 'Code',
        dataIndex: 'code',
        
      },
      {
        title: 'Name',
        dataIndex: 'name',
        
      },
      {
        title: 'Qty',
        dataIndex: 'qty',
  
      },
      {
        title: 'Price',
        dataIndex: 'price',
  
      },
      {
        title: 'Status',
        dataIndex: 'status',
        
        render: (_,payload) =>
        { let col="Empty" ;
          const l =payload.status;
  
          if(payload.status==='active')
          {
            col="green";
          }
          if(payload.status==='inactive')
          {
            col="red";
          }
  
           
          return <p style={{marginTop:"11px",color:col}}>{l}</p>
        }
   
        
      },
      {
        title: 'Date Added',
        dataIndex: 'date',
        
      },
    ];
    
  
    
    return (
      <div style={{
        display: 'block', width: 1450,height:900, padding: 30 ,backgroundColor:"lightgray" 
        
      }}>
        <div style={{width: 1450}} >
        <h2 style={{paddingLeft:"150px"}}>Projects  
        
        <Button type='Primary' shape="round" onClick={() => navigate("/product/add") }>
        + 
      </Button> 
      
      
      <Dropdown style={{padding:70}} overlay={menu}>
      <Button>
        <Space>
          This Month
          <DownOutlined />
        </Space>
      </Button>
    </Dropdown>
      
      
      </h2>
        </div>
        
      


      
  
        
      
      
  
    
  
    <Table style={{paddingLeft:"150px"}} dataSource={product} columns={columns} pagination={{pageSize:7}} />;
  
     
  
  
  
  
  
        
      </div>
    );
  }
