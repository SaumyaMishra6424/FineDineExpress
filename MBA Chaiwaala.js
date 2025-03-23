import React, { useState } from 'react';  
import { useOutletContext } from "react-router";
const MBAChaiwaala = () => {  
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
            <img src="https://img.freepik.com/premium-photo/masala-chai-samosa-cup-fragrant-masala-chai-tea-paired_974629-175121.jpg?w=360" alt="Snacks Item"/>  
            <h1>MBA Chaiwala</h1>  
            <h2>Menu</h2>  
            <ul>  
                <li>  
                    Chai
                    <button style={buttonStyle} onClick={() => addToCart('Chai')}>Add to Cart</button>  
                </li>  
                <li>  
                    Samosa   
                    <button style={buttonStyle} onClick={() => addToCart('Samosa')}>Add to Cart</button>  
                </li>  
            </ul>  
            {message && <p style={messageStyle}>{message}</p>}  
        </div>  
    );  
};  

export default MBAChaiwaala;  