
import React, { useState } from 'react';  
import { useOutletContext } from "react-router";
const KFC = () => {  
    const { cart, setCart } = useOutletContext();
    
    const [message, setMessage] = useState('');  

    const addToCart = (item) => {  
        setCart([...cart, item]);  
        setMessage(`${item} added to cart!`);  
    };  

    const buttonStyle = {  
        marginLeft: '10px',  
        marginTop: '10px',  
        marginBottom: '10px', 
         
        padding: '10px 15px', 
        backgroundColor: '#F5A623', 
        color: 'white',  
        border: 'none', 
        borderRadius: '5px',  
        cursor: 'pointer', 
    };  

    const messageStyle = {  
        color: 'darkblue', 
    };  

    return (  
        <div className="image-container">  
            <img src="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xs/D-PR00002686.jpg?ver=64.15" alt="KFC Item"/>  
            <h1>KFC</h1>  
            <h2>Menu</h2>  
            <ul>  
                <li>  
                    Chicken   
                    <button style={buttonStyle} onClick={() => addToCart('Chicken')}>Add to Cart</button>  
                </li>  
                <li>  
                    Cold drinks   
                    <button style={buttonStyle} onClick={() => addToCart('Cold drinks')}>Add to Cart</button>  
                </li>  
            </ul>  
            {message && <p style={messageStyle}>{message}</p>}  
        </div>  
    );  
};  

export default KFC;  