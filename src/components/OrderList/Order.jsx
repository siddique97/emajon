import React from 'react';
import './order.css'

const Order = (props) => {
    const order=props.ord
    const total=order.reduce((pre,cur)=>pre+cur.price,0);
    let shipping=0;
    let vat = 0;
    if(total > 50){

        shipping=15.99;
        vat=Math.round(total/ 100)
    }
  return <>
       
        <div className="order_details">
        <br/>
        <h3 className='h1'>Order summary</h3>
        <br/>
        <p>Total order:  {order.length}</p>
        <br/>
        <p>Shipping: {shipping}</p>
        <br/>
        <p>Vat: {vat}</p>
        <br/>
        <p>Total price: {total+shipping+vat}</p>
               
        
        </div>
  </>;
};

export default Order;
