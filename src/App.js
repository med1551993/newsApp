import "./App.css";
import React, { useEffect, useState } from "react";
import HomePage from "./components/home/HomePage";
import Navbar from "./components/Navbar";
import NewsBoard from "./components/NewsBoard";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { API_KEY } from "./data";
import {STATUS} from "./status"

function App() {
  const [category, setCategory] = useState("general");

  const [articles, setArticles] = useState({
    data:[],
    status:STATUS.IDLE
  });

  async function getNews() {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${API_KEY}`;

    setArticles({
      data:[],
      status:STATUS.LOADING
    });

    try {
      const response = await fetch(url);
      const data = await response.json();
      setArticles({
        data:data.articles,
        status:STATUS.IDLE     
      });
    } catch (error) {
      console.log(error);
      setArticles({
        data:[],
        status:STATUS.ERROR     
      });
    }
  }

  useEffect(() => {
    getNews();
  }, [category]);

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar setCategory={setCategory} />
        <Routes>
          <Route path="/" element={<HomePage articles={articles}/>} />
          <Route path="/business" element={<NewsBoard articles={articles}/>} />
          <Route path="/entertainment" element={<NewsBoard articles={articles} />}/>
          <Route path="/health" element={<NewsBoard articles={articles}/>} />
          <Route path="/science" element={<NewsBoard articles={articles}  />} />
          <Route path="/sports" element={<NewsBoard articles={articles}  />} />
          <Route path="/technology" element={<NewsBoard articles={articles}  />}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
