import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import "./Cartpage.css"
import Plate from './plate';

export default function Cartpage() {
    const navigate = useNavigate();
    let arr = [];
    // const rows=[];
    const [Tamount, setTamount] = useState(0);

    useEffect(() => {
        arr = [];
        let value = 0;
        var retrievedData = localStorage.getItem("cartItems");
        var cartItemsRetreieved = JSON.parse(retrievedData);
        for(let i=0 ; i<cartItemsRetreieved.length; i++){
            arr.push(cartItemsRetreieved[i]);
            value += cartItemsRetreieved[i].price;
            document.getElementById('cartitems').innerHTML += `<div class="arritems">
            <div class="cartpart1">
            <p>Item Name: ${arr[i].name}</p>
            <p>Item Quantity: ${arr[i].quantity}</p>
            </div>
            <div class = "cartpart2">
            Amount: ${arr[i].price}
            </div>
            </div>`
            console.log(arr[i])
            // rows.push();
        }
        setTamount(value);
    }, [])
    if(arr.length == null){
        return (
            <>
            <div>No Elements</div>
            </>
        )
    }else{
        return (
            <>
    <div style={{minHeight: "60vh", margin: "30px auto", width:"80vw"}}>
    <div id="cartitems">
        {/* {console.log(arr)}
        {arr.map((i)=>{
            <Plate name={arr[i].name} quantity={arr[i].quantity} price={arr[i].price} delete={deleteIt} key={i}/>
        })}
        <Plate/> */}
    </div>
    <div >
    <div className='cartamount' style={{textAlign: 'right'}}>
        Total Amount: ${Tamount}
    </div>
    <button className="buynow" onClick={()=>{navigate("/payment")}}>
            Buy Now
    </button>
    </div>
    </div>
    </>
  )
 }}

// async function getData(arr){
    
//     // return Tamount;
// }
function deleteIt(){
    console.log('kjkjh')
}
