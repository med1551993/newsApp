import React from "react";
import FirstPart from "./FirstPart"
import SecondPart from "./SecondPart"


const HomePage = ({articles}) => {
  return (
    <section className="w-100">
      <FirstPart articles={articles}/>
      <SecondPart articles={articles}/>
    </section>
  );
};

export default HomePage;
