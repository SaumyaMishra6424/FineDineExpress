
import React from 'react';  
import { useOutletContext } from "react-router"; // Use context to receive cart  

const Cart = () => {  
    const { cart } = useOutletContext(); // Access cart from context  

    return (  
        <div>  
            <h2>Your Cart</h2>  
            {cart.length === 0 ? (  
                <p>Your cart is empty.</p>  
            ) : (  
                <ul>  
                    {cart.map((item, index) => (  
                        <li key={index}>{item}</li>  
                    ))}  
                </ul>  
            )}  
        </div>  
    );  
};  

export default Cart;  