import {Route,Routes} from "react-router-dom";
import Welcome from "../components/Welcome";
import Projectss from "../components/Projects";
import AddProduct from "../components/AddProduct";
export function Content()
{
  return(
    <div>
      <Routes>
      <Route path="/" element={<Welcome/>}></Route>
        <Route path="/home" element={<Welcome/>}></Route>
        <Route path="/projects" element={<Projectss/>}></Route>
        <Route path="/setting" element={<div style={{backgroundcolor:"lightgray"}}>Settings</div>}></Route>
        <Route path="/product/add" element={<AddProduct/>}></Route>
      </Routes>
    </div>
  )
}
