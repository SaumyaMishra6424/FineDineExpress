
import React, { useState } from "react";  
import { useOutletContext } from "react-router"; // Ensure import for Router Context  

const GopalFoods = () => {  
    const { cart, setCart } = useOutletContext(); // Access cart and setCart from context  
    const [message, setMessage] = useState('');  

    const addToCart = (item) => {  
        setCart([...cart, item]); // Add item to cart state  
        
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
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtz5AqePOLmPtloyyqIMZd1O9P4aM4FeUO07dDOKyu_Am3ak_l795MlPYMp1lbdtUt1LU&usqp=CAU" alt="Indian Sweets" />  
            <h1>Gopal Foods</h1>  
            <h2>Menu</h2>  
            <ul>  
                <li>  
                    Sweets  
                    <button style={buttonStyle} onClick={() => addToCart('Sweets')}>Add to Cart</button>  
                </li>  
                <li>  
                    Cold Drinks  
                    <button style={buttonStyle} onClick={() => addToCart('Cold Drinks')}>Add to Cart</button>  
                </li>  
            </ul>  
            {message && <p style={messageStyle}>{message}</p>}  
        </div>  
    );  
};  

export default GopalFoods;  



