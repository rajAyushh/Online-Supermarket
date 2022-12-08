import React, { useEffect, useState } from 'react'
import "./Payment.css"
import { useNavigate } from "react-router-dom";
import PdfGenerator from "../reports";


export default function Payment() {
    const navigate = useNavigate();
    const [total, setTotal] = useState(0)
    const [arr, setArr] = useState([]);
    let cartItemsRetreieved;

    const getAllItems = async () => {
        var retrievedData = localStorage.getItem("cartItems");
        if(retrievedData == undefined || retrievedData == null)
        {
            return (
                'No Data'
            )
        }else{
        cartItemsRetreieved = await JSON.parse(retrievedData);
        // getTotal(cartItemsRetreieved);
    }
        setArr(cartItemsRetreieved);
        getTotal(cartItemsRetreieved)
        // console.log(cartItemsRetreieved)
      };

      const getTotal = (array) => {
        let value = 0;
        for (let i = 0; i < array.length; i++) {
          value += array[i].price * array[i].quantity;
        }
        setTotal(value)
      };

      useEffect(() => {
        getAllItems();
      }, []);
      
  return (
    <>
    <div className='mainorder'>
        <div style={{fontSize: '20px', fontWeight: 'bold', marginBottom: '25px'}}>Order Summary</div>
        {arr.map((item)=>{
            return(
            <div className='orderitems'>
            Item Name: {item.name} <br/>
            Quanity: {item.quantity}
            <div>Price: {item.price * item.quantity}</div>
        </div>
            )
        })}
        <div style={{textAlign: 'right', marginTop:'20px'}}>
            Tax: ₹150<br/>
            Shipping: ₹100<br/>
            Total: ₹{total + 10 + 100}
        </div>
        <button className="final">
            Pay Amount
        </button>
    </div>
        <PdfGenerator data={arr}/>
    </>
  )
}
