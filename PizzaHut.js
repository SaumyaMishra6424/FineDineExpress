import React, { useState } from 'react';  
import { useOutletContext } from "react-router";
const PizzaHut = () => {  
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
            <img src="https://w7.pngwing.com/pngs/549/677/png-transparent-pizza-illustration-pizza-margherita-vegetarian-cuisine-paneer-tikka-vegetable-pizza-food-recipe-cheese.png" alt="Italian Item"/>  
            <h1>Pizza Hut</h1>  
            <h2>Menu</h2>  
            <ul>  
                <li>  
                    Pizza 
                    <button style={buttonStyle} onClick={() => addToCart('Pizza')}>Add to Cart</button>  
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

export default PizzaHut;  