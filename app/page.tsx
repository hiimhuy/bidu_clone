"use client";

import { Provider } from "react-redux";
import store from "@/src/store";
import Banner from "@/src/components/Banner";
import Header from "../src/components/Header";
import NewestProduct from "@/src/components/NewestProduct";

// import SimpleSlider from "@/src/components/Test";

export default function Home() {
  return (
    <Provider store={store}>
      <div className="font-sans">
        <Header />
        <Banner />
        <NewestProduct />
        {/* <SimpleSlider /> */}
      </div>
    </Provider>
  );
}
