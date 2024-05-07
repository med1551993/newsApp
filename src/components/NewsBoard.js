import React, { useEffect, useState } from "react";
import { API_KEY } from "../data";
import NewsItem from "./NewsItem";

const NewsBoard = ({ category }) => {
  const [articles, setArticles] = useState([]);

  async function getNews() {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${API_KEY}`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      setArticles(data.articles);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getNews();
  }, [category]);

  return (
    <div className="container my-4">
     
      <h2 className="text-center">
        Latest <span className="badge bg-danger">News</span>
      </h2>
      <div className="d-flex flex-row justify-content-center align-items-center flex-wrap gap-4">
        {articles.map((article, index) => (
          <NewsItem article={article} key={index} />
        ))}
      </div>
    </div>
  );
};

export default NewsBoard;
