import React from "react";
import news_image from "../assets/news_picture.jpg";
import { MdReadMore } from "react-icons/md";

const NewsItem = ({ article }) => {
  return (
   
    <div className="card bg-white text-dark border-0 shadow" >
      <img
        src={article.urlToImage ? article.urlToImage : news_image}
        style={{ height: "200px" }}
        className="card-img-top"
        alt={article.title}
      />
      <div className="card-body">
        <div>
          <h5 className="card-title">{article.title.slice(0, 50)}</h5>

          <p className="card-text">
            {article.description
              ? article.description.slice(0, 90) + "..."
              : "It is information about something that has just happened"}
          </p>
        </div>
        <div className="mt-4">
          <a href={article.url} target="_blank" className="card-link text-decoration-none text-secondary">
            Read More <MdReadMore size={30}/>
          </a>
        </div>
      </div>
    </div>
  
  );
};

export default NewsItem;
