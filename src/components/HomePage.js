import React from "react";
import image from "../assets/news_picture.jpg";
import Card from "react-bootstrap/Card";

const HomePage = () => {
  return (
    <section className="w-100">
      <h2 className="text-center">News</h2>
      <div className="parent h-75 container my-5">
        <div className="div1">
          <Card className="text-white h-100 rounded-0 border-0">
            <Card.Img
              src={image}
              alt="Card image"
              className="h-100 rounded-0"
            />
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
            <Card.Img
              src={image}
              alt="Card image"
              className="h-100 rounded-0"
            />
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
            <Card.Img
              src={image}
              alt="Card image"
              className="h-100 rounded-0"
            />
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
            <Card.Img
              src={image}
              alt="Card image"
              className="h-100 rounded-0"
            />
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
            <Card.Img
              src={image}
              alt="Card image"
              className="h-100 rounded-0"
            />
            <Card.ImgOverlay>
              <Card.Title>Card title 5</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natura.
              </Card.Text>
            </Card.ImgOverlay>
          </Card>
        </div>
      </div>

      <div className="second-part container gap-4 my-3">
        <div className="flex-grow-1">
          <div className="card mb-3 w-100 border-0 border-bottom rounded-0 pb-4">
            <div className="row g-0">
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <p className="card-text">
                    <small className="text-muted">Last updated 3 mins ago</small>
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <img src={image} className="img-fluid w-100" alt="..." />
              </div>
            </div>
          </div>
        </div>

        <div className="newsletter-subscribe p-0 bg-warning p-5">
          <div className="">
              <div className="intro">
                  <h2 className="text-center newsletter">Subscribe to our Newsletter</h2>
                  <p className="text-center">The latest news from around the world. Timely. Accurate. Fair. </p>
              </div>
              <form className="form-inline" method="post">
                  <div className="form-group"><input className="form-control" type="email" name="email" placeholder="Your Email"/></div>
                  <div className="form-group"><button className="btn btn-primary" type="button">Subscribe </button></div>
              </form>
          </div>
       </div>
      </div>
    </section>
  );
};

export default HomePage;
