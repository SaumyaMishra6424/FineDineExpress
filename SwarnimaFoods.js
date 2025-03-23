import React, { useState } from 'react';  
import { useOutletContext } from "react-router";
const SwarnimaFoods = () => {  
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
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgMKExkyxTqH3aoQhl33E-10CtNntpvgdapQ&s" alt="Indian Item"/>  
            <h1>SwarnimaFoods</h1>  
            <h2>Menu</h2>  
            <ul>  
                <li>  
                    Roti Sabji 
                    <button style={buttonStyle} onClick={() => addToCart('Roti Sabji')}>Add to Cart</button>  
                </li>  
                <li>  
                    Chawal-Daal  
                    <button style={buttonStyle} onClick={() => addToCart('Chawal-Daal')}>Add to Cart</button>  
                </li>  
                <li>  
                    Allo ka Paratha  
                    <button style={buttonStyle} onClick={() => addToCart('Allo ka Paratha')}>Add to Cart</button>  
                </li> 
                <li>  
                    Chola-Bhatura 
                    <button style={buttonStyle} onClick={() => addToCart('Chola Bhatura')}>Add to Cart</button>  
                </li> 
                <li>  
                    Chatni 
                    <button style={buttonStyle} onClick={() => addToCart('Chatani')}>Add to Cart</button>  
                </li> 
                <li>  
                    Puri Sabji 
                    <button style={buttonStyle} onClick={() => addToCart('Puri Sabji')}>Add to Cart</button>  
                </li> 
                <li>  
                    Salads 
                    <button style={buttonStyle} onClick={() => addToCart('Salads')}>Add to Cart</button>  
                </li> 
            </ul>  
            {message && <p style={messageStyle}>{message}</p>}  
        </div>  
    );  
};  

export default SwarnimaFoods;  