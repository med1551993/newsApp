import React from "react";
import Card from "react-bootstrap/Card";
import image from "../../assets/news_picture.jpg";

const FirstPart = ({ articles }) => {
  return (
    <div className="first-part container h-75" style={{marginTop:"80px"}}>
      <h2 className="text-center">News</h2>
      <div className="parent my-3 h-100">
        {articles.slice(0,5).map((article,index) =>(
          <div className={`div${index+1}`} key={index+1}>
          <a href={article.url ? article.url :''} target="_blank">
            <Card className="text-white h-100 rounded-0 border-0">
              <Card.Img
                src={article.urlToImage ? article.urlToImage : image}
                alt={article.title}
                className="h-100 rounded-0 w-100"
              />
              <Card.ImgOverlay className="bg-overlay d-flex flex-column justify-content-end"> 
                <Card.Title className="text-bottom">
                  {article.title}
                </Card.Title>
                <Card.Text>
                  {article.description
                    ? article.description.slice(0, 60) + "..."
                    : "It is information about something that has just happened"}
                </Card.Text>
                {/* <Card.Text>Last updated 3 mins ago</Card.Text> */}
              </Card.ImgOverlay>
            </Card>
           </a> 
        </div>
        ))}
      </div>
    </div>
  );
};

export default FirstPart;
