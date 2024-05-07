import React from "react";
import image from "../assets/news_picture.jpg";
import Card from 'react-bootstrap/Card';

const HomePage = () => {
  return (
    <section className="w-100">
    <div className="parent h-75 container my-5">
        <div className="div1">
            <Card className="text-white h-100 rounded-0 border-0">
              <Card.Img src={image} alt="Card image" className="h-100 rounded-0"/>
              <Card.ImgOverlay>
              <Card.Title>Card title 1</Card.Title>
              <Card.Text>
              This is a wider card with supporting text below as a natural.
              </Card.Text>
              {/* <Card.Text>Last updated 3 mins ago</Card.Text> */}
              </Card.ImgOverlay>
            </Card>
        </div>
        <div className="div2">
            <Card className="text-white h-100 rounded-0 border-0">
              <Card.Img src={image} alt="Card image" className="h-100 rounded-0"/>
              <Card.ImgOverlay>
              <Card.Title>Card title 2</Card.Title>
              <Card.Text>
              This is a wider card with supporting text below as a natural.
              </Card.Text>
             {/*  <Card.Text>Last updated 3 mins ago</Card.Text> */}
              </Card.ImgOverlay>
            </Card>        
        </div>
        <div className="div3">
            <Card className="text-white h-100 rounded-0 border-0">
              <Card.Img src={image} alt="Card image" className="h-100 rounded-0"/>
              <Card.ImgOverlay>
              <Card.Title>Card title 3</Card.Title>
              <Card.Text>
              This is a wider card with supporting text below as a natural.
              </Card.Text>
             {/*  <Card.Text>Last updated 3 mins ago</Card.Text> */}
              </Card.ImgOverlay>
            </Card>
        </div>
        <div className="div4 h-100">
             <Card className="text-white h-100 rounded-0 border-0">
                <Card.Img src={image} alt="Card image" className="h-100 rounded-0"/>
                <Card.ImgOverlay>
                <Card.Title>Card title 4</Card.Title>
                <Card.Text>
                This is a wider card with supporting text below as a natural.
                </Card.Text>
               {/*  <Card.Text>Last updated 3 mins ago</Card.Text> */}
                </Card.ImgOverlay>
            </Card>
        </div>
        <div className="div5">
             <Card className="text-white h-100 rounded-0 border-0">
              <Card.Img src={image} alt="Card image" className="h-100 rounded-0"/>
              <Card.ImgOverlay>
              <Card.Title>Card title 5</Card.Title>
              <Card.Text>
              This is a wider card with supporting text below as a natura.
              </Card.Text>
            
              </Card.ImgOverlay>
            </Card>
        </div> 
    </div>
    </section>
  );
};

export default HomePage;
