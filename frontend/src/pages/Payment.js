import React from 'react'
import "./Payment.css"
export default function Payment() {
  return (
    <div className='mainorder'>
        <div style={{fontSize: '20px', fontWeight: 'bold', marginBottom: '25px'}}>Order Summary</div>
        <div className='orderitems'>
            Item Name: Laptop <br/>
            Quanity: 2
            <div>Price: $1000</div>
        </div>
        <div className='orderitems'>
            Item Name: Mobile <br/>
            Quanity: 1
            <div>Price: $800</div>
        </div>
        <div style={{textAlign: 'right', marginTop:'20px'}}>
            Tax: $100<br/>
            Shipping: $10<br/>
            Total: $1910
        </div>
        <button className="final">
            Pay Amount
        </button>
    </div>
  )
}
