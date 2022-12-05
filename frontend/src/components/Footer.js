import React from 'react'
import "./Footer.css"
export default function 
() {
  return (
    <div className='footer'>
        <div className="part1">
            <ul>
                <li style={{fontWeight: "bold"}}>Categories</li>
                <li>Furniture</li>
                <li>Electronics</li>
                <li>Fitness</li>
                <li>KitchenWare</li>
            </ul>
            <ul style={{marginTop: "40px"}}>
                <li></li>
                <li>Baby Care</li>
                <li>Books</li>
                <li>Autoparts</li>
                <li>Industrial</li>
            </ul>
            <div className='part0'>
            <ul>
                <li style={{fontWeight: "bold"}}>Group 77</li>
                <li>Sheryans Soni</li>
                <li>Dhruv Jain</li>
                <li>Ayush Raj</li>
                <li>Samyak Goel</li>
                <li>Aditya Khandelwal</li>
            </ul>
        </div>
        </div>
        <div className="part2">
            <ul >
                <li style={{fontWeight: "bold"}}>Contact Us</li>
                <li>Facebook</li>
                <li>Email</li>
            </ul>
            <p>This is the Address, India.<br></br>Phone No.: +91 919191991</p>
            <p></p>
        </div>
       
    </div>
  )
}
