import React from "react";
import Card from "react-bootstrap/Card";
import image from "../../assets/news_picture.jpg";

const FirstPart = ({ articles }) => {
  return (
    <div className="first-part container h-75" style={{marginTop:"80px"}}>
      <h2 className="text-center">News</h2>
      <div className="parent my-3 h-50">
        <div className="div1">
          <a href={articles[0].url ? articles[0].url :'#'} target="_blank">
            <Card className="text-white h-100 rounded-0 border-0">
              <Card.Img
                src={articles[0].urlToImage ? articles[0].urlToImage : image}
                alt={articles[0].title}
                className="h-100 rounded-0 w-100"
              />
              <Card.ImgOverlay className="bg-overlay d-flex flex-column justify-content-end"> 
                <Card.Title className="text-bottom">
                  {articles[0].title}
                </Card.Title>
                <Card.Text>
                  {articles[0].description
                    ? articles[0].description.slice(0, 60) + "..."
                    : "It is information about something that has just happened"}
                </Card.Text>
                {/* <Card.Text>Last updated 3 mins ago</Card.Text> */}
              </Card.ImgOverlay>
            </Card>
           </a> 
        </div>
        <div className="div2">
          <a href={articles[1].url ? articles[1].url :'#'} target="_blank"> 
          <Card className="text-white h-100 rounded-0 border-0">
            <Card.Img
              src={articles[1].urlToImage ? articles[1].urlToImage : image}
              alt={articles[1].title}
              className="h-100 rounded-0 w-100"
            />
            <Card.ImgOverlay className="bg-overlay d-flex flex-column justify-content-end">
              <Card.Title>{articles[1].title}</Card.Title>
              <Card.Text>
                {articles[1].description
                  ? articles[1].description.slice(0, 60) + "..."
                  : "It is information about something that has just happened"}
              </Card.Text>
              {/*  <Card.Text>Last updated 3 mins ago</Card.Text> */}
            </Card.ImgOverlay>
          </Card>
           </a>
        </div>
        <div className="div3">
         <a href={articles[2].url ? articles[2].url :'#'} target="_blank"> 
          <Card className="text-white h-100 rounded-0 border-0">
            <Card.Img
              src={articles[2].urlToImage ? articles[2].urlToImage : image}
              alt={articles[2].title}
              className="h-100 rounded-0"
            />
            <Card.ImgOverlay className="bg-overlay d-flex flex-column justify-content-end">
              <Card.Title>{articles[2].title}</Card.Title>
              <Card.Text>
                {articles[2].description
                  ? articles[2].description.slice(0, 60) + "..."
                  : "It is information about something that has just happened"}
              </Card.Text>
              {/*  <Card.Text>Last updated 3 mins ago</Card.Text> */}
            </Card.ImgOverlay>
          </Card>
           </a> 
        </div>
        <div className="div4 h-100">
         <a href={articles[3].url ? articles[3].url :'#'} target="_blank"> 
          <Card className="text-white h-100 rounded-0 border-0">
            <Card.Img
              src={articles[3].urlToImage ? articles[3].urlToImage : image}
              alt={articles[3].title}
              className="h-100 rounded-0"
            />
            <Card.ImgOverlay className="bg-overlay d-flex flex-column justify-content-end">
              <Card.Title>{articles[3].title}</Card.Title>
              <Card.Text>
                {articles[3].description
                  ? articles[3].description.slice(0, 60) + "..."
                  : "It is information about something that has just happened"}
              </Card.Text>
              {/*  <Card.Text>Last updated 3 mins ago</Card.Text> */}
            </Card.ImgOverlay>
          </Card>
          </a> 
        </div>
        <div className="div5">
         <a href={articles[4].url ? articles[4].url :'#'} target="_blank"> 
          <Card className="text-white h-100 rounded-0 border-0">
            <Card.Img
              src={articles[4].urlToImage ? articles[4].urlToImage : image}
              alt={articles[4].title}
              className="h-100 rounded-0"
            />
            <Card.ImgOverlay className="bg-overlay d-flex flex-column justify-content-end">
              <Card.Title>{articles[4].title}</Card.Title>
              <Card.Text>
                {articles[4].description
                  ? articles[4].description.slice(0, 60) + "..."
                  : "It is information about something that has just happened"}
              </Card.Text>
            </Card.ImgOverlay>
          </Card>
           </a> 
        </div>
      </div>
    </div>
  );
};

export default FirstPart;
