"use client";

import React from "react";
import Header from "../component/Header";
import Banner from "../component/Banner";
import TopSeller from "../component/TopSeller";
import SuggestProduct from "../component/SuggestProduct";
import Footer from "../component/Footer";
import NewestProduct from "../component/NewestProduct";

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
