import React from 'react';
import {Link,Outlet}from 'react-router-dom'
import logo from '../../images/Logo.svg'
import './Header.css'

const Header = () => {
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light header">
                <div class="container">
                    <Link class="navbar-brand" to="/"><img className='img-fluid' src={logo} alt="" /></Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav ms-auto ">
                            <Link class="nav-link active text-white" aria-current="page" to="/shop">Shop</Link>
                            <Link class="nav-link text-white" to="/order">Order</Link>
                            <Link class="nav-link text-white" to="/inventory">Inventory</Link>
                            <Link class="nav-link text-white" to="/about">About</Link>
                        </div>
                    </div>
                </div>
            </nav> 
            <Outlet/>        
        </>

    );
};

export default Header;