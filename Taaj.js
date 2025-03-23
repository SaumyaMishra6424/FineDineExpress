import React, { useState } from 'react';  
import { useOutletContext } from "react-router";
const Taaj = () => {  
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
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbraxcrwyTU7qAtXo7sDB9k89SBR80m-2xcspYqj6JqTAyRyg3cnjS_AKDrJqATlPVKmU&usqp=CAU" alt="Chinese Item"/>  
            <h1>Taaj</h1>  
            <h2>Menu</h2>  
            <ul>  
                <li>  
                    Chowemein  
                    <button style={buttonStyle} onClick={() => addToCart('Chowemein')}>Add to Cart</button>  
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

export default Taaj;  