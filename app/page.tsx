"use client";

import { Provider } from "react-redux";
import store from "@/src/store";
import HomePage from "@/src/components/HomePage/index";

export default function Home() {
  return (
    <div className="font-sans">
      <HomePage />
    </div>
  );
}
