import React from "react";
import NewsItem from "./NewsItem";

const NewsBoard = ({ articles }) => {


  return (
    <div className="container" style={{marginTop:"80px"}}>
     
      <h2 className="text-center">
        Latest <span className="badge bg-danger">News</span>
      </h2>
     {/*  <div className="d-flex flex-row justify-content-center align-items-center flex-wrap gap-4"> */}
      <div className="board my-4">
        {articles.map((article, index) => (
          <NewsItem article={article} key={index} />
        ))}
      </div>
    </div>
  );
};

export default NewsBoard;
