import React from "react";
import FirstPart from "./FirstPart";
import SecondPart from "./SecondPart";
import { STATUS } from "../../status";
import Error from "../../Error";
import Loading from "../../Loading";

const HomePage = ({ articles }) => {
  /* if (articles.status === STATUS.ERROR) return <Error/>;
  if (articles.status === STATUS.LOADING) return <Loading/>; */

  return (
    <section className="w-100">
      {articles.status === STATUS.ERROR ? <Error /> : null}
      {articles.status === STATUS.LOADING ? <Loading /> : null}

      {/* <FirstPart articles={articles.data}/> */}
      <SecondPart articles={articles.data} />
    </section>
  );
};

export default HomePage;
