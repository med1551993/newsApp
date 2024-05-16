import React from "react";
import NewsItem from "./NewsItem";
import Error from "../Error"
import Loading from "../Loading"
import {STATUS} from "../status"

const NewsBoard = ({ articles }) => {

  return (
    <div className="container" style={{marginTop:"80px"}}>
     
      <h2 className="text-center">
        Latest <span className="badge bg-danger">News</span>
      </h2>
      { articles.status === STATUS.ERROR ? <Error/> : null}
      { articles.status === STATUS.LOADING ? <Loading/> : null}
     
      <div className="board my-4">
        {articles.data.map((article, index) => (
          <NewsItem article={article} key={index} />
        ))}
      </div>
    </div>
  );
};

export default NewsBoard;
