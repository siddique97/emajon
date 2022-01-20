import React, { useState } from 'react';
import './Shop.css';
import PostData from '../../fakeData/products.json';
import Card from '../ProductCard/Card';
import Order from '../OrderList/Order';

const Shop = () => {
     const [order,setOrder]=useState([])
     const showData=PostData.slice(0,10)
     const addProduct=(product)=>{

        setOrder([...order,product]);
        console.log(order.length)
           
     }
    return (
        <>
         <div className="container box">
         <div className="product_container">
         {
            showData.map(value=>{

                return <Card Products={value} addProduct={addProduct}/>
            })
        }
         
         </div>
        <div className="order_summery">
        
       
        <Order ord={order}/>
        
        
        </div>
         
         
         </div>
       

            
        </>
    )
}

export default Shop
