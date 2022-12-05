import React from "react";
import { useParams, Link , useNavigate} from "react-router-dom";
import "./ProductPage.css";

export default function ProductPage(props) {
  let { category, product } = useParams();
  // console.log(useParams())
  // let {itemname, itemid, url} = props;
  const navigate = useNavigate();
  let itemname = product;
  let url = "https://source.unsplash.com/800x800?laptop";
  let itemprice = 1000;
  return (
    <div className="main">
      <div className="itemimage">
        <img src={url} alt="Image of Item" />
      </div>
      <div className="productdetails">
        <h1>{itemname}</h1>
        <p className="price">MRP: ${itemprice}</p>
        <p className="discountp">Discounted Price: </p>
        <label htmlFor="quantity">
          {" "}
          Quantity:
          <input type="text" name="quantity" id="quantity" defaultValue = '1'/>
        </label>
        <button onClick={()=>{cartAddition(product,itemprice,navigate)}} className="addtocart">Add to Cart</button>
        <p className="success" style={{color: "green" ,fontWeight:"bold", fontSize: "18px"}}>In Stock</p>
        <label style={{marginBottom: "6px"}} htmlFor="delivery">Delivery: 
        <input type="text" name="delivery" id="delivery" placeholder="Enter your pincode"/>
        <button onClick={()=> {document.getElementById('del').innerHTML = "Delivery by " + new Date().toISOString()}} className="check">Check</button>
        </label>
        <p id="del"></p>
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

function cartAddition(product, itemprice,navigate){
  let quan = document.getElementById('quantity').value;
  // console.log(quan);
  let arr = [];
  let newValue = {
    'name': product,
    'quantity': quan,
    'price' : itemprice
  };
  if(quan == null || quan == 0){
    alert('Value cannot be 0');
  }else{
    var retrievedData = localStorage.getItem("cartItems");
    var cartItemsRetreieved = JSON.parse(retrievedData);
    console.log(cartItemsRetreieved)
    navigate("/cart")
    if(cartItemsRetreieved == null || cartItemsRetreieved == 0){
      arr.push(newValue);
      addtoLocal(arr);
    }
    else{
      for(let i=0 ; i<cartItemsRetreieved.length; i++){
        arr.push(cartItemsRetreieved[i]);
      }
      arr.push(newValue);
      addtoLocal(arr)
    }
  }

}

function addtoLocal(arr){
  localStorage.removeItem("cartItems");
  localStorage.setItem("cartItems", JSON.stringify(arr))
}
