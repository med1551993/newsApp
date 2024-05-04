import "./App.css";
import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";
import NewsBoard from "./components/NewsBoard";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [category, setCategory] = useState("general");

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar setCategory={setCategory} />
        <Routes>
        <Route path="/" element={<HomePage/>} />
          <Route path="/business" element={<NewsBoard category={category} />} />
          <Route path="/entertainment" element={<NewsBoard category={category} />} />
          <Route path="/health" element={<NewsBoard category={category} />} />
          <Route path="/science" element={<NewsBoard category={category} />} />
          <Route path="/sports" element={<NewsBoard category={category} />} />
          <Route path="/technology" element={<NewsBoard category={category} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
