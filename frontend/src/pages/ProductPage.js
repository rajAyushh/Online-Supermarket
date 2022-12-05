import React from "react";
import { useParams } from "react-router-dom";
import "./ProductPage.css";
export default function ProductPage() {
  let { category, product } = useParams();
  // console.log(useParams())
  // let {itemname, itemid, url} = props;
  let itemname = "Laptop ABC";
  let url = "https://source.unsplash.com/800x800?laptop";
  return (
    <div className="main">
      <div className="itemimage">
        <img src={url} alt="Image of Item" />
      </div>
      <div className="productdetails">
        <h1>{itemname}</h1>
        <p className="price">MRP: </p>
        <p className="discountp">Discounted Price: </p>
        <label htmlFor="quantity">
          {" "}
          Quantity:
          <input type="text" name="quantity" id="quantity" />
        </label>
        <button className="addtocart">Add to Cart</button>
        <p className="success" style={{color: "green" ,fontWeight:"bold", fontSize: "18px"}}>In Stock</p>
        <label style={{marginBottom: "6px"}} htmlFor="delivery">Delivery: 
        <input type="text" name="delivery" id="delivery" placeholder="Enter your pincode"/>
        <button className="check">Check</button>
        </label>
        <p className="productdesc">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Exercitationem neque expedita ipsum, pariatur laudantium fuga.
          Ratione, distinctio debitis aliquam vitae eaque quidem nulla quisquam
          dicta ad eos tempora doloribus ea veritatis temporibus nam repellendus
          hic nihil, minima asperiores dolorum ab esse corporis iusto aliquid!
          Dolorum quam totam debitis ab nam.
        </p>
      </div>
    </div>
  );
}
