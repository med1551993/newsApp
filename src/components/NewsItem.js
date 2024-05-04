import React from "react";
import news_image from "../assets/news_picture.jpg";
const NewsItem = ({ article }) => {
  return (
   
    <div className="card bg-dark text-light" style={{ maxWidth: "400px" }}>
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
        <div>
          <a href={article.url} className="btn btn-primary">
            Read More
          </a>
        </div>
      </div>
    </div>
  
  );
};

export default NewsItem;
