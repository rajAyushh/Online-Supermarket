import React from 'react'
import { useParams } from 'react-router-dom'
import "./CategoryProducts.css"
import ProductCard from '../components/ProductCard';

export default function CategoryProducts() {
    let {category} = useParams();
  return (
    <>
    <div className="heading">
        Shop from {category}'s Page!
    </div>
    <div className="mainpage">
        <div className="filter">
            <h5 style={{fontWeight: "bold"}}>Filters</h5>
            <div className="subcat">
                <p>Sub-Category</p>
                <input type="radio" id="laptop" name="subcategory" value="Laptop"/>
                <label for="laptop">Laptop</label><br/>
                <input type="radio" id="mobile" name="subcategory" value="Mobile"/>
                <label for="mobile">Mobile</label><br/>
                <input type="radio" id="accessories" name="subcategory" value="Accessories"/>
                <label for="accessories">Accessories</label>
            </div>
            <div className="price">
                <p>Sub-Category</p>
                <input type="radio" id="laptop" name="subcategory" value="Laptop"/>
                <label for="laptop">Laptop</label><br/>
                <input type="radio" id="mobile" name="subcategory" value="Mobile"/>
                <label for="mobile">Mobile</label><br/>
                <input type="radio" id="accessories" name="subcategory" value="Accessories"/>
                <label for="accessories">Accessories</label>
            </div>
        </div>
        <div className="productsinfo">
            <ProductCard category={category} itemname="Laptop XYZ" price="$1000" url="https://source.unsplash.com/300x300?laptop"/>
            <ProductCard category={category} itemname="Laptop ABC" price="$900" url="https://source.unsplash.com/300x300?pc"/>
            <ProductCard category={category} itemname="Laptop 999" price="$1200" url="https://source.unsplash.com/300x300?macbook"/>
            <ProductCard category={category} itemname="Laptop 999" price="$1500" url="https://source.unsplash.com/300x300?macbookpro"/>
            {/* <ProductCard itemname="Laptop 999" price="$1500"/> */}
        </div>
    </div>
    </>
  )
}
