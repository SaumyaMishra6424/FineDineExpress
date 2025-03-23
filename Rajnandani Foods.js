import React, { useState } from 'react';  
import { useOutletContext } from "react-router";
const RajnandaniFoods= () => {  
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
            <img src="https://i.pinimg.com/236x/dd/8f/9c/dd8f9ccb117bb4e8751d7659092bce77.jpg" alt="Sweets Item"/>  
            <h1>RajnandaniFoods</h1>  
            <h2>Menu</h2>  
            <ul>  
                <li>  
                    Sweets 
                    <button style={buttonStyle} onClick={() => addToCart('Sweets')}>Add to Cart</button>  
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

export default RajnandaniFoods;  