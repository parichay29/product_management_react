
import React from 'react';
import "antd/dist/antd.min.css"
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { Form, Button, Input,Switch} from "antd";


function AddProduct() {
  
   
  const navigate=useNavigate();

    const onFinish1=(e)=>
    {    
      const timeElapsed = Date.now();
      const today = new Date(timeElapsed);
      const datee=today.toDateString();
      const dateee=datee.substring(4,datee.length)
    
       let stat
      if(e.Status)
      stat="active";
      else
      stat="inactive";

        
       let state = {
        code:e.productCode,
        name:e.fullName,
        qty:e.quantity,
        price:e.Price,
        status:stat,
        date:dateee

       }
        
        axios.post("/new",state)
        .then(()=>alert(`Product Added Succesfully`)
        )
        
        .catch(err=>console.log(err))
    }
  

  return (
    
    <>   
    <div style={{paddingLeft:"50px",paddingTop:"50px",backgroundColor:"lightgray",height:"650px",width:"1450px"}} >
    <h1 style={{marginLeft:"750px"}} >New Products</h1>
      <header >
        <Form onFinish={onFinish1}
          autoComplete="off"
          labelCol={{ span: 10 }}
          wrapperCol={{ span: 14 }}
          
        
          onFinishFailed={(error) => {
            console.log({ error });
          }}
        >
          
      
          <Form.Item 
            name="productCode"
            label="Product Code"
            rules={[
              {
                required: true,
                message: "Please enter Product Code",
              },
              { pattern:/[0-9]/,
                 message: "Please enter a valid Product Code" },
            ]}
            hasFeedback
          > 
            <Input  style={{width:"500px"}} />
          </Form.Item>

          <Form.Item  
            name="fullName"
            label="Full Name"
            rules={[
                {
                  required: true,
                  message: "Please enter Full Name",
                },
                {
                    pattern:/[A-Za-z]/,
                    message:"Please enter a valid Full Name"
                    
                }
                
            
              ]}
            hasFeedback
          >
            <Input style={{paddingLeft:"-1000px",marginTop:"10px",width:"500px"}}  />
          </Form.Item>

          <Form.Item
            name="quantity"
            label="Quantity"
            rules={[
              {
                required: true,
              },
              { min: 1 },
              {
                pattern:/[0-9]/,
                message: "Please enter a valid Quanity" },
              
            ]}
            hasFeedback
          >
            <Input style={{paddingLeft:"-1000px",marginTop:"10px",width:"500px"}}  />
          </Form.Item>

          <Form.Item
            name="Price"
            label="Price"
            rules={[
              {
                required: true,
                message: "Please provide Price"},
                {
                pattern:/[0-9]/,
                message:"Please Provide Correct price"
              },
            ]}
            hasFeedback
          >
          <Input style={{paddingLeft:"-1000px",marginTop:"10px",width:"500px"}} />
          </Form.Item>


          <Form.Item name="Status" label="Status" requiredMark="required">
            
          <Switch checkedChildren='Active' unCheckedChildren='Inactive'   name="status" style={{width:"100px",height:"25px"}}/>    
          </Form.Item>


    

          <Button onClick={() => navigate("/projects")} style={{marginLeft:"500px",marginTop:"100px"}} >Cancel</Button>
        <Button type='primary' htmlType='submit' style={{marginLeft:"30px"}}> Submit</Button>
          
        </Form>

      </header>
    </div>
    </>
  );
}

export default AddProduct;