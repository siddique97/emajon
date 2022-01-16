import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <>
            <header>
                    <div className="header_image">
                        <img src="images/logo.png" alt="" />
                    </div>
                    <nav>
                       <div className='container'>
                        <a href='#'>Shop</a>
                        <a href='#'>Order Review</a>
                        <a href='#'>Manage Inventory</a>
                        </div>
                    </nav>
            
            </header>
        </>
    )
}

export default Header
