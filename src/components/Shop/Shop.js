
import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'
import { addToDB, getStoredCart } from '../../utilities/shopDb';
import Cart from '../Cart/Cart';

const Shop = () => {
    const [products,setProducts]=useState([])
    const [cart,setCart]=useState([])
    useEffect(()=>{
        fetch('products.json')
            .then(res=>res.json())
            .then(data=>setProducts(data))
    },[])
    useEffect(()=>{
        const storedCart=getStoredCart()
        const savedCart=[]
        for(const id in storedCart){
            const storedProduct=products.find(product=>product.id===id)
            if(storedProduct){
                storedProduct.quantity=storedCart[id]
                savedCart.push(storedProduct)
            }
            console.log(storedProduct)
        }  
        setCart(savedCart)
    },[products])
    const handleAddToCart=(selectedProduct)=>{
        const exists=cart.find(product=>product.id===selectedProduct.id)
        if(exists){
            const rest=cart.filter(product=>product.id!==selectedProduct.id)
            exists.quantity+=1
            setCart([...rest,exists])
        }else{
            selectedProduct.quantity=1
            setCart([...cart,selectedProduct])
        }
        
        addToDB(selectedProduct.id)
    }
    console.log(cart)
    return (
        <div className='container mt-3'>
            <div className="row">
                <div className="col-lg-8 col-md-8 col-sm-12 col-12">
                    <div className="row row-cols-lg-3 row-cols-md-2 row-cols-sm-1 row-cols-1 g-4 ">
                        {
                            products.map(product=><Product key={product.id} product={product} handleAddToCart={handleAddToCart}/>)
                        }
                    </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12 col-12 order-summary">
                    <Cart cart={cart}/>
                </div>
            </div>
        </div>
    );
};

export default Shop;