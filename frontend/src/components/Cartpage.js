import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Cartpage.css";
import Plate from "./plate";

export default function Cartpage() {
  const navigate = useNavigate();
  const [arr, setArr] = useState([]);
  let cartItemsRetreieved;
  const [Tamount, setTamount] = useState(0);

  const getCartItems = async () => {
    var retrievedData = localStorage.getItem("cartItems");
    if(retrievedData == undefined || retrievedData == null)
    {
        return (
            'No Data'
        )
    }else{
    cartItemsRetreieved = await JSON.parse(retrievedData);
    setArr(cartItemsRetreieved);
    getTotal(cartItemsRetreieved);
    }
    // console.log(cartItemsRetreieved)
  };

  const getTotal = (array) => {
    let value = 0;
    for (let i = 0; i < array.length; i++) {
      value += array[i].price * array[i].quantity;
    }
    setTamount(value);
  };

  const deleteItem = (index) => {
    arr.splice(arr[index],1);
    setArr(arr);
    console.log(arr)
    updateLocal(arr);
    getTotal(arr);
  }

  const updateLocal = (array) => {
    localStorage.removeItem("cartItems");
                            localStorage.setItem(
                              "cartItems",
                              JSON.stringify(array)
                            );
  }

  useEffect(() => {
    getCartItems();
  }, []);
    return (
      <>
        <div
          style={{
            minHeight: "60vh",
            margin: "30px auto",
            width: "80vw",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <div className="cartName">
            <i className="bi bi-cart-fill"></i>Cart Items
          </div>
          <div id="cartitems">
            {arr.map((item) => {
              return (
                <div class="arritems" key={item.name}>
                  <div class="cartpart1">
                    <p>Item Name: {item.name}</p>
                    {/* <p>Item Quantity: {item.quantity}</p> */}
                    <label style={{ margin: "5px 0 0 5px" }} htmlFor="quantity">
                      Item Quantity:
                      <input
                        type="text"
                        onChange={(e) => {
                          if (
                            e.target.value == undefined ||
                            e.target.value == NaN
                          ) {
                            item.quantity = "0";
                          } else {
                            item.quantity = e.target.value;
                            console.log(item);
                            setArr(arr);
                            updateLocal(arr);
                            getTotal(arr);
                          }
                        }}
                        name="quantity"
                        style={{
                          width: "25px",
                          marginLeft: "5px",
                          height: "50%",
                        }}
                        defaultValue={parseInt(item.quantity)}
                      />
                    </label><br/>
                    <button onClick={()=>{deleteItem(arr.indexOf(item))}} className="cartdelete"><i className="bi bi-trash3-fill"></i></button>
                  </div>
                  <div class="cartpart2">
                    Amount: ₹{item.price * item.quantity}
                  </div>
                </div>
              );
            })}
          </div>
          <div>
            <div className="cartamount">Total Amount: ₹{Tamount}</div>
            <button
              className="buynow"
              onClick={() => {
                navigate("/payment");
              }}
            >
              Buy Now
            </button>
          </div>
        </div>
      </>
    );
  }