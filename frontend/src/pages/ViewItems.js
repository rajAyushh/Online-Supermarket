import React from "react";
import SideBar_manager from "../components/SideBar_manager";
import { useNavigate } from "react-router-dom";
import "./ViewItems.css"
export default function ViewItems() {
    const navigate = useNavigate();

  return (
    <div style={{ display: "flex" }}>
      <SideBar_manager/>
      <div className="profilecard">
        <h1>My Products</h1>
        <div className="viewitemsmain">
            <div class="productcards">
            <div className="productimg">
                <img src="https://source.unsplash.com/150x150?clothes" alt="productimage" />
            </div>
            <div class="ppart1">
            <p style={{margin:'5px 2px'}}>Product Name: </p>
            <p style={{margin:'5px 2px'}}>Products Price: </p>
            <p style={{margin:'5px 2px'}}>Product Quantity Remaning: </p>
            <p style={{margin:'5px 2px'}}>Number of Orders: </p>
            </div>
            <div class = "ppart2">
                <button className="editbutton" onClick={()=>{navigate("/updateproduct")}}>Edit Product</button><br/>
                <button className="deletebutton">Delete Product</button>
            </div>
            </div>
        </div>
      </div>
    </div>
  );
}
