"use client";

import React from "react";
import Banner from "../../components/Banner";
import TopSeller from "../../components/TopSeller";
import SuggestProduct from "../../components/SuggestProduct";
import NewestProduct from "../../components/NewestProduct";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <NewestProduct />
      <TopSeller />
      <SuggestProduct />
    </div>
  );
};

export default HomePage;
