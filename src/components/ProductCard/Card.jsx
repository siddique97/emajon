import React from 'react'
import './Card.css';

const Card = (props) => {
    const {name,img,seller,price,stock}=props.Products
    return (
        <>
            <div className="card_box">
            
            <div><img src={img} alt="" /></div>
            <div className='card_description'>
            <h4>{name}</h4> 
            <br/>
            <p>by:{seller}</p> 
            <p>${price}</p>
            <p>Only left in {stock} order soon</p>          
            <br/>
            <button className='btn' onClick={()=>props.addProduct(props.Products)}><i class="fad fa-shopping-cart"></i> Add To Card</button>
            
            </div>
            
            
            </div>
        </>
    )
}

export default Card
