
import React, { useState } from "react";  
import { Link } from "react-router";
 



const restaurants = [  
  {  
    resName: "Meghana Foods",  
    Food: "Chinese",  
    Ratings: 4.5,  
    Delivery: "38 minutes",  
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrSodh2_bz3T_LLA16yP9WdpyAoAUkC5-TdA&s",  
    
  },  
  {  
    resName: "KFC",  
    Food: "Italian",  
    Ratings: 4.8,  
    Delivery: "40 minutes",  
    image:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xs/D-PR00002686.jpg?ver=64.15"
  },
  { resName: "Burger King", Food: "American", Ratings: 4.3, Delivery: "25 minutes" , image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmrD43KBktCBvB8RCm2i4XCp17Ya_7j-A8AQ&s",}, 
  { resName: "Gopal Foods", Food: "Indian Sweets", Ratings: 4.5, Delivery: "38 minutes",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtz5AqePOLmPtloyyqIMZd1O9P4aM4FeUO07dDOKyu_Am3ak_l795MlPYMp1lbdtUt1LU&usqp=CAU"},
  
  
{ resName: "Taaj", Food: "Chinese", Ratings: 3.5, Delivery: "38 minutes",image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbraxcrwyTU7qAtXo7sDB9k89SBR80m-2xcspYqj6JqTAyRyg3cnjS_AKDrJqATlPVKmU&usqp=CAU"},  
  { resName: "Rajnandani Foods", Food: "Indian Sweets", Ratings: 4.5, Delivery: "38 minutes" ,image :"https://i.pinimg.com/236x/dd/8f/9c/dd8f9ccb117bb4e8751d7659092bce77.jpg"},  
  
  { resName: "Swarnima Foods", Food: "Indian", Ratings: 4.5, Delivery: "38 minutes",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgMKExkyxTqH3aoQhl33E-10CtNntpvgdapQ&s" },  
  { resName: "MBA Chaiwaala", Food: "Chai & Samosa", Ratings: 4.6, Delivery: "38 minutes",image :"https://img.freepik.com/premium-photo/masala-chai-samosa-cup-fragrant-masala-chai-tea-paired_974629-175121.jpg?w=360"} ,
  { resName: "Pizza Hut", Food: "Italian", Ratings: 4.2, Delivery: "30 minutes",image:"https://w7.pngwing.com/pngs/549/677/png-transparent-pizza-illustration-pizza-margherita-vegetarian-cuisine-paneer-tikka-vegetable-pizza-food-recipe-cheese.png" } 
  
 
];  

const RestaurantCard = ({ resName, Food, Ratings, Delivery, image }) => {  
 return (  
   
   <div className="restaurant-card">  
    <img src={image} alt={resName} className="restaurant-image" />  
     <h3>{resName}</h3>  
    <p>Food Type: {Food}</p>  
    <p>Ratings: {Ratings}</p>  
   <p>Delivery Time: {Delivery}</p>  
  </div>  
  );  
};  



const Body = () => {  
  const [searchTerm, setSearchTerm] = useState("");  
  const [showTopRated, setShowTopRated] = useState(false);  

  const toggleTopRated = () => setShowTopRated(prev => !prev);  

  const filteredRestaurants = restaurants.filter(restaurant =>  
    restaurant.resName.toLowerCase().includes(searchTerm.toLowerCase()) ||  
    restaurant.Food.toLowerCase().includes(searchTerm.toLowerCase())  
  );  

  const topRatedRestaurants = restaurants.filter(restaurant => restaurant.Ratings > 4.5);  

  const displayedRestaurants = showTopRated ? topRatedRestaurants : filteredRestaurants;  

  return (  
    <div>  
      
         
       
      <header style={{ textAlign: 'center', marginBottom: '20px' }}>  
        
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '20px' }}>  
          <input   
            type="text"  
            placeholder="Search for restaurants or food..."  
            value={searchTerm}  
            onChange={(e) => setSearchTerm(e.target.value)}  
            style={{  
              padding: "10px 40px",  
              width: "400px",  
              height: "20px",  
              borderRadius: "20px",  
              border: "1px solid #ccc",  
              outline: "none",
              border: "2px solid #005f8c",
              backgroundColor: "#e0f7fa", 
            }}  
          />  
          
        </div> 
      </header>  
      
   
      <div style={{ margin: "20px 0" }}>  
        <button onClick={toggleTopRated}>  
          {showTopRated ? "Show All Restaurants" : "Top Rated Restaurants"}  
        </button>  
      </div>  

      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "flex-start" }}>  
        {displayedRestaurants.map((restaurant) => (  
          <Link   
            to={`/${restaurant.resName.replace(/\s+/g, '')}`}   
            key={restaurant.resName}   
            style={{ textDecoration: 'none' }}  
          >   
            <div style={{ margin: "20px", padding: "10px", width: "300px", textAlign: "center" }}>  
              <img  
                src={restaurant.image}  
                alt={restaurant.resName}  
                style={{ width: "200px", height: "200px", transition: "transform 0.2s" }}  
                className="restaurant-image"  
              />  
              <h2>{restaurant.resName}</h2>  
              <p>Food Type: {restaurant.Food}</p>  
              <p>Ratings: {restaurant.Ratings}</p>  
              <p>Delivery: {restaurant.Delivery}</p>  
            </div>  
          </Link>  
        ))}  
      </div>  
    </div>  
  );  
};  




    
  const style = document.createElement('style');  
  style.innerHTML = `  
  .restaurant-image:hover {  
    transform: scale(1.1); // Scale image to 110%  
  }  
  `;  
  document.head.appendChild(style);  







  export default Body;  