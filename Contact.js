

const Contact = () => {  
    return (  
        <>
<div className="image-container">  
                     
                 
                     <img src = "https://static.vecteezy.com/system/resources/previews/027/830/030/large_2x/web-page-banner-of-famous-italian-food-recipes-on-clean-blue-background-ai-generated-free-photo.jpg"/>
                     </div> 
        
        
                <h1>Contact Us</h1> 
                
                


            
            {/* Form Section */}  
            <div className="contact-form">  
                <form>  
                    <div className="input-group">  
                        <label htmlFor="fullName">Full Name:</label>  
                        <input type="text" id="fullName" placeholder="Enter your full name" />  
                           
                    </div>  
                    <div className="input-group">  
                        <label htmlFor="email">Email Address:</label>  
                        <input type="email" id="email" placeholder="Enter your email address" />  
                    </div>  
                    <div className="input-group">  
                        <label htmlFor="phone">Phone No:</label>  
                        <input type="tel" id="phone" placeholder="Enter your phone number" />  
                    </div>  
                    <div className="input-group">  
                        <label htmlFor="message">Message:</label>  
                        <textarea id="message" placeholder="Type your message here"></textarea>  
                    </div>  
                    <button type="submit">Submit Feedback</button> 
                    
                </form>   
            </div>
          </>    
    );  
} ;

export default Contact;  


