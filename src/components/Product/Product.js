import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css'

const Product = ({product,handleAddToCart}) => {
    //console.log(product)
    const {name,img,price,ratings,seller}=product
    return (
        <div className='col'>
            <div className="card">
                <img src={img} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">Seller: {seller}</p>
                    <p><strong>Price: {price}</strong></p>
                    <i>Ratings:{ratings} stars</i>
                </div>
                <button className='cart-button' onClick={()=>handleAddToCart(product)}>Add to Cart <FontAwesomeIcon icon={faShoppingCart} /></button>
            </div>
        </div>
    );
};

export default Product;