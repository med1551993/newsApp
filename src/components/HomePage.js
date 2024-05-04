import React from "react";
import image from "../assets/news_picture.jpg";
const HomePage = () => {
  return (
 
        <div className="flex container">
            <div className="">
                <img src={image} alt="" className=""/>
            </div>

            <div className="flex1">
                <img src={image} alt="" className="w-100"/>  
                <img src={image} alt="" className="w-100"/>  
            </div>

            <div className="flex1">
                <img src={image} alt="" className="w-100"/>  
                <img src={image} alt="" className="w-100"/>  
            </div>
        </div>
  
    


  );
};

export default HomePage;
