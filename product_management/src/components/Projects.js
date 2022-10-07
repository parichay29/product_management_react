import React from 'react'
import "antd/dist/antd.min.css";
//import { Carousel } from 'antd';
import {Table} from "antd";
import { useState,useEffect } from 'react';
import axios from 'axios';
import { Button } from 'antd';

import { useNavigate } from "react-router-dom";
export default function Projectss() {
  <></>
  const navigate=useNavigate();
  const [product, setProduct] = useState([]);
  

  useEffect(() => {

    axios.get("/all")
      .then(res=>setProduct(res.data))
      .then(err=>console.log(err))
  })
      
    // const dataSource = [
    //   {
    //     code: '#3672',
    //     name: 'HP PAVILLION AMD',
    //     qty: 55,
    //     price:68500,
    //     s:'Active',
    //      date : '6 October',
    //   },
    //   {
    //     code: '#3673',
    //     name: 'H PAVILLION AMD',
    //     qty: 66,
    //     price:68500,
    //     s:'Inactive',
    //      date : '6 October',
    //   },
    // ];
    
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
        <h2 style={{paddingLeft:"150px"}}>Projects  <Button type='Primary' shape="round" onClick={() => navigate("/product/add") }>
        + 
      </Button> </h2>
      
        
       
      
  
    
  
    <Table style={{paddingLeft:"150px"}} dataSource={product} columns={columns} pagination={{pageSize:7}} />;
  
     
  
  
  
  
  
        
      </div>
    );
  }
