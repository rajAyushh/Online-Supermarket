import React, { useEffect, useState } from "react";
import SideBar from "../components/SideBar";
import "./Profile.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Profile() {
  let navigate = useNavigate();
  const [customer, setCustomer] = useState({
    "user_id": "",
    "user_name": "",
    "user_password": "",
    "user_address": "",
    "user_phone": "",
    "wallet_balance": 0,
    "user_email": ""
  })
  
  useEffect(() => {
    getUsers();
  }, [])
  
  const onInputChange = (e) => {
    setCustomer({
      ...customer,
      [e.target.name]: e.target.value,
    });
  };

  const getUsers = async (e) => {
    const res = await axios.get("http://localhost:8080/user/471ec095-f7fe-4394-b1e4-4843789d5f26")
    // console.log(res.data);
    setCustomer(res.data)
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.put("http://localhost:8080/user/471ec095-f7fe-4394-b1e4-4843789d5f26", customer);
    navigate("../home");
  };

  function handleCancel() {
    navigate("../home");
  }

  return (
    <div style={{ display: "flex" }}>
      <SideBar />
      <div className="profilecard">
        <h1>Edit Profile</h1>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              margin: "-10px auto",
            }}
          >
            <label style={{ marginTop: "2rem" }}>Name</label>
            <input
              style={{ width: "30vw" }}
              type="text"
              // value={product_name}
              defaultValue={customer.user_name}
              name="user_name"
              onChange={(e) => onInputChange(e)}
              // placeholder='Enter product name'
            />

            <label style={{ marginTop: "2rem" }}>Email Address</label>
            <input
              style={{ width: "30vw" }}
              type="text"
              defaultValue={customer.user_email}
              // value={desc}
              name="user_email"
              onChange={(e) => onInputChange(e)}
              // placeholder='Enter product description'
            />

            <label style={{ marginTop: "2rem" }}>Mobile Number</label>
            <input
              style={{ width: "30vw" }}
              type="number"
              defaultValue={customer.user_phone}
              // value={product_url}
              name="user_phone"
              onChange={(e) => onInputChange(e)}
              // placeholder='Enter the url for product image'
            />

            <label style={{ marginTop: "2rem" }}>Address</label>
            <input
              style={{ width: "30vw" }}
              type="text"
              defaultValue={customer.user_address}
              // value={discount}
              name="user_address"
              onChange={(e) => onInputChange(e)}
              // placeholder='Enter product discount'
            />

            <label style={{ marginTop: "2rem" }}>Password</label>
            <input
              style={{ width: "30vw" }}
              type="password"
              defaultValue={customer.user_password}
              // value={days_to_deliver}
              name="user_password"
              onChange={(e) => onInputChange(e)}
              // placeholder='Enter the number of days for delivery'
            />
          </div>
          <div style={{ marginTop: "2rem" }}>
            <button className="addcatbutton"  type="submit" onClick={handleSubmit}>
              Submit
            </button>
            <button
              className="addcatbutton" 
              style={{ marginLeft: "10px", marginBottom: "30px" }}
              onClick={handleCancel}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
