import React from "react";
import image from "../../assets/news_picture.jpg";
import { useState } from "react";

const SecondPart = ({ articles }) => {
  const [nbre, setNbre] = useState(10);
  const [display, setDisplay] = useState("d-none")

  const addNewsList = ()=>{
    setDisplay("d-inline-block")
    setTimeout(() => {
      setNbre(nbre+5)
      setDisplay("d-none")
    }, "2000");
   
  }

  const changeMounth = (date) => {
    // Creating a date object
    var today = new Date(date); // yyyy-mm-dd

    // Getting short month name (e.g. "Oct")
    var month = today.toLocaleString("default", { month: "short" });
    var upperMonth = month.charAt(0).toUpperCase() + month.slice(1);

    var newDate = date.slice(8,10) + ' ' + upperMonth + ' ' + date.slice(0,4);

    return newDate
  };

  return (
    <div className="second-part container gap-4" style={{ marginTop: "80px" }}>
      <div>
        {articles.slice(0, nbre).map((article, index) => (
          <div
            className="article flex-grow-1 card mb-3 p-3 w-100 border-0 rounded-0"
            style={{ minHeight: "230px" }}
            key={index}
          >
            <a href={article.url} target="_blank">
              <div className="row g-0">
                <div className="col-md-8">
                  <div className="card-body pl-0">
                    <h5 className="card-title hover-underlined">{article.title}</h5>
                    <p className="card-text">{article.description}</p>
                    <p className="card-text">
                      <small className="text-muted">
                        {changeMounth(article.publishedAt.slice(0, 10))}
                      </small>
                    </p>
                  </div>
                </div>
                <div className="col-md-4 pr-0 h-100 overflow-hidden">
                  <img
                    src={article.urlToImage ? article.urlToImage : image}
                    className="img-fluid w-100 h-100"
                    style={{ minHeight: "180px" }}
                    alt={article.title}
                  />
                </div>
              </div>
            </a>
          </div>
        ))}

        <div className="showMore">
          {nbre < articles.length ? (
            <button
              type="button"
              className="btn btn-dark"
              onClick={() => addNewsList()}
            >
              <span className={`spinner-grow spinner-grow-sm ${display}`} role="status" aria-hidden="true" style={{marginRight:"10px"}}></span>
              Show more
            </button>
          ) : null}
        </div>
      </div>

      <div className="newsletter-subscribe p-0 bg-white p-5">
        <div className="">
          <div className="intro">
            <h2 className="text-center newsletter text-danger">
              Subscribe to our Newsletter
            </h2>
            <p className="text-center">
              The latest news from around the world. Timely. Accurate. Fair.{" "}
            </p>
          </div>
          <form className="form-inline" method="post">
            <div className="form-group">
              <input
                className="form-control"
                type="email"
                name="email"
                placeholder="Your Email"
              />
            </div>
            <div className="form-group">
              <button className="btn btn-primary" type="button">
                Subscribe{" "}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SecondPart;
