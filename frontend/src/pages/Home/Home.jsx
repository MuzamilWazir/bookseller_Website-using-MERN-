import React from "react";
import Banner from "./banner";
import TopSeller from "./TopSeller";
import Recomended from "./Recomended";
import News from "./News";

const Home = () => {
  return (
    <>
      <Banner />
      <TopSeller/>
      <Recomended/>
      <News/>
    </>
  );
};

export default Home;
