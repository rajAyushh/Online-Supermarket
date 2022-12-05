import React from 'react'

export default function Plate(props) {
    let {name,quantity,price,deleteIt} = props;
  return (
    <div>
        <div class="arritems">
            <div class="cartpart1">
            <p>Item Name: {name}</p>
            <p>Item Quantity: {quantity}</p>
            </div>
            <div class = "cartpart2">
            <button onClick={deleteIt}>But</button>
            Amount: {price}
            </div>
        </div>
    </div>
  )
}
