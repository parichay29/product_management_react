import React from "react";
import {Menu, Space} from "antd";
import "antd/dist/antd.min.css";
import Navbar from "./navbar";
import {Content} from "../Router/Routes";
//import{QuestionOutlined} from "@ant-design/icons/lib/icons";
import { useNavigate} from "react-router-dom";
//ExportOutlined,FileFilled,,CustomerServiceFilled,MobileFilled,

function Home() {
  const navigate = useNavigate(); 
 return(
  
  <Space>
    <div style={{width:'1550px'}}>   
       <Navbar/>
       <div style={{display:"flex",flexDirection:"row",marginBottom:"100px",width:'200px'}}>
         <Menu 
 onClick={({key})=>
 {
  if(key==="signout")
  {

  }
  else
  {
    navigate(key);
  }
 }} 
 mode="inline" items={[
  
{label:"Home" , key:"/home"},
{label:"Projects" , key:"/projects",
//children:[
 // {label:"Project 1",key:"/project1",icon:<DollarCircleOutlined />},
 // {label:"Project 2",key:"/project2",icon:<MoneyCollectTwoTone />}
//]
},
{label:"Settings" , key:"/setting"},
{ label:"" , key:"/edit_profile"},//edit profile

{label:"" , key:"/signout",danger:true}//signout


 ]}>
</Menu>
<Content/>

</div>

</div>
</Space>


 );
}



export default Home;