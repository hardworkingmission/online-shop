import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faTrash } from '@fortawesome/free-solid-svg-icons'
import { totalCost, totalTax } from '../../utilities/calculation';
import './Cart.css'

const Cart = ({cart}) => {
    let totalPrice=0;
    let shipping=0;
    let tax=0;
    let quantity=0;
    let grandTotal=0;
    for(const product of cart){
        totalPrice+=product.price*product.quantity
        shipping+=product.shipping
        quantity+=product.quantity

    }
    tax=totalTax(totalPrice)
    grandTotal=totalCost(totalPrice,shipping,tax)
    console.log(cart)
    return (
        <div className='cart'>
            <h1 className='text-center'>Order Summary</h1>
            <div className='px-3 mt-3'>
                <p>Selected Items:{quantity}</p>
                <p>Total Price:${totalPrice}</p>
                <p>Total Shipping Charge:${shipping}</p>
                <p>Tax:${tax}</p>
                <h4>Grand Total:${grandTotal}</h4>
            </div>
            <button className="btn btn-danger w-100 mt-3 text-white">Clear Items <FontAwesomeIcon icon={faTrash} /></button>
            <button className='btn btn-warning w-100 mt-3 text-white'>Review Order <FontAwesomeIcon icon={faArrowRight}/></button>            
            
        </div>
    );
};

export default Cart;