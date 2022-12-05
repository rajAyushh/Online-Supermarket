import React from 'react'
import Navigbar from '../components/Navbar'
import "./home.css"
import Card from '../components/Card'
export default function Home() {
  return (
    <>
        {/* <Navigbar/> */}
        <div className="carousel"></div>
        <div className="allitems">
            <p>Shop By Catergory</p>
            <div className="container">
                <Card type="Furniture" url="https://source.unsplash.com/300x300?furniture" />
                <Card type="Sports" url="https://source.unsplash.com/300x300?sports" />
                <Card type="Electronics" url="https://source.unsplash.com/300x300?electronics"  />
                <Card type="Clothing" url="https://source.unsplash.com/300x300?clothing" />
                <Card type="Electronics" url="https://source.unsplash.com/300x300?electronics" />
                <Card type="Clothing" url="https://source.unsplash.com/300x300?clothing" />
                <Card type="Furniture" url="https://source.unsplash.com/300x300?furniture" />
                <Card type="Sports" url="https://source.unsplash.com/300x300?sports" />
                
            </div>
        </div>
    </>
  )
}
